<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const route = useRoute()

const menus = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Browse',
    path: '/browse',
    children: [
      {
        name: 'Event List',
        path: '/browse/events',
        children: [{ name: 'Event Detail (Sample)', path: '/browse/events/1' }],
      },
      { name: 'Category', path: '/browse/category' },
    ],
  },
  { name: 'Contact', path: '/contact' },
  { name: 'Organizer Dashboard', path: '/dashboard' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-container">
      <router-link to="/" class="logo">
        <svg
          width="28"
          height="32"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="logo-icon"
        >
          <path d="M12 0L22.3923 6V18L12 24L1.6077 18V6L12 0Z" fill="white" />
          <path
            d="M15 9.5 C15 9.5 14 8 12 8 C9.5 8 8 10 8 12.5 C8 15 9.5 17 12 17 C14 17 15 16
15.5 14.5 V 12.5 H 12.5"
            stroke="#1A1643"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="logo-text">Gatherly</span>
      </router-link>

      <ul class="nav-menu">
        <li class="nav-item" v-for="menu in menus" :key="menu.name">
          <router-link
            :to="menu.path"
            class="nav-link"
            :class="{
              active:
                route.path === menu.path ||
                (menu.path !== '/' && route.path.startsWith(menu.path)),
            }"
          >
            {{ menu.name }}
            <svg
              v-if="menu.children"
              class="dropdown-indicator"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </router-link>

          <!-- First Level Dropdown -->
          <ul v-if="menu.children" class="dropdown-menu">
            <li v-for="child in menu.children" :key="child.name" class="dropdown-item">
              <router-link :to="child.path" class="dropdown-link">
                {{ child.name }}
                <svg
                  v-if="child.children"
                  class="submenu-indicator"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </router-link>

              <!-- Second Level Dropdown (Submenu) -->
              <ul v-if="child.children" class="submenu">
                <li v-for="subchild in child.children" :key="subchild.name" class="submenu-item">
                  <router-link :to="subchild.path" class="dropdown-link">
                    {{ subchild.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <div class="nav-right">
        <div class="lang-selector">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path
              d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0
1 4-10z"
            ></path>
          </svg>
          <span class="lang-text">EN</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="chevron"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <button class="hamburger-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--nav-border);
  position: sticky;
  top: 0;
  z-index: 999;
  transition: var(--transition-spring);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text-dark);
  padding-right: 2rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-icon path[fill="white"] { fill: var(--primary); }
.logo-icon path[stroke="#1A1643"] { stroke: var(--text-dark); }

.logo-text {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  font-family: 'Outfit', sans-serif;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 1rem 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-body);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: var(--transition-normal);
}

.nav-link.active {
  background-color: var(--primary-soft);
  color: var(--primary);
  font-weight: 600;
}

.nav-link:hover {
  color: var(--primary);
}

.dropdown-indicator {
  transition: transform 0.3s ease;
  opacity: 0.7;
}

.nav-item:hover .dropdown-indicator {
  transform: rotate(180deg);
}

/* ==================================
   DROPDOWN & SUBMENU STYLES
   ================================== */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: var(--bg-surface);
  min-width: 220px;
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  opacity: 0;
}

.nav-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-item {
  position: relative;
}

.dropdown-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: var(--text-body);
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);
}

.dropdown-link:hover {
  background-color: var(--bg-page);
  color: var(--primary);
}

.submenu {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(10px);
  background-color: var(--bg-surface);
  min-width: 220px;
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
}

.dropdown-item:hover .submenu {
  display: block;
  animation: slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes slideLeft {
  from { opacity: 0; transform: translateX(10px); }
  to { opacity: 1; transform: translateX(0); }
}

/* ==================================
   RIGHT SECTION
   ================================== */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);
  border: 1px solid var(--border-medium);
}

.lang-selector:hover {
  background: var(--bg-page);
  border-color: var(--primary);
}

.lang-selector:hover .chevron {
  transform: translateY(2px);
}

.chevron {
  transition: transform 0.3s ease;
}

.hamburger-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--bg-page);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-sm);
  color: var(--text-dark);
  cursor: pointer;
  transition: var(--transition-fast);
}

.hamburger-btn:hover {
  background: var(--border-medium);
}

@media (max-width: 900px) {
  .nav-menu { gap: 0.5rem; }
  .lang-selector { display: none; }
  .hamburger-btn { display: flex; }
}

@media (max-width: 768px) {
  .nav-menu { display: none; }
}
</style>
