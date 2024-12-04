<template>
  <div class="content-page">
    <h1><TerminalCursor /> Contact Me</h1>
    <div v-typewriter="{ text: 'Contact Me Here... Thanks', seconds: 2 }"></div>
    <div class="contact-links">
      <a
        href="https://github.com/rspet123"
        target="_blank"
        class="contact-link"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/robert-spencer-aa0102207"
        target="_blank"
        class="contact-link"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:rspet123@gmail.com" class="contact-link">
        <i class="fas fa-envelope"></i>
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
}

.contact-link i {
  font-size: 64px;
  margin-right: 8px;
}

.contact-link:hover {
  scale: 1.1;
}
</style>
