<template>
  <div class="content-page">
    <div class="terminal-container">
      <textarea
        class="terminal-input"
        :placeholder="placeholderText"
        @change="processInput"
        @keydown.enter.prevent="processEnterKey"
        v-model="consoleInput"
      ></textarea>
      <ul v-if="consoleInput !== ''" class="autocomplete-dropdown">
        <li v-for="command in filterCommands()" :key="command" @click="selectCommand(command)">
          {{ command }}
        </li>
      </ul>
    </div>
    <div class="terminal-container">
      <div class="terminal-output" v-html="consoleOutput"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      consoleInput: "",
      consoleOutput: "",
      placeholderText: ">_",
      autoFillCommands: ["help", "about", "portfolio", "contact", "tech"],
      hiOptions: ["Hello", "Hi", "Hey", "What's up", "How we doing?", "你好", "नमस्ते", "안녕"],
      commands: {
        help: () => {
          this.consoleOutput =
            "Available commands: about, portfolio, contact, tech";
        },
        about: () => {
          // Navigate to the about page
          this.$router.push("/about");
        },
        portfolio: () => {
          // Navigate to the portfolio page
          this.$router.push("/portfolio");
        },
        contact: () => {
          // Navigate to the contact page
          this.$router.push("/contact");
        },
        tech: () => {
          this.consoleOutput =
            "I Currently work with Go, PHP, Python, Javascript (Vue.js), SQL, Torch, Docker, AWS, MongoDB, SKLearn";
        },
        hi: () => {
          this.consoleOutput = this.hiOptions[
            Math.floor(Math.random() * this.hiOptions.length)
          ];
        },
        "open the pod bay doors": () => {
          this.consoleOutput = "I'm sorry, Dave. I'm afraid I can't do that.";
        },
        rotate: () => {
          // Rotate the car model
          this.consoleOutput = "I'm sorry, I can't do that yet.";
        },
        secret: () => {
          this.$router.push("/secret");
        },
        katte: () => {
          this.consoleOutput = "Katte is danish for cats, og jeg elsker katte :)";
        },
      },
    };
  },
  mounted() {
    this.animatePlaceholder();
  },
  methods: {
    processInput() {
      console.log("Input changed", this.consoleInput);
    },
    processEnterKey(event) {
      this.consoleOutput = "";
      if (event.key === "Enter" && this.consoleInput !== "") {
        this.consoleInput = this.consoleInput.trim().toLowerCase();
        if (this.commands[this.consoleInput]) {
          this.commands[this.consoleInput]();
        }else{
          this.consoleOutput = "Error...";
        }
        this.consoleInput = "";
      }else{
        return
      }
    },
    selectCommand(command) {
      this.consoleInput = command;
      this.filteredCommands = [];
      this.$nextTick(() => {
        this.$el.querySelector('.terminal-input').focus();
      });
    },
    animatePlaceholder() {
      const placeholders = [">", ">_"];
      let index = 0;
      setInterval(() => {
        this.placeholderText = placeholders[index];
        index = (index + 1) % placeholders.length;
      }, 500);
    },
    filterCommands() {
      return this.autoFillCommands.filter((command) =>
        command.includes(this.consoleInput)
      );
    },
  },
};
</script>

<style>
.terminal-container {
  display: flex;
  position: relative;
}

.terminal {
  position: relative;
  width: 80%;
  max-width: 800px;
  background-color: #000;
  border: 1px solid #00ff00;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
}

.terminal-input {
  position: absolute;
  top: 32px;
  width: 100%;
  background-color: #000;
  color: #00ff00;
  border: none;
  outline: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  resize: none;
  height: 20px;
}

.terminal-input {
  position: relative;
  top: 32px;
  width: 100%;
  background-color: #000;
  color: #00ff00;
  border: none;
  outline: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  resize: none;
  height: 20px;
}

.terminal-output {
  position: relative;
  top: 32px;
  width: 100%;
  background-color: #000;
  color: #00ff00;
  border: none;
  outline: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
}

.terminal-input::placeholder {
  color: #00ff00;
}

.autocomplete-dropdown {
  position: absolute;
  left: 0;
  top: 56px;
  width: 99%;
  background-color: #ffffff;
  border: 1px solid #00ff00;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
}

.autocomplete-dropdown li {
  padding: 6px;
  cursor: pointer;
}

.autocomplete-dropdown li:hover {
  background-color: #00ff00;
  color: #000;
}
</style>
