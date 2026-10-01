<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <span class="badge">Welcome to Gatherly ✨</span>
        <h1 class="hero-title">Connect, Discover,<br/>and Experience</h1>
        <p class="hero-subtitle">
          Join our vibrant community to explore the best events tailored for you.
          Discover amazing experiences right in your neighborhood or around the globe.
        </p>
        <div class="hero-actions">
          <router-link to="/browse/events" class="btn btn-primary">
            Discover Events
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </router-link>
          <router-link to="/about" class="btn btn-secondary">Learn More</router-link>
        </div>
      </div>
      
      <div class="hero-decoration dec-1"></div>
      <div class="hero-decoration dec-2"></div>
    </section>

    <section class="features">
      <div class="feature-card" v-for="i in 3" :key="i">
        <div class="feature-icon-wrapper">
          <div class="feature-icon">{{ ['🎯', '🌍', '🤝'][i-1] }}</div>
        </div>
        <h3>{{ ['Curated Events', 'Global Reach', 'Community Driven'][i-1] }}</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>

    <section class="sitemap-visual">
      <div class="sitemap-header">
        <h2>Website Structure / Site-Map</h2>
        <p class="sitemap-desc">A quick overview of how this application is structured via Vue Router.</p>
      </div>
      <ul class="tree">
        <li>
          <router-link to="/">Home</router-link>
          <ul>
            <li><router-link to="/about">About</router-link></li>
            <li>
              <router-link to="/browse">Browse</router-link>
              <ul>
                <li>
                  <router-link to="/browse/events">Event List</router-link>
                  <ul>
                    <li><router-link to="/browse/events/1">Event Detail (Example)</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/browse/category">Category</router-link></li>
              </ul>
            </li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* ================== HERO ================== */
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.hero-decoration {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: -1;
}

.dec-1 {
  top: -20%;
  left: -10%;
  width: 300px;
  height: 300px;
  background: var(--primary-glow);
}

.dec-2 {
  bottom: -20%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: var(--secondary-glow);
}

.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.badge {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  background: var(--bg-surface);
  color: var(--primary);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  animation: pulse-glow 3s infinite;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--text-dark) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 650px;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 1.2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  border-radius: var(--radius-xl);
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: var(--transition-spring);
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 8px 25px var(--primary-glow);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 30px var(--primary-glow);
}

.btn-secondary {
  background: var(--bg-surface);
  color: var(--text-dark);
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* ================== FEATURES ================== */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-surface);
  padding: 3rem 2.5rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-spring);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-soft);
}

.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--primary-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: var(--transition-spring);
}

.feature-card:hover .feature-icon-wrapper {
  background: var(--primary);
  transform: scale(1.1) rotate(5deg);
}

.feature-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.feature-card h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.feature-card p {
  color: var(--text-muted);
  line-height: 1.7;
}

/* ================== SITEMAP ================== */
.sitemap-visual {
  padding: 4rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-md);
}

.sitemap-header {
  text-align: center;
  margin-bottom: 3rem;
}

.sitemap-visual h2 {
  color: var(--text-dark);
  margin-bottom: 0.8rem;
  font-size: 2rem;
}

.sitemap-desc {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.tree, .tree ul {
  list-style: none;
  padding-left: 30px;
}

.tree li {
  margin: 16px 0;
  position: relative;
}

.tree li::before {
  content: "";
  position: absolute;
  top: -16px;
  left: -20px;
  border-left: 2px solid var(--border-medium);
  border-bottom: 2px solid var(--border-medium);
  border-bottom-left-radius: 8px;
  width: 15px;
  height: 38px;
}

.tree a {
  text-decoration: none;
  color: var(--text-body);
  font-weight: 500;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  display: inline-block;
  transition: var(--transition-fast);
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-sm);
}

.tree a:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateX(5px);
  box-shadow: var(--shadow-md);
}

.tree .router-link-exact-active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  box-shadow: 0 4px 15px var(--primary-glow);
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.8rem; }
  .hero-actions { flex-direction: column; width: 100%; }
  .sitemap-visual { padding: 2rem; }
}
</style>
