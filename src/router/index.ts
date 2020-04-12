import Vue from "vue";
import VueRouter from "vue-router";
import VueScrollTo from "vue-scrollto";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(VueScrollTo);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
