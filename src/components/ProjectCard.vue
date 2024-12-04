<template>
  <div class="project-card-container" @click="toggleMoreInfo">
    <div class="project-card" :class="{ flipped: showMore }">
      <div class="front">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <a :href="link" v-if="!isPrivate" target="_blank">View Project</a>
        <span v-else> <i class="fas fa-lock"></i> Private Project </span>
        <div class="technologies">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="tech-chip"
            :style="{ backgroundColor: techColorMap[tech] || 'grey' }"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <div class="back">
        <div class="more-info-content">
          <p>{{ moreInfo }}</p>
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
        Python: "#3572A5",
        SQL: "#e0e0e0",
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
        MongoDB: "#47A248",
        "Three.js": "#FF5555",
        "Discord API": "#5865F2",
      },
    };
  },
  methods: {
    toggleMoreInfo() {
      this.showMore = !this.showMore;
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
}

.project-card {
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.project-card-container:hover .project-card {
  transform: rotateY(10deg);
}

.project-card.flipped {
  transform: rotateY(180deg) !important;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #000000;
  padding: 16px;
  box-sizing: border-box;
}

.front {
  background-color: #ffffff;
  color: #000000;
}

.back {
  background-color: #ffffff;
  color: #000000;
  transform: rotateY(180deg);
}

.project-card h2 {
  margin-top: 0;
}

.project-card a {
  color: #000000;
  text-decoration: none;
}

.project-card a:hover {
  text-decoration: underline;
}

.project-card span i {
  margin-right: 8px;
}

.technologies {
  margin-top: 16px;
}

.tech-chip {
  display: inline-block;
  color: #000000;
  border-radius: 16px;
  padding: 4px 8px;
  margin: 4px;
  font-size: 12px;
}

.more-info-content {
  text-align: left;
}
</style>
