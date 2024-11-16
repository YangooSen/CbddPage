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
      children: [
        {
          name: "mentor",
          path: "mentor",
          component: () => import("@/components/people/Mentor.vue"),
        },
        {
          name: "postdoc",
          path: "postdoc",
          component: () => import("@/components/people/Postdoc.vue"),
        },
        {
          name: "phd",
          path: "phd",
          component: () => import("@/components/people/PHD.vue"),
        },
        {
          name: "master",
          path: "master",
          component: () => import("@/components/people/Master.vue"),
        },
        {
          name: "undergraduate",
          path: "undergraduate",
          component: () => import("@/components/people/Undergraduate.vue"),
        },
        {
          name: "graduate",
          path: "graduate",
          component: () => import("@/components/people/Graduate.vue"),
        },
        {
          name: "collaborating",
          path: "collaborating",
          component: () => import("@/components/people/Collaborating.vue"),
        },
      ],
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
      children: [
        {
          name: "paper",
          path: "paper",
          component: () => import("@/components/publication/Paper.vue"),
        },
        {
          name: "patent",
          path: "patent",
          component: () => import("@/components/publication/Patent.vue"),
        },
        {
          name: "work",
          path: "work",
          component: () => import("@/components/publication/Work.vue"),
        },
      ],
    },
    {
      path: "/research",
      name: "research",
      component: () => import("@/components/Research.vue"),
      children: [
        {
          name: "aidd",
          path: "aidd",
          component: () => import("@/components/research/AIDD.vue"),
        },
        {
          name: "bioinfo",
          path: "bioinfo",
          component: () => import("@/components/research/Bioinfo.vue"),
        },
        {
          name: "drugdev",
          path: "drugdev",
          component: () => import("@/components/research/DrugDev.vue"),
        },
        {
          name: "rsum",
          path: "rsum",
          component: () => import("@/components/research/RSUM.vue"),
        },
      ],
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
