import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../components/Test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
