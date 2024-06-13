import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "NewBookmark",
    path: "/new",
    // farklı bir import kullanımı
    component: () => import("./views/NewBookmarkPage.vue"),
    // farklı bir import kullanımı
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
