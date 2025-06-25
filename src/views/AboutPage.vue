<template>
  <div class="content-page">
    <h1><TerminalCursor /> About Me</h1>
    <div class="about-container">
      <div class="portrait-slider-container">
        <PortraitFrame />
      </div>
      <div class="about text-with-portrait">
        <h2>About Me</h2>
        <p
          v-typewriter="{
            speed: 2,
            text: 'I\'m Robert, A software engineer based out of Charlotte, North Carolina, I currently work at Ezoic as a full stack developer. I have experience with Go, PHP, Python, Javascript (Vue.js), SQL, MongoDB and SKLearn. I\'ve been working as a software engineer for about 3 years, and I\'m always looking for new tech to learn and new projects to work on. I\'m currently focused on backend development and AI/ML, but I have experience with front end development as well.',
          }"
        ></p>
        <h2>Experience</h2>
        <div class="job-info">
          <a href="https://www.ezoic.com/" target="_blank">
            <h3>
              Ezoic
            </h3>
          </a>
          <img
            src="https://www.ezoic.com/images/ezemblem.png"
            alt="Ezoic Logo"
            width="30">
        </div>
        <p
          v-typewriter="{
            speed: 2,
            text: 'Full-Stack Developer | 2022 - Present',
          }"
        ></p>
        <p
          v-typewriter="{
            speed: 2,
            text: 'At Ezoic, I tackle diverse projects ranging from internal tools to customer-facing features. This role has allowed me to collaborate across teams, contribute to large-scale systems, and refine my problem-solving skills in a fast-paced environment.',
          }"
        ></p>
        <h2>Outside of Work</h2>
        <p
          v-typewriter="{
            speed: 2,
            text: 'In my spare time, I enjoy playing video games (Mostly CS2), listening to music (Big fan of Peirce the Veil and Seven Lions) and working on my projects. I love finding problems and solving them with a bit of code. Recently, I’ve been exploring ways to combine my interests, developing tools to enhance gameplay or analyze data.',
          }"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
import TerminalCursor from "../components/TerminalCursor.vue";
import PortraitFrame from "@/components/PortraitFrame.vue";
import { EventBus } from "../eventBus";
export default {
  name: "AboutPage",
  components: {
    TerminalCursor,
    PortraitFrame,
  },
  mounted() {
    EventBus.on('scroll', 
      (scrollPercent) => {
        this.handleScroll(scrollPercent);
      }
    );
  },
  methods: {
    handleScroll(scrollPercent) {
      const portraitFrame = document.querySelector('.portrait-slider-container');
      if (!portraitFrame) {
        return;
      }
      const aboutText = document.querySelector('.text-with-portrait');
      if (!aboutText) {
        return;
      }
      const aboutTextHeight = aboutText.clientHeight;

      // This is a funny way to do this, position: fixed; might be better? Doesn't really work with the current layout though.
      portraitFrame.style.top = `${-15+scrollPercent*aboutTextHeight*0.05}vh`;
    }
  },
};
</script>

<style>
.text-with-portrait {
  align-items: flex-start;
  text-align: left; /* Ensure text alignment is left */
  padding: 5vh;
}

.about-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1300px;
}

.about-text {
  margin-left: 20px;
}

.about h2, .about h3, .about a {
  color: #000000;
  display: inline-block;
  margin: 10px 0;
}

.about p{
  margin: 10px 0;
}

.about h2:hover, .about h3:hover, .about a:hover {
  background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: flowingGradient 3s ease infinite;
}

.job-info {
  display: flex;
  align-items: center;
}

.portrait-slider-container {
  position: relative;
  top: -15vh;
}

/* Image looks messed up when the screen is small */
@media (max-width: 600px) {
  .about-container {
    flex-direction: column;
  }

  .about-text {
    margin-left: 0; 
    margin-top: 20px;
    mix-blend-mode: difference;
    filter: invert(1);
  }

  .portrait-slider-container {
    position: static;
  }
}

</style>
