import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User/User.vue"),
  },
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/Login.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
