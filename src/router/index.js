import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProtectedView from "../views/ProtectedView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/protected", name: "Protected", component: ProtectedView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
