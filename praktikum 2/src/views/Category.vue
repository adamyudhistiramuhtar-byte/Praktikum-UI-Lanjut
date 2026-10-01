<template>
  <div class="category-page">
    <h2 class="section-title">Explore by Category</h2>
    <div class="category-grid">
      <div class="category-card" v-for="(cat, index) in categories" :key="index">
        <div class="cat-icon">{{ cat.icon }}</div>
        <h3>{{ cat.name }}</h3>
        <p>{{ cat.count }} Events</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: 'Music & Concerts', icon: '🎵', count: 24 },
  { name: 'Technology', icon: '💻', count: 18 },
  { name: 'Art & Design', icon: '🎨', count: 12 },
  { name: 'Business', icon: '💼', count: 30 },
  { name: 'Health & Wellness', icon: '🧘‍♀️', count: 15 },
  { name: 'Food & Drink', icon: '🍽️', count: 22 },
]
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 2rem;
  text-align: center;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

.category-card {
  background: var(--bg-surface);
  padding: 2.5rem 1.5rem;
  border-radius: var(--radius-xl);
  text-align: center;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-spring);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-soft);
}

.cat-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--primary-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  transition: var(--transition-spring);
}

.category-card:hover .cat-icon {
  background: var(--primary);
  transform: scale(1.1);
}

.category-card h3 {
  color: var(--text-dark);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
}
</style>
