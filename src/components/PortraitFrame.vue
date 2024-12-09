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
  min-width: 200px;
  border-radius: 50%;
  background: linear-gradient(270deg, #ffffff, #717171, #000000);
  transition: all 0.3s;
  background-size: 600% 600%;
  animation: flowingGradient 20s ease infinite;
  overflow: hidden;
}

.portrait-frame:hover {
  box-shadow: 5px 5px 5px #717171;
  background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
  background-size: 300% 300%;
  animation: flowingGradient 20s ease infinite;
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
    min-width: 20vh;
    min-height: 20vh;
  }
}

</style>
