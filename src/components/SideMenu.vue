<template>
  <div class="side-menu">
    <ul>
      <li><router-link class="side-menu-link" to="/">Home</router-link></li>
      <li><router-link class="side-menu-link" to="/about">About</router-link></li>
      <li><router-link class="side-menu-link" to="/portfolio">Portfolio</router-link></li>
      <li><router-link class="side-menu-link" to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
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
  }
};
</script>

<style>
.side-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: -50%;
  color: black;
  z-index: 5;
  padding: 20px;
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
}

.side-menu .side-menu-link {
  text-decoration: none;
  color: inherit;
  font-size: 64px;
  display: block;
  padding: 10px;
  transition: color 0.6s;
  transition: letter-spacing 0.6s;
  
}

.side-menu .side-menu-link:hover {
    color: rgba(71, 71, 71);
    letter-spacing: 0.1em;
}


</style>