<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import indexBg from "./assets/index_bg.png";
import timeBg from "./assets/time_bg.png";
import foodBg from "./assets/food_bg.png";
import starBg from "./assets/star_bg.png";
import marketBg from "./assets/market_bg.png";
import timeTitle from "./assets/time_title.png";
import starTitle from "./assets/star_title.png";
import marketTitle from "./assets/market_title.png";
import foodTitle from "./assets/food_title.png";
import timeBackBg from "./assets/time_back_bg.png";
import time_enter_bg from "./assets/time_enter.png";
import starBackBg from "./assets/star_back_bg.png";
import star_enter_bg from "./assets/star_enter.png";
import marketBackBg from "./assets/market_back_bg.png";
import foodBackBg from "./assets/food_back_bg.png";
import food_enter_bg from "./assets/food_enter.png";

import { Loading,Message } from "element-ui";
import Vue from "vue";
export default {
  name: "app",
  data: function() {
    return {
      imgs: [
        indexBg,
        timeBg,
        foodBg,
        starBg,
        marketBg,
        timeTitle,
        starTitle,
        marketTitle,
        foodTitle,
        timeBackBg,
        time_enter_bg,
        starBackBg,
        star_enter_bg,
        foodBackBg,
        marketBackBg,
        food_enter_bg,
      ],
      count: 0,
    };
  },
  methods: {
    preload(loading) {
      for (let i = 0; i < this.imgs.length; i++) {
        let img = new Image();
        img.onload = () => {
          this.count++;
          if (this.count == this.imgs.length + 1) {
            loading.close();
          }
        };
        img.src = this.imgs[i];
      }
    },
  },
  async mounted() {
    this.$router.push({
      path: "/index",
    });
    let loadingInstance = Loading.service({ body: true, text: "加载中" });
    this.preload(loadingInstance);
    this.$axios({
      method: "get",
      url: "./data.json",
    }).then((res) => {
      Vue.prototype.$global_data = res.data;
      this.count++;
      if (this.count == this.imgs.length + 1) {
        loadingInstance.close();
      }
    }).catch(()=>{
        Message({
          message: "请求失败，请刷新重试",
          type: "error",
          center: true,
          showClose: true,
        })
    });
    setTimeout(() => {
      try {
        loadingInstance.close();
      } catch (e) {
        console.log(e);
      }
    }, 5000);
  },
};
</script>

<style src="./assets/icon.css"></style>
<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
}
.placeholder {
  visibility: hidden;
}
</style>
