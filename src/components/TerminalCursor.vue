<template>
    <span class="terminal-cursor">><span class="blinking-cursor">_</span>
    </span>
  </template>
  
  <script>
  export default {
    name: "TerminalCursor",
  };
  </script>
  
  <style scoped>
  .terminal-cursor {
    font-family: monospace;
    font-size: 32px;
    display: inline-block;
    color: rgb(0, 0, 0);
  }
  
  .blinking-cursor {
    animation: blink 1s step-end infinite;
    color: black;
  }
  
  @keyframes blink {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  </style>