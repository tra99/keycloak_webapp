import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import keycloak from "./keycloak";

keycloak.init({
  onLoad: "login-required",
  checkLoginIframe: false,
}).then(() => {
  createApp(App).use(router).mount("#app");
}).catch(error => {
  console.error("Keycloak initialization failed:", error);
});
