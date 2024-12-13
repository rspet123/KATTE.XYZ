<template>
  <div class="content-page"> 
    <h1><TerminalCursor /> Projects</h1>
    <h4
      v-typewriter="{
        speed: 2,
        text: 'Here\'s what I\'ve been working on recently. Most of my projects are video game related, but I\'m always looking for new tech to learn and new projects to work on.',
      }"
    >
      <TerminalCursor />
    </h4>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :link="project.link"
        :technologies="project.technologies"
        :isPrivate="project.isPrivate"
        :moreInfo="project.more"
      />
    </div>
  </div>
</template>

<script>
import TerminalCursor from "../components/TerminalCursor.vue";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "PortfolioPage",
  components: {
    TerminalCursor,
    ProjectCard,
  },
  data() {
    // TODO https://wpdean.com/css-carousels/ ?
    return {
      projects: [
        {
          title: "Portfolio",
          description:
            "This site, Right here, built with Vue.js and Three.js.",
          link: "",
          technologies: ["Vue.js", "Three.js"],
          more: "I made this site to have a place to show off my projects and skills, and to learn Vue.js and Three.js.",
        },
        {
          title: "Wasabii",
          description:
            "An Apex Legends Stat Collection and Analysis tool, built with Vue.js, Python, and SQL. Collects and processes information about scrims and maps using CV2. Currently private, being used by a pro Analyst.",
          link: "https://github.com/rspet123/apexauto",
          technologies: ["Vue.js", "Python", "SQL", "CV2"],
          isPrivate: true,
          more: "I made this tool on the request of a friend who was working as an analyst for a pro Apex Legends team. It's a full stack project that handles data collection, processing & analysis, and can present an analyst or coach and their players with actionable information much quicker than a human analyst would be able to. He estimates it saves him over 30 hours a week.",
        },
        {
          title: "NinerScrims",
          description:
            "A tool to analyze CSGO (& CS2) demos/replays, built with Python and SKlearn, sorts players by role, skill, and performance. Used to recruit players for a Collegiate CS2 (and formerly CS:GO) team.",
          link: "https://github.com/rspet123/CS-GO-Stats-Analysis",
          technologies: ["Python", "SKLearn"],
          more: "I'm Passionate about eSports, and especially Counter Strike, I made this tool to help my college's CSGO team recruit players. It analyzes the replays from tryouts and sorts players by role, skill, and performance. It takes a lot of the grunt work out of recruiting and demo watching.",
        },
        {
          title: "RelayRace",
          description:
            "A tool to track enemy spies in EVE Online via their discord activity, Currently Private, Being used by a Large EVE Online Alliance (1000+ Members)",
          link: "",
          technologies: ["Python", "MongoDB", "Discord API", "SKLearn"],
          isPrivate: true,
          more: "EVE Online is incredibly serious and competitive game, and counter-intelligence is a big part of that, especially out of the game itself. I made this tool to help a friend who was leading a large alliance track enemy spies. It uses the Discord API to track activity and uses SKLearn to analyze the data. I can't tell you how it works here, but it has already been quite successful.",
        },
        {
            title: "Atlas",
            description:
              "A third-party matchmaking website for the Overwatch 2 Beta, built with Python, MongoDB, with a React.js frontend and Discord Authentication/SSO. Unfortunatly, the project was abandoned due to the game's own ranked mode releasing.",
            link: "https://github.com/rspet123/Atlas",
            technologies: ["Python", "MongoDB", "Discord API", "AWS"],
            more: "After the OW2 Beta was announced, A group of high-level players wanted a way to play ranked games against each other, so I made this site to facilitate that. I worked with a Front-End dev, who did the React.js frontend, It was a fun project, but the game's own ranked mode released before we could fully finish it, and the project was abandoned. At It's peak it had around 100 users, with a custom ELO system and a leaderboard.",
        }
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  width: 80%;
  max-width: 1800px;
}

.about-text {
  align-items: flex-start;
  text-align: left;
  padding: 5vh;
}

@media screen and (max-width: 600px) {
  .projects-grid {
    width: 100%;
  }
  
}
</style>
