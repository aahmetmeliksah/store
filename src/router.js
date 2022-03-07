import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("./Views/HomePage.vue"),
  },
  {
    name: "AboutPage",
    path: "/about",
    component: () => import("./Views/AboutPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
