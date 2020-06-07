import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/initiative",
    name: "Initiative",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Initiative.vue")
  },
  {
    path: "/problems",
    name: "Problems",
    component: () => import("../views/Problems.vue")
  },
  {
    path: "/leaders",
    name: "Leaders",
    component: () => import("../views/Leaders.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
