<template>
  <div class="project-card-container" @click="toggleMoreInfo" @mousemove="handleMouseMove" @mouseleave="resetTransform">
    <div class="project-card">
      <h2>{{ title }}</h2>
      <div class="content-slider" :class="{ 'slide': showMore }">
        <div class="front">
          <p>{{ description }}</p>
          <div class="card-bottom-anchor">
            <a :href="link" v-if="!isPrivate" target="_blank">View Project</a>
            <span v-else> <i class="fas fa-lock"></i> Private Project </span>
            <div class="technologies">
              <span
                v-for="tech in technologies"
                :key="tech"
                class="tech-chip"
                :style="{ boxShadow: `3px 3px 3px ${ techColorMap[tech]}` || '3px 3px 3px #717171' }"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        <div class="back">
          <div class="more-info-content">
            <p>{{ moreInfo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  data() {
    return {
      showMore: false,
      techColorMap: {
        "Vue.js": "#42b883",
        Python: "#FFDE57",
        SQL: "#00758f",
        Go: "#00ADD8",
        PHP: "#777BB4",
        Javascript: "#f7df1e",
        Tensorflow: "#FF6F00",
        Torch: "#EE4C2C",
        Docker: "#2496ED",
        AWS: "#FF9900",
        AI: "#FF6F00",
        "Generative AI": "#FF6F00",
        SKLearn: "#F7931E",
        MongoDB: "#00ED64",
        "Three.js": "#FF5555",
        "Discord API": "#5865F2",
        CV2: "#FF6F00",
      },
    };
  },
  methods: {
    toggleMoreInfo() {
      this.showMore = !this.showMore;
    },
    handleMouseMove(event) {
      const card = event.currentTarget.querySelector('.project-card');
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * -10;
      const rotateY = (x / rect.width) * 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    resetTransform(event) {
      const card = event.currentTarget.querySelector('.project-card');
      card.style.transform = 'rotateX(0) rotateY(0)';
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: false,
    },
    isPrivate: {
      type: Boolean,
      required: false,
    },
    moreInfo: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.project-card-container {
  perspective: 1000px;
  max-height: 300px;
  cursor: pointer;
  padding: 15px;
}

.project-card {
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.project-card h2 {
  padding-top: 2vh;
}

.content-slider {
  position: relative;
  width: 200%;
  height: 100%;
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-slider.slide {
  transform: translateX(-50%);
}

.front,
.back {
  width: 50%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.front {
  height: 80%;
  color: rgba(0, 0, 0, 0.87);
}

.back {
  color: rgba(0, 0, 0, 0.87);
  padding: 2vh;
  align-items: center;
  max-height: 60%;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #F536EE, #F4367D, #F56436);
  border-radius: 20px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: .15;
}

.project-card h2 {
  margin: 0 0 15px 0;
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.project-card:hover h2 {
  opacity: 1;
}

.project-card a {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.project-card a:hover {
  color: #F4367D;
}

.project-card span i {
  margin-right: 8px;
}

.dark-mode .project-card a {
  color: rgba(255, 255, 255);
  
}

.technologies {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.tech-chip {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.75);
  border-radius: 12px;
  padding: 6px 14px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.tech-chip::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.tech-chip:hover {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.tech-chip:hover::before {
  transform: translateX(100%);
}

.dark-mode .tech-chip {
  color: rgba(255, 255, 255, 0.9);
}

.more-info-content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  height: 100%;
  padding: 1vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(244, 54, 125, 0.5) rgba(255, 255, 255, 0.1);
}

.more-info-content::-webkit-scrollbar {
  width: 8px;
}

.more-info-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.more-info-content::-webkit-scrollbar-thumb {
  background: rgba(244, 54, 125, 0.5);
  border-radius: 4px;
}

.more-info-content::-webkit-scrollbar-thumb:hover {
  background: rgba(244, 54, 125, 0.7);
}

.project-card .back p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  width: 100%;
}

.dark-mode .project-card .back p {
  color: rgba(255, 255, 255, 0.9);
}

.spacer {
  flex-grow: 1;
}

.card-bottom-anchor {
  margin-top: auto;
  width: 100%;
  text-align: center;
}

/* Small Screens */
@media (max-width: 768px) {
  .project-card {
    height: 320px;
  }

  .project-card p {
    font-size: 0.85rem;
  }

  .tech-chip {
    padding: 4px 10px;
    font-size: 0.7rem;
  }
}

</style>
