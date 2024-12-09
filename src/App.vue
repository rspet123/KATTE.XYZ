<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
  </head>
  <div id="app" ref="app">
    <BackgroundModel :rotation-percent="scrollPercent" />
    <img alt="KATTE logo" class="main-logo" src="./assets/logo.png" />
    <SideMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import BackgroundModel from "./components/BackgroundModel.vue";
import SideMenu from "./components/SideMenu.vue";
import { EventBus } from "./eventBus";

export default {
  name: "App",
  components: {
    BackgroundModel,
    SideMenu, 
  },
  data () {
    return {
      scrollPercent: 0,
    };
  },
  methods: {
    handleScroll() {
      const appElement = this.$refs.app;
      const scrollTop = appElement.scrollTop;
      const scrollHeight = appElement.scrollHeight - appElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight);
      this.scrollPercent = scrollPercent;
      EventBus.emit('scroll', this.scrollPercent);
    },
  },
  mounted() {
    this.$refs.app.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    this.$refs.app.removeEventListener('scroll', this.handleScroll);
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
}

.main-logo {
  position: absolute;
  top: -10vh;
  left: 50%;
  transform: translateX(-50%) translateY(150%);
  z-index: 2;
  mix-blend-mode: difference;
  filter: invert(1);
  pointer-events: none;
  user-select: none;
}

BackgroundModel {
  position: absolute;
  top: 50px; 
  left: 0;
  width: 100%;
  height: 200px; 
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
