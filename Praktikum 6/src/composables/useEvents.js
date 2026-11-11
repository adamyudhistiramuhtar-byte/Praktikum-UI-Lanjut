import { ref, computed, watch } from 'vue';

const events = ref([]);
const loading = ref(false);
const error = ref('');
const storageKey = 'gatherly_user_registrations';
let saved = [];
try { saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (!Array.isArray(saved)) saved = []; } catch { saved = []; }
const userRegistrations = ref(saved);
watch(userRegistrations, value => localStorage.setItem(storageKey, JSON.stringify(value)), { deep: true });
const sameId = (a, b) => String(a) === String(b);
let listRequest = 0;
let revision = 0;
const upsert = item => { const i = events.value.findIndex(e => sameId(e.id, item.id)); if (i < 0) events.value.unshift(item); else events.value.splice(i, 1, item); };

async function request(path = '', options = {}) {
  const base = (import.meta.env.VITE_API_URL || '').trim().replace(/\/+$/, '');
  if (!base || base.includes('YOUR-ENDPOINT')) throw new Error('Konfigurasi VITE_API_URL belum tersedia. Isi .env dengan Base URL MockAPI yang valid.');
  let response;
  try { response = await fetch(`${base}/events${path}`, options); }
  catch { throw new Error('Tidak dapat terhubung ke server. Periksa koneksi internet dan coba lagi.'); }
  if (!response.ok) {
    const problem = new Error(response.status === 404 ? 'Event tidak ditemukan atau telah dihapus.' : `Server menolak permintaan (HTTP ${response.status}).`);
    problem.status = response.status;
    throw problem;
  }
  if (response.status === 204) return null;
  return response.json();
}
const json = data => ({ headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
async function fetchEvents() {
  const requestId = ++listRequest, startRevision = revision;
  loading.value = true; error.value = '';
  try {
    const data = await request();
    if (!Array.isArray(data)) throw new Error('Respons server tidak berisi daftar event yang valid.');
    if (requestId === listRequest && startRevision !== revision) return await fetchEvents();
    if (requestId === listRequest) events.value = data;
    return data;
  } catch (err) { if (requestId === listRequest) error.value = err.message; return null; }
  finally { if (requestId === listRequest) loading.value = false; }
}
async function fetchEventById(id) {
  const startRevision = revision;
  try {
    const item = await request(`/${encodeURIComponent(id)}`);
    if (!item || !sameId(item.id, id)) throw new Error('Respons server tidak berisi event yang diminta.');
    if (startRevision === revision) upsert(item);
    return item;
  } catch (err) { if (err.status === 404 && startRevision === revision) events.value = events.value.filter(e => !sameId(e.id, id)); throw err; }
}
async function createEvent(data) {
  const item = await request('', { method: 'POST', ...json({ title: data.title.trim(), cat: data.cat, date: data.date, loc: data.loc.replace(/^📍\s*/, '').trim(), quota: Number(data.quota), desc: data.desc.trim(), done: false }) });
  revision++; upsert(item); return item;
}
async function completeEvent(id) {
  const item = await request(`/${encodeURIComponent(id)}`, { method: 'PUT', ...json({ done: true }) });
  revision++; upsert(item); return item;
}
async function deleteEvent(id) {
  await request(`/${encodeURIComponent(id)}`, { method: 'DELETE' });
  revision++; events.value = events.value.filter(e => !sameId(e.id, id));
  userRegistrations.value = userRegistrations.value.filter(r => !sameId(r.eventId, id));
}
const getEventById = id => events.value.find(e => sameId(e.id, id));
function registerAttendee(eventId, participantData) {
  const event = getEventById(eventId);
  if (!event || event.done || event.quota <= 0 || isUserRegistered(eventId)) return null;
  const record = { id: Date.now(), eventId: String(eventId), eventTitle: event.title, eventCat: event.cat, eventDate: event.date, eventLoc: event.loc, bookingCode: 'GTH-' + Date.now().toString().slice(-4), registeredAt: new Date().toISOString(), fullName: participantData.fullName.trim(), email: participantData.email.trim(), phone: participantData.phone.trim(), dob: participantData.dob, reason: participantData.reason.trim() };
  event.quota = Math.max(0, event.quota - 1); userRegistrations.value.unshift(record); return record;
}
const isUserRegistered = id => userRegistrations.value.some(r => sameId(r.eventId, id));
const getRegistrationByEventId = id => userRegistrations.value.find(r => sameId(r.eventId, id));
function cancelRegistration(id) {
  const index = userRegistrations.value.findIndex(r => sameId(r.eventId, id));
  if (index < 0) return false;
  userRegistrations.value.splice(index, 1); const event = getEventById(id); if (event) event.quota += 1; return true;
}
export function useEvents() {
 return { events, loading, error, totalEvents: computed(() => events.value.length), activeEvents: computed(() => events.value.filter(e => !e.done)), completedEvents: computed(() => events.value.filter(e => e.done)), userRegistrations, totalRegistrations: computed(() => userRegistrations.value.length), fetchEvents, fetchEventById, createEvent, completeEvent, deleteEvent, getEventById, registerAttendee, isUserRegistered, getRegistrationByEventId, cancelRegistration, clearAllRegistrations: () => { userRegistrations.value = []; } };
}
