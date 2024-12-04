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
  border: 5px solid #000;
  background-color: whitesmoke;
  overflow: hidden;
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
    border: 2px solid #000;
    width: 20vh;
    height: 20vh;
  }
}

</style>
