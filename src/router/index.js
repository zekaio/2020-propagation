import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import timeCapsule from "../views/time_capsule.vue";
import foodWish from "../views/food_wish.vue";
import star from "../views/star.vue";
import market from "../views/market.vue";
Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

const routes = [
  // 主页
  {
    path: "/index",
    name: "index",
    component: index,
  },
  {
    path: "/time_capsule",
    name: "time_capsule",
    component: timeCapsule,
  },
  {
    path: "/food_wish",
    name: "food_wish",
    component: foodWish,
  },
  {
    path: "/star",
    name: "star",
    component: star,
  },
  {
    path: "/market",
    name: "market",
    component: market,
  },
];

const router = new VueRouter({
  routes,
});
export default router;
