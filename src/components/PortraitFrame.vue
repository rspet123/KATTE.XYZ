<template>
  <div class="portrait-frame">
    <img
      src="@/assets/ROBIN.png"
      alt="Me"
      class="portrait-image"
    />
  </div>
</template>

<script>
export default {
  name: "PortraitFrame",
};
</script>

<style scoped>
.portrait-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px; 
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
  background-size: 600% 600%;
  animation: flowingGradient 20s ease infinite;
  transition: all 0.3s;
  overflow: hidden;
}

.portrait-frame:hover {
  box-shadow: 5px 5px 5px #717171;
}


.portrait-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Hide the image border when the image is loading */
.portrait-image:not([src]) {
  border: none;
}

@media (max-width: 600px) {
  .portrait-frame {
    width: 20vh;
    height: 20vh;
  }
}

@keyframes flowingGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>
