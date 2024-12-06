<template>
  <div class="side-menu">
    <ul>
      <li class="side-menu-link" @click="goBack">↼</li>
      <li class="side-menu-link" @click="goHome">Home</li>
      <li class="side-menu-link" @click="goAbout">About</li>
      <li class="side-menu-link" @click="goPortfolio">Portfolio</li>
      <li class="side-menu-link" @click="goContact">Contact</li>
      <li class="side-menu-link" @click="goForward">⇁</li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from '../eventBus';

export default {
  name: 'SideMenu',
  data() {
    return {
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
    }
  }
};
</script>

<style>
.side-menu {
  position: absolute;
  top: -25px;
  left: 0;
  width: 100%;
  color: black;
  z-index: 5;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition: color 0.6s, letter-spacing 0.6s, font-size 0.6s;
}

.side-menu .side-menu-link:hover {
    color: rgba(71, 71, 71);
    letter-spacing: 0.1em;
    font-size: 68px;
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
    font-size: 20px !important; 
    padding: 8px !important;;
  }
}

/* Even Smaller Screens */
@media (max-width: 450px) {
  .side-menu-link {
    font-size: 16px !important; 
    padding: 6px !important;
  }
}

</style>