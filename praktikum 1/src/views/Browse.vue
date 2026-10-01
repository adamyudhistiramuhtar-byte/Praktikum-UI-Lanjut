<template>
  <div class="browse-page">
    <div class="browse-header">
      <h1>Browse & Discover</h1>
      <p>Find the events and categories that matter most to you.</p>
    </div>
    <div class="browse-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.browse-page {
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.browse-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-medium);
  text-align: center;
}

.browse-header h1 {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 0.8rem;
  letter-spacing: -0.02em;
}

.browse-header p {
  color: var(--text-muted);
  font-size: 1.15rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
