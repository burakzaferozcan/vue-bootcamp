import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style.css";
import AppHeader from "@/components/appHeader.vue";

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.mount("#app");
