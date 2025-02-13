import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import SecretPage from "@/views/SecretPage.vue";
import ValentinesPage from "@/views/ValentinesPage.vue";

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioPage,
  },
  {
    path: "/secret",
    name: "Secret",
    component: SecretPage,
  },
  {
    path: "/dogmeat",
    name: "dogmeat",
    component: ValentinesPage,
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
