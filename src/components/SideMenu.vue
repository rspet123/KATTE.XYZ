<template>
  <nav class="side-menu" :class="{ 'dark-mode': isDarkMode }">
    <!-- Desktop Menu -->
    <ul class="desktop-menu">
      <li class="side-menu-link arrow" @click="goBack">↼</li>
      <li v-for="item in menuItems" :key="item.name" 
          class="side-menu-link pluto" 
          @click="navigateTo(item)">
        {{ item.name }}
      </li>
      <li class="side-menu-link arrow" @click="goForward">⇁</li>
    </ul>

    <!-- Mobile Menu Button -->
    <div class="mobile-menu-button" @click="toggleMobileMenu">
      <div class="hamburger" :class="{ 'is-active': isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
      <ul>
        <li v-for="item in menuItems" :key="item.name"
            class="mobile-menu-link"
            @click="navigateTo(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { EventBus } from '../eventBus';

export default {
  name: 'SideMenu',
  data() {
    return {
      isDarkMode: false,
      isMobileMenuOpen: false,
      menuItems: [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Portfolio', route: '/portfolio' },
        { name: 'Contact', route: '/contact' }
      ]
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    goBack() {
      this.$router.back();
    },
    goForward() {
      this.$router.forward();
    },
    navigateTo(item) {
      EventBus.emit(`go${item.name}`)
      this.$router.push(item.route);
      if (this.isMobileMenuOpen) {
        this.toggleMobileMenu();
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    },
    toggleDarkMode() {
      EventBus.emit('toggleDarkMode', this.isDarkMode);
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    },
  }
};
</script>

<style>
.side-menu { 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: var(--text-color, #000);
  z-index: 1000;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  height: 9vh;
}

.side-menu.dark-mode {
  background: rgba(20, 20, 20, 0.95);
  color: var(--text-color-dark, #fff);
}

.desktop-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.side-menu-link {
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.side-menu-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.side-menu-link:hover::after {
  width: 100%;
}

.side-menu-link:hover {
  transform: translateY(-2px);
  background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Mobile Menu Styles */
.mobile-menu-button {
  display: none;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
  cursor: pointer;
}

.hamburger {
  width: 30px;
  height: 20px;
  position: relative;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: currentColor;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { top: 9px; }
.hamburger span:nth-child(3) { top: 18px; }

.hamburger.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
}

.mobile-menu.is-open {
  transform: translateY(0);
}

.mobile-menu ul {
  list-style: none;
  padding: 1rem;
  margin: 0;
}

.mobile-menu-link {
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-link:hover {
  background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes flowingGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .desktop-menu { display: none; }
  .mobile-menu-button { display: block; }
  .mobile-menu { display: block; }
}
</style>