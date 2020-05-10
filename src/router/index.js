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
    meta: {
      title: "毕业季总宣",
    },
  },
  {
    path: "/time_capsule",
    name: "time_capsule",
    component: timeCapsule,
    meta: {
      title: "毕业季总宣",
    },
  },
  {
    path: "/food_wish",
    name: "food_wish",
    component: foodWish,
    meta: {
      title: "毕业季总宣",
    },
  },
  {
    path: "/star",
    name: "star",
    component: star,
    meta: {
      title: "毕业季总宣",
    },
  },
  {
    path: "/market",
    name: "market",
    component: market,
    meta: {
      title: "毕业季总宣",
    },
  },
];

const router = new VueRouter({
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   next();
// });
export default router;
