<template>
  <div
    class="grid-container"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  >
    <div v-for="n in 100" :key="n" class="grid-item">
      {{ nextText[(n - 1) % nextText.length] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SculptureText",
  props: {
    text: {
      type: String,
      default: "KATTE"
    },
  },
  data() {
    return {
      nextText: "",
      lastAnimTime: 0,
    };
  },
  methods: {
    handleMouseMove(event) {
      requestAnimationFrame(() => {
        const items = document.querySelectorAll(".grid-item");
        if (Date.now() - this.lastAnimTime < 1000 / 60) {
          return;
        }
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 100;
          const moveDist = Math.min(maxDist / dist, 1) * -30;

          item.style.transform = `translate(${(dx / dist) * moveDist}px, ${
            (dy / dist) * moveDist
          }px)`;
          item.style.color = `rgb(${255 - (dist*2)}, ${255 - (dist*2)}, ${255 - (dist*2)})`;
          this.lastAnimTime = Date.now();
        });
      });
    },
    handleMouseLeave() {
      const items = document.querySelectorAll(".grid-item");
      items.forEach((item) => {
        item.style.transform = ""; 
        item.style.color = ""; 
      });
    },
    animateChange() {
      const items = document.querySelectorAll(".grid-item");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.transform = "rotateX(90deg)";
          setTimeout(() => {
            item.textContent = this.text[(index) % this.text.length];
            item.style.transform = "rotateX(0deg)";
          }, 250);
        }, index * 20); 
      });
    },
  },
  watch: {
    text() {
      this.animateChange();
    },
  },
  mounted() {
    this.nextText = this.text;
  },
};
</script>

<style scoped>
.grid-container {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 50%;
  height: 10vh;
  position: relative;
}

.grid-container::before {
  content: "";
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90%;
  background: linear-gradient(270deg, #ffffff, #717171, #000000);
  background-size: 600% 600%;
  animation: flowingGradient 20s ease infinite;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transition: transform .2s ease;
  pointer-events: none;
  user-select: none;
  mix-blend-mode: difference;
  filter: invert(1);
  transform-origin: 50% 100%;
}

@media screen and (max-width: 600px) {
  .grid-container {
    margin: 0;
    padding: 0;
    width: 100%;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    height: 33%;
  }

  .grid-container::before {
    top: 20%; 
    height: 60%; 
    
  }

  .content-page { 
    top: 2vh;
  }

  .grid-item {
    font-size: 20px;
  }
    
}
</style>
