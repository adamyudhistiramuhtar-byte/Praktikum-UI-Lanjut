<template>
  <div class="event-detail-page">
    <button @click="$router.push('/browse/events')" class="btn-back">&larr; Back to Events</button>

    <div class="detail-header">
      <div class="header-content">
        <span class="event-tag">Community Event</span>
        <h1>Community Gathering {{ $route.params.id }}</h1>
        <div class="meta-info">
          <div class="meta-item">
            <span class="icon">📅</span>
            <span>October 15, 2026</span>
          </div>
          <div class="meta-item">
            <span class="icon">📍</span>
            <span>Main Auditorium, City Center</span>
          </div>
          <div class="meta-item">
            <span class="icon">👥</span>
            <span>500+ Attendees</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-content">
      <div class="main-desc">
        <h2>About This Event</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
          sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
          nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
        </p>
        <p>
          Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id
          metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim
          congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.
        </p>

        <h2>Agenda</h2>
        <ul class="agenda-list">
          <li><strong>09:00 AM</strong> - Registration & Welcome Coffee</li>
          <li><strong>10:00 AM</strong> - Opening Keynote Speech</li>
          <li><strong>11:30 AM</strong> - Networking Session</li>
          <li><strong>01:00 PM</strong> - Closing Remarks</li>
        </ul>
      </div>
      <div class="sidebar">
        <div class="ticket-card">
          <h3>Registration</h3>
          <p class="price">Free</p>
          <p class="ticket-desc">Secure your spot today before it runs out.</p>
          <button class="btn-register">Register Now</button>
          <p class="spots">Only 45 spots left!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-back {
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-full);
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2.5rem;
  transition: var(--transition-fast);
  padding: 0.6rem 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-back:hover {
  color: var(--primary);
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
  transform: translateX(-5px);
}

.detail-header {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-md);
  padding: 5rem 4rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
}

.detail-header::before {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: var(--primary-glow);
  filter: blur(50px);
  border-radius: 50%;
  z-index: 0;
}

.header-content {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.event-tag {
  display: inline-block;
  background: var(--bg-surface);
  color: var(--primary);
  padding: 0.5rem 1.2rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.header-content h1 {
  color: var(--text-dark);
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-body);
  font-weight: 500;
  font-size: 1.1rem;
}

.meta-item .icon {
  font-size: 1.5rem;
}

.detail-content {
  display: flex;
  gap: 5rem;
}

.main-desc {
  flex: 2;
}

.main-desc h2 {
  color: var(--text-dark);
  margin-bottom: 1.8rem;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.main-desc h2::before {
  content: "";
  display: block;
  width: 24px;
  height: 6px;
  background: var(--primary);
  border-radius: 3px;
}

.main-desc p {
  color: var(--text-body);
  line-height: 1.8;
  margin-bottom: 1.8rem;
  font-size: 1.1rem;
}

.agenda-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background: var(--bg-surface);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-light);
  overflow: hidden;
}

.agenda-list li {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-body);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: var(--transition-fast);
}

.agenda-list li:hover {
  background: var(--bg-page);
}

.agenda-list li:last-child {
  border-bottom: none;
}

.agenda-list li strong {
  color: var(--primary);
  font-weight: 700;
  min-width: 100px;
}

.sidebar {
  flex: 1;
}

.ticket-card {
  background: var(--bg-surface);
  padding: 3rem 2.5rem;
  border-radius: var(--radius-2xl);
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-md);
  text-align: center;
  position: sticky;
  top: 100px;
}

.ticket-card h3 {
  color: var(--text-dark);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.price {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.ticket-desc {
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.btn-register {
  width: 100%;
  padding: 1.2rem;
  background: var(--text-dark);
  color: white;
  border: none;
  border-radius: var(--radius-xl);
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition-spring);
  box-shadow: var(--shadow-sm);
}

.btn-register:hover {
  background: var(--primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.spots {
  margin-top: 1.5rem;
  color: var(--secondary);
  font-weight: 700;
  font-size: 1rem;
}

@media (max-width: 900px) {
  .detail-content { flex-direction: column; gap: 3rem; }
  .detail-header { padding: 3rem 2rem; }
  .header-content h1 { font-size: 2.5rem; }
}
</style>
