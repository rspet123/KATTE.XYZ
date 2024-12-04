<template>
  <div class="content-page">
    <h1><TerminalCursor /> About Me</h1>
    <div class="about-container">
      <PortraitFrame />
      <div class="about text-with-portrait">
        <p
          v-typewriter="{
            speed: 2,
            text: 'I\'m Robin, A software engineer based out of Charlotte, North Carolina',
          }"
        ></p>
        <p
          v-typewriter="{
            speed: 2,
            text: 'I am a full stack developer, currently working in Go, PHP, Python & Javascript (Vue.js), but interested in all back-end technologies.',
          }"
        ></p>
        <p
          v-typewriter="{
            speed: 2,
            text: 'I have experience with Torch & Tensorflow, as well as Docker, AWS & Kubernetes',
          }"
        ></p>
        <p
          v-typewriter="{
            speed: 2,
            text: 'I\'m passionate about learning cool new tech, and making fun projects, if you\'d like to see some of them, check out the portfolio section.',
          }"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
import TerminalCursor from "../components/TerminalCursor.vue";
import PortraitFrame from "@/components/PortraitFrame.vue";
export default {
  name: "AboutPage",
  components: {
    TerminalCursor,
    PortraitFrame,
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
</style>
