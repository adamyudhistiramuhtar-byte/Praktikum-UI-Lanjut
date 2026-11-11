<script setup>
import { reactive, ref } from 'vue';
import AppCard from '@/components/ui/AppCard.vue';
import AppButton from '@/components/ui/AppButton.vue';

const emit = defineEmits(['submit', 'cancel']);
const props = defineProps({ loading: Boolean, submitError: { type: String, default: '' } });
const errors = reactive({ title: '', cat: '', date: '', loc: '', quota: '', desc: '' });

const form = reactive({
  title: '',
  cat: 'Workshop',
  date: '',
  loc: '',
  quota: 100,
  price: 'Free',
  desc: ''
});

const errorMessage = ref('');

const formatEventDate = (dt) => {
  if (!dt) return '';
  const dateObj = new Date(dt);
  if (isNaN(dateObj.getTime())) return dt;
  const datePart = dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  const timePart = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  return `${datePart} • ${timePart}`;
};

const validateField = field => {
  const value = form[field];
  const checks = {
    title: () => !value.trim() ? 'Event title is required.' : value.trim().length < 3 ? 'Event title must be at least 3 characters.' : '',
    cat: () => ['Workshop', 'Meetup', 'Competition', 'Seminar', 'Conference'].includes(value) ? '' : 'Select a valid category.',
    date: () => value && !Number.isNaN(new Date(value).getTime()) ? '' : 'A valid event date and time is required.',
    loc: () => value.trim() ? '' : 'Event location is required.',
    quota: () => Number.isInteger(Number(value)) && Number(value) >= 1 && value !== '' ? '' : 'Quota must be at least 1 attendee.',
    desc: () => !value.trim() ? 'Event description is required.' : value.trim().length < 10 ? 'Please write at least 10 characters for the description.' : ''
  };
  errors[field] = checks[field]();
};
const handleSubmitEvent = () => {
  if (props.loading) return;
  Object.keys(errors).forEach(validateField);
  if (Object.values(errors).some(Boolean)) { errorMessage.value = 'Please correct the highlighted fields below before publishing the event.'; return; }
  errorMessage.value = '';
  emit('submit', { ...form, date: formatEventDate(form.date) });
};
const resetForm = () => {
  Object.assign(form, { title: '', cat: 'Workshop', date: '', loc: '', quota: 100, price: 'Free', desc: '' });
  Object.keys(errors).forEach(key => errors[key] = ''); errorMessage.value = '';
};
defineExpose({ resetForm });
</script>

<template>
  <AppCard class="form-card">
    <h3>Create New Event Form</h3>
    <p class="form-subtitle">Information entered here will be instantly published to the Gatherly public catalog.</p>

    <div v-if="errorMessage || submitError" class="alert-box alert-error" role="alert">
      ⚠️ {{ errorMessage || submitError }}
    </div>

    <form @submit.prevent="handleSubmitEvent" class="event-form" novalidate>
      <div class="form-group">
        <label for="event-title">Event Title *</label>
        <input v-model="form.title" id="event-title" :aria-invalid="!!errors.title" :aria-describedby="errors.title ? 'error-title' : undefined" @blur="validateField('title')" type="text" placeholder="e.g. Modern UI/UX Masterclass" class="form-input" />
          <span v-if="errors.title" id="error-title" class="field-error">{{ errors.title }}</span>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="event-cat">Event Category *</label>
          <select v-model="form.cat" id="event-cat" :aria-invalid="!!errors.cat" :aria-describedby="errors.cat ? 'error-cat' : undefined" @blur="validateField('cat')" class="form-input">
            <option value="Workshop">Workshop</option>
            <option value="Meetup">Meetup</option>
            <option value="Competition">Competition</option>
            <option value="Seminar">Seminar</option>
            <option value="Conference">Conference</option>
          </select>
          <span v-if="errors.cat" id="error-cat" class="field-error">{{ errors.cat }}</span>
        </div>
        <div class="form-group">
          <label for="event-date">Date & Time *</label>
          <input v-model="form.date" id="event-date" :aria-invalid="!!errors.date" :aria-describedby="errors.date ? 'error-date' : undefined" @blur="validateField('date')" type="datetime-local" class="form-input" />
          <span v-if="errors.date" id="error-date" class="field-error">{{ errors.date }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="event-loc">Event Location *</label>
          <input v-model="form.loc" id="event-loc" :aria-invalid="!!errors.loc" :aria-describedby="errors.loc ? 'error-loc' : undefined" @blur="validateField('loc')" type="text" placeholder="e.g. Innovation Center, Jakarta" class="form-input" />
          <span v-if="errors.loc" id="error-loc" class="field-error">{{ errors.loc }}</span>
        </div>
        <div class="form-group">
          <label for="event-quota">Attendee Quota</label>
          <input v-model.number="form.quota" id="event-quota" :aria-invalid="!!errors.quota" :aria-describedby="errors.quota ? 'error-quota' : undefined" @blur="validateField('quota')" type="number" min="1" step="1" placeholder="100" class="form-input" />
          <span v-if="errors.quota" id="error-quota" class="field-error">{{ errors.quota }}</span>
        </div>
      </div>

      <div class="form-group">
        <label for="event-desc">Event Description *</label>
        <textarea v-model="form.desc" id="event-desc" :aria-invalid="!!errors.desc" :aria-describedby="errors.desc ? 'error-desc' : undefined" @blur="validateField('desc')" rows="4" placeholder="Describe the agenda, speakers, and key takeaways..." class="form-input"></textarea>
          <span v-if="errors.desc" id="error-desc" class="field-error">{{ errors.desc }}</span>
      </div>

      <div class="form-actions">
        <button type="button" class="btn-secondary-action" :disabled="loading" @click="emit('cancel')">
          Cancel
        </button>
        <AppButton variant="primary" type="submit" :loading="loading">
          Publish Event Now
        </AppButton>
      </div>
    </form>
  </AppCard>
</template>

<style scoped>
.form-card {
  padding: var(--space-8);
  max-width: 800px;
  margin: 0 auto var(--space-12) auto;
}

.form-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--space-1);
}

.form-subtitle {
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.alert-box {
  padding: var(--space-3) var(--space-4);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: var(--space-6);
}

.alert-error {
  background: #ffe3e3;
  color: #c92a2a;
  border: 1px solid #ffa8a8;
}

.alert-success {
  background: #d3f9d8;
  color: #2b8a3e;
  border: 1px solid #b2f2bb;
}

.event-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
}

.form-input {
  padding: 12px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;
  box-sizing: border-box;
  width: 100%;
}

.form-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(102, 68, 255, 0.15);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-4);
  margin-top: 12px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.btn-secondary-action {
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  padding: var(--space-3) var(--space-6);
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-muted);
}

.btn-secondary-action:hover {
  background: #e9ecef;
  color: var(--text-main);
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
.field-error { color: var(--error-text); font-size: .9rem; }
</style>
