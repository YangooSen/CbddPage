import Home from "@/components/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/people",
      name: "people",
      component: () => import("@/components/People.vue"),
    },
    {
      path: "/program",
      name: "program",
      component: () => import("@/components/Program.vue"),
    },
    {
      path: "/publication",
      name: "publication",
      component: () => import("@/components/Publication.vue"),
    },
    {
      path: "/research",
      name: "research",
      component: () => import("@/components/Research.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/components/Gallery.vue"),
    },
    {
      path: "/link",
      name: "link",
      component: () => import("@/components/Link.vue"),
      children: [
        {
          name: "group",
          path: "group",
          component: () => import("@/components/link/Group.vue"),
        },
      ],
    },
  ],
});

export default router;
