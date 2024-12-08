<template>
  <div class="content-page">
    <h1><TerminalCursor /> Contact</h1>
    <h4 v-typewriter="{ text: 'Contact Me Here... Thanks.', seconds: 2 }"></h4>
    <div class="contact-links">
      <a
        href="https://github.com/rspet123"
        target="_blank"
        class="contact-link"
        title="GitHub"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/robert-spencer-aa0102207"
        target="_blank"
        class="contact-link"
        title="LinkedIn"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:rspet123@gmail.com" class="contact-link" title="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="/resume.pdf" class="contact-link" download title="Resume">
        <i class="fas fa-file"></i>
      </a>
    </div>
  </div>
</template>

<script>
import TerminalCursor from "../components/TerminalCursor.vue";
export default {
  name: "ContactPage",
  components: {
    TerminalCursor,
  },
};
</script>

<style>
.content-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.contact-links {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.contact-link {
  color: #000000;
  text-decoration: none;
  font-size: 64px;
  display: flex;
  align-items: center;
  transition: all 0.2s;
}

.contact-link i {
  font-size: 64px;
  margin-right: 8px;
}

.contact-link i {
  font-size: 64px;
  margin-right: 8px;
}

.contact-link:hover {
  scale: 1.1;
  background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 300%;
  animation: flowingGradient 5s ease infinite;
}
</style>
