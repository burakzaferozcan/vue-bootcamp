import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import DetailsView from "./views/DetailsView.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomeView,
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    component: AboutView,
  },
  {
    name: "DetailPage",
    path: "/detay/:userID",
    component: DetailsView,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
