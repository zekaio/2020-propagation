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
import { Loading } from "element-ui";
export default {
  name: "app",
  data: function() {
    return {
      imgs: [indexBg, timeBg, foodBg, starBg, marketBg],
      count: 0,
    };
  },
  methods: {
    preload(loading) {
      for (let i = 0; i < this.imgs.length; i++) {
        let img = new Image();
        img.onload = () => {
          this.count++;
          if (this.count == this.imgs.length) {
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
    setTimeout(() => {
      try {
        loadingInstance.close();
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  },
};
</script>

<style src="./assets/icon.css"></style>
<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
.placeholder {
  visibility: hidden;
  height: 0;
}
</style>
