<template>
  <div class="event-list-page">
    <div class="header-section">
      <h2 class="section-title">Upcoming Events</h2>
      <p class="section-desc">Discover the latest gatherings and activities happening near you.</p>
    </div>

    <div class="event-grid">
      <div class="event-card" v-for="i in 6" :key="i">
        <div class="event-body">
          <div class="event-meta">
            <span class="event-date">Oct {{ 10 + i }}, 2026</span>
            <span class="event-category">Community</span>
          </div>
          <h3>Community Gathering {{ i }}</h3>
          <p class="event-loc">📍 Main Auditorium, City Center</p>
          <p class="event-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at velit vel magna
            interdum scelerisque.
          </p>
          <div class="card-footer">
            <router-link :to="`/browse/events/${i}`" class="btn-link"
              >View Details &rarr;</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-section {
  margin-bottom: 3rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.15rem;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}

.event-card {
  background: var(--bg-surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: var(--transition-spring);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.event-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-soft);
  box-shadow: var(--shadow-lg);
}

.event-body {
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.event-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.event-date {
  background: var(--primary-soft);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.85rem;
}

.event-category {
  color: var(--text-light);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.event-body h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.event-loc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-desc {
  color: var(--text-body);
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.card-footer {
  border-top: 1px solid var(--border-light);
  padding-top: 1.5rem;
}

.btn-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  font-weight: 700;
  text-decoration: none;
  transition: var(--transition-fast);
}

.btn-link:hover {
  color: var(--primary);
  transform: translateX(5px);
}
</style>
