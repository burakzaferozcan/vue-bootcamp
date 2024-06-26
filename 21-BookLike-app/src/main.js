import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import AppHeader from "./components/Shared/appHeader.vue";
import appBookmarkList from "./components/appBookmarkList/indexComp.vue";
import appAxios from "./utils/appAxios";
import store from "./store";

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
