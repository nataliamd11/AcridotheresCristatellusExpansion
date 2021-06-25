import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Species from "../views/Species.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/species/",
    name: "Species",
    component: Species,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
