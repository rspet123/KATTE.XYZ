<template>
  <div class="side-menu">
    <ul>
      <li class="side-menu-link arrow" @click="goBack">↼</li>
      <li class="side-menu-link" @click="goHome">Home</li>
      <li class="side-menu-link" @click="goAbout">About</li>
      <li class="side-menu-link" @click="goPortfolio">Portfolio</li>
      <li class="side-menu-link" @click="goContact">Contact</li>
      <li class="side-menu-link arrow" @click="goForward">⇁</li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from '../eventBus';

export default {
  name: 'SideMenu',
  data() {
    return {
      isDarkMode: false,
      menuItems: [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Portfolio', link: '#portfolio' },
        { name: 'Contact', link: '#contact' }
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
    goHome() {
      EventBus.emit('goHome')
      this.$router.push('/');
    },
    goAbout() {
      EventBus.emit('goAbout')
      this.$router.push('/about');
    },
    goPortfolio() {
      EventBus.emit('goPortfolio')
      this.$router.push('/portfolio');
    },
    goContact() {
      EventBus.emit('goContact')
      this.$router.push('/contact');
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
  top: 0vh;
  left: 0;
  width: 100%;
  color: black;
  z-index: 3;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  height: 9vh;
}


.side-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.side-menu li {
  margin: 10px 0;
  cursor: pointer;
}

.side-menu .side-menu-link {
  text-decoration: none;
  color: inherit;
  font-size: 64px;
  display: block;
  padding: 10px;
  transition: all 0.6s;
}

.side-menu .side-menu-link:hover {
    letter-spacing: 0.1em;
    font-size: 68px;
    background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    animation: flowingGradient 5s ease infinite;
}

/* Medium Screens */
@media (max-width: 1000px) {
  .side-menu-link {
    font-size: 40px !important; 
  }
}

/* Small Screens */
@media (max-width: 768px) {
  .side-menu-link {
    font-size: 24px !important; 
    padding: 8px !important;
  }
  .arrow {
    display: none !important;
  }
}

/* Even Smaller Screens */
@media (max-width: 450px) {
  .side-menu-link {
    font-size: 20px !important; 
    padding: 6px !important;
  }
  .arrow {
    display: none !important;
  }
}

</style>