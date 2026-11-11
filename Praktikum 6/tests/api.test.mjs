import assert from 'node:assert/strict';
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { nextTick } from 'vue';

process.env.VITE_API_URL = 'https://test.example/api/v1';
const storage = new Map();
globalThis.localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key) };
const temporaryModule = new URL('./.useEvents-test.mjs', import.meta.url);
const source = await readFile(new URL('../src/composables/useEvents.js', import.meta.url), 'utf8');
await writeFile(temporaryModule, source.replaceAll('import.meta.env.VITE_API_URL', JSON.stringify(process.env.VITE_API_URL)));
try {
  const { useEvents } = await import(temporaryModule.href);
  const api = useEvents();
  const item = { id: '1', title: 'Event', cat: 'Workshop', date: 'Nov 15, 2026', loc: 'Bandung', quota: 2, desc: 'Description', done: false };
  let calls = [];
  let data = [item];
  let mode = 'ok';
  globalThis.fetch = async (url, options = {}) => {
    calls.push([url, options.method || 'GET']);
    if (mode === 'offline') throw new TypeError('offline');
    const id = url.match(/\/events\/([^/]+)$/)?.[1];
    const method = options.method || 'GET';
    if (method === 'GET' && id) return data.find(e => e.id === id) ? Response.json(data.find(e => e.id === id)) : new Response('', { status: 404 });
    if (method === 'GET') return Response.json(data);
    if (method === 'POST') { const created = { ...JSON.parse(options.body), id: '2' }; data = [...data, created]; return Response.json(created); }
    if (method === 'PUT') { data = data.map(e => e.id === id ? { ...e, ...JSON.parse(options.body) } : e); return Response.json(data.find(e => e.id === id)); }
    if (method === 'DELETE') { data = data.filter(e => e.id !== id); return Response.json({ id }); }
  };
  let release;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (...args) => new Promise(resolve => { release = () => resolve(originalFetch(...args)); });
  const pending = api.fetchEvents();
  assert.equal(api.loading.value, true, 'loading during delayed GET');
  release(); await pending;
  assert.equal(api.loading.value, false); assert.equal(api.events.value.length, 1);
  globalThis.fetch = originalFetch;
  assert.equal(calls[0][0], 'https://test.example/api/v1/events');
  data = []; await api.fetchEvents(); assert.equal(api.events.value.length, 0, 'empty response');
  mode = 'offline'; await api.fetchEvents(); assert.match(api.error.value, /terhubung/); mode = 'ok';
  data = [item]; await api.fetchEvents(); assert.equal(api.error.value, ''); assert.equal(api.events.value.length, 1, 'retry');
  assert.equal((await api.fetchEventById('1')).title, 'Event');
  await assert.rejects(api.fetchEventById('99'), e => e.status === 404);
  const created = await api.createEvent({ ...item, title: ' Created ', quota: 4 });
  assert.equal(created.title, 'Created'); assert.equal(api.getEventById(2).id, '2');
  const registration = api.registerAttendee(2, { fullName: 'Test User', email: 'test@example.com', phone: '123', dob: '2000-01-01', reason: 'Test reason' });
  assert.ok(registration); assert.ok(api.isUserRegistered('2')); assert.equal(api.registerAttendee(2, { }), null);
  await nextTick(); assert.ok(storage.get('gatherly_user_registrations'));
  await api.completeEvent(2); assert.equal(api.getEventById('2').done, true);
  mode = 'offline'; await assert.rejects(api.deleteEvent(2)); assert.ok(api.getEventById(2)); assert.ok(api.isUserRegistered(2));
  mode = 'ok'; await api.deleteEvent(2); assert.equal(api.getEventById(2), undefined); assert.equal(api.isUserRegistered(2), false);
  assert.deepEqual(calls.filter(([, method]) => method !== 'GET').map(([, method]) => method), ['POST', 'PUT', 'DELETE', 'DELETE']);
  console.log('PASS: delayed GET/loading, data, empty, offline, retry, detail/404, POST, registration persistence, PUT, failed DELETE, DELETE and ticket cleanup');
} finally { await unlink(temporaryModule); }
