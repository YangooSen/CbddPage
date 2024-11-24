import Home from "@/view/Home.vue";
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
      path: "/login",
      name: "login",
      component: () => import("@/view/Login.vue"),
    },
    {
      path: "/people",
      name: "people",
      component: () => import("@/view/People.vue"),
      children: [
        {
          name: "mentor",
          path: "mentor",
          component: () => import("@/view/people/Mentor.vue"),
        },
        {
          name: "postdoc",
          path: "postdoc",
          component: () => import("@/view/people/Postdoc.vue"),
        },
        {
          name: "phd",
          path: "phd",
          component: () => import("@/view/people/PHD.vue"),
        },
        {
          name: "master",
          path: "master",
          component: () => import("@/view/people/Master.vue"),
        },
        {
          name: "undergraduate",
          path: "undergraduate",
          component: () => import("@/view/people/Undergraduate.vue"),
        },
        {
          name: "graduate",
          path: "graduate",
          component: () => import("@/view/people/Graduate.vue"),
        },
        {
          name: "collaborating",
          path: "collaborating",
          component: () => import("@/view/people/Collaborating.vue"),
        },
      ],
    },
    {
      path: "/program",
      name: "program",
      component: () => import("@/view/Program.vue"),
      children: [
        {
          name: "druglikeness",
          path: "druglikeness",
          component: () => import("@/view/program/Druglike.vue"),
        },
        {
          name: "targeting",
          path: "targeting",
          component: () => import("@/view/program/Targeting.vue"),
        },
        {
          name: "sbdc",
          path: "sbdc",
          component: () => import("@/view/program/SBDC.vue"),
        },
        {
          name: "drugdesign",
          path: "drugdesign",
          component: () => import("@/view/program/Drugdesign.vue"),
        },
        {
          name: "cheminfo",
          path: "cheminfo",
          component: () => import("@/view/program/Cheminfo.vue"),
        },
        {
          name: "molrelencoding",
          path: "molrelencoding",
          component: () => import("@/view/program/MolRelEncoding.vue"),
        },
        {
          name: "db",
          path: "db",
          component: () => import("@/view/program/DB.vue"),
        },
      ],
    },
    {
      path: "/publication",
      name: "publication",
      component: () => import("@/view/Publication.vue"),
      children: [
        {
          name: "paper",
          path: "paper",
          component: () => import("@/view/publication/Paper.vue"),
        },
        {
          name: "patent",
          path: "patent",
          component: () => import("@/view/publication/Patent.vue"),
        },
        {
          name: "work",
          path: "work",
          component: () => import("@/view/publication/Work.vue"),
        },
        {
          name: "else",
          path: "else",
          component: () => import("@/view/publication/Else.vue"),
        },
      ],
    },
    {
      path: "/research",
      name: "research",
      component: () => import("@/view/Research.vue"),
      children: [
        {
          name: "aidd",
          path: "aidd",
          component: () => import("@/view/research/AIDD.vue"),
        },
        {
          name: "bioinfo",
          path: "bioinfo",
          component: () => import("@/view/research/Bioinfo.vue"),
        },
        {
          name: "drugdev",
          path: "drugdev",
          component: () => import("@/view/research/DrugDev.vue"),
        },
        {
          name: "rsum",
          path: "rsum",
          component: () => import("@/view/research/RSUM.vue"),
        },
      ],
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/view/Gallery.vue"),
    },
    {
      path: "/link",
      name: "link",
      component: () => import("@/view/Link.vue"),
      children: [
        {
          name: "group",
          path: "group",
          component: () => import("@/view/link/Group.vue"),
        },
      ],
    },
  ],
});

export default router;
