<template>
    <div @click="revealCode" :class="{ hidden: !isVisible }" class="hidden-code">
      <p v-if="isVisible">{{ code }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "HiddenCode",
    data() {
      return {
        isVisible: false,
      };
    },
    props: {
      code: {
        type: String,
        required: true,
      },
    },
    methods: {
      revealCode() {
        this.isVisible = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .hidden-code {
    width: 100px;
    height: 100px;
    background-color: transparent;
    cursor: none;
    user-select: none;
  }
  
  .hidden-code.hidden {
    visibility: hidden;
  }
  
  .hidden-code p {
    margin: 0;
    padding: 0;
    color: black;
  }
  </style>