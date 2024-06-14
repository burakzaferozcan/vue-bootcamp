import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/RegisterPage.vue"),
  },
  {
    name: "NewBookmarkPage",
    path: "/new",
    component: () => import("@/views/NewBookmark.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
router.beforeEach((to, _, next) => {
  const authRequiredRoutes = ["HomePage", "NewBookmarkPage"];
  const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.includes(to.name) && _isAuthenticated) {
    next(false);
    router.go(-1);
  } else if (authRequiredRoutes.includes(to.name) && !_isAuthenticated) {
    next({ name: "LoginPage" });
  } else {
    next();
  }
});
export default router;
