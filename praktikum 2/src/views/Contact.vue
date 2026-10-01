<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you. Please fill out the form below or reach out via our contact
        info.
      </p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="info-item">
          <div class="info-icon">📍</div>
          <div>
            <h3>Our Office</h3>
            <p>123 Event Street, Tech City, 10101</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">📞</div>
          <div>
            <h3>Phone</h3>
            <p>+62 812 3456 7890</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">✉️</div>
          <div>
            <h3>Email</h3>
            <p>hello@gatherly.com</p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <form @submit.prevent>
          <div class="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" class="form-control" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" class="form-control" />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea placeholder="How can we help you?" rows="5" class="form-control"></textarea>
          </div>
          <button class="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  max-width: 1100px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-header h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.contact-header p {
  font-size: 1.15rem;
  color: var(--text-muted);
}

.contact-content {
  display: flex;
  gap: 4rem;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--bg-surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-spring);
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-soft);
}

.info-icon {
  font-size: 2rem;
  background: var(--primary-soft);
  padding: 1rem;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-spring);
}

.info-item:hover .info-icon {
  background: var(--primary);
  color: white;
  transform: scale(1.05);
}

.info-item h3 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.info-item p {
  color: var(--text-body);
  line-height: 1.6;
}

.contact-form {
  flex: 1.5;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  padding: 3.5rem;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--glass-border);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 0.95rem;
}

.form-control {
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  font-size: 1rem;
  outline: none;
  transition: var(--transition-fast);
  font-family: inherit;
  background: var(--bg-surface);
}

.form-control:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px var(--primary-soft);
}

.btn-submit {
  width: 100%;
  padding: 1.2rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-xl);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-spring);
  box-shadow: 0 8px 25px var(--primary-glow);
}

.btn-submit:hover {
  background: var(--primary-hover);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px var(--primary-glow);
}

@media (max-width: 900px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>
