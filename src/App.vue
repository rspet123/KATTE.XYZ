<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
  </head>
  <div id="app">
    <BackgroundModel />
    <img alt="KATTE logo" class="main-logo" src="./assets/logo.png">
    <SideMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import BackgroundModel from './components/BackgroundModel.vue';
import SideMenu from './components/SideMenu.vue';

export default {
  name: 'App',
  components: {
    BackgroundModel,
    SideMenu,
  },
  methods: {
    addGlitch(event) {
      event.target.classList.add('glitch');
    },
    removeGlitch(event) {
      event.target.classList.remove('glitch');
    },
  },
};
</script>

<style>
#app {
  position: relative;
  width: 99%;
  height: 96vh; 
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
  padding-left: 0%;
  padding-right: 0%;
}

.main-logo {
  position: absolute;
  top: -75px; 
  left: 50%;
  transform: translateX(-50%) translateY(150%);
  z-index: 9999; 
  mix-blend-mode: difference;
  filter: invert(1);
  pointer-events: none; /* Make the logo non-interactive */
  user-select: none; /* Prevent text selection */
}

BackgroundModel {
  position: absolute;
  top: 50px; /* Adjust to place it below the menu */
  left: 0;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  z-index: 1; 
}

/* Smaller screens */
@media (max-width: 900px) {
  .main-logo {
    width: 90%; /* Adjust the width for smaller screens */
    top: 10%;
  }
}

@media (max-width: 900px) {
  BackgroundModel {
    height: 100px; /* Adjust height for smaller screens */
  }
}

</style>
