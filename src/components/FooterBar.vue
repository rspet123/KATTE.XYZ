<template>
    <footer class="footer-bar">
      <div class="footer-content">
        <span class="name-box">KATTE - {{currentYear}}</span>
        <span class="material-icons mode-icon" @click="toggleDarkMode">
            {{isDarkMode ? 'light_mode' : 'dark_mode'}}
        </span>
      </div>
    </footer>
  </template>
  
  <script>
  import { EventBus } from '../eventBus';
  export default {
    name: "FooterBar",
    data() {
      return {
        isDarkMode: false,
        currentYear: new Date().getFullYear()
      };
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode', this.isDarkMode);

        const appElement = document.getElementById('app');
        appElement.classList.toggle('dark-mode', this.isDarkMode);

        const sideMenuElement = document.querySelector('.side-menu');
        sideMenuElement.classList.toggle('dark-mode', this.isDarkMode);

        const footerBarElement = document.querySelector('.footer-bar');
        footerBarElement.classList.toggle('dark-mode', this.isDarkMode);

        const contentPageElement = document.querySelector('.content-page');
        contentPageElement.classList.toggle('dark-mode', this.isDarkMode);
        EventBus.emit('toggleDarkMode', this.isDarkMode);
      },
    },
  };
  </script>
  
  <style scoped>
  .footer-bar {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: var(--text-color);
    text-align: center;
    padding: 10px 0;
    z-index: 1000; 
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  .footer-content span {
    font-size: 14px;
  }
  
  .footer-content button {
    background: none;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    padding: 5px 10px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }

  .mode-icon {
    font-size: 24px !important;
    left: -3vw;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
  }

  .mode-icon:hover {
    background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    scale: 1.1;
  }

.name-box { /* center the name */
    font-size: 24px;
}

.name-box:hover {
    background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: flowingGradient 4s ease infinite;
}


</style>