<script setup lang="ts">
import Navbar from '@/components/app/Navbar.vue';
import Breadcrumb from '@/components/app/Breadcrumb.vue';
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <div class="content-wrapper">
        <Breadcrumb />
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-page);
}

.main-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-normal), transform var(--transition-normal);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(15px) scale(0.98);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-15px) scale(0.98);
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 1rem;
  }
}
</style>
