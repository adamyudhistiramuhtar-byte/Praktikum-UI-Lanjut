<template>
  <div class="about-page">
    <div class="about-header">
      <h1>About Gatherly</h1>
      <p>Building the future of event experiences, one community at a time.</p>
    </div>

    <div class="about-content">
      <div class="text-block">
        <h2>Our Mission</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium.
        </p>
      </div>

      <div class="text-block">
        <h2>Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
          imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  max-width: 900px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 3rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.about-header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.about-header h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.about-header p {
  font-size: 1.25rem;
  color: var(--text-muted);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 1rem;
}

.text-block h2 {
  color: var(--text-dark);
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.text-block h2::before {
  content: '';
  display: block;
  width: 32px;
  height: 6px;
  background: var(--primary);
  border-radius: 3px;
}

.text-block p {
  color: var(--text-body);
  line-height: 1.9;
  font-size: 1.15rem;
}
</style>
