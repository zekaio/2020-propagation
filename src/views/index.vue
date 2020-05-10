<template>
  <div class="index">
    <img class="title" :src="indexTitle" />
    <div>
      <div
        v-for="(t, index) in texts"
        :key="index"
        class="navigation"
        @click="go(t.url)"
      >
        {{ t.text }}
      </div>
    </div>
  </div>
</template>

<script>
import indexTitle from "../assets/index_title.png";
export default {
  name: "index",
  data() {
    return {
      indexTitle,
      texts: [
        { text: "时光胶囊", url: "/time_capsule" },
        { text: "食愿记", url: "/food_wish" },
        { text: "星语星寻", url: "/star" },
        { text: "创意市集", url: "/market" },
      ],
    };
  },
  methods: {
    go(url) {
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>

<style scoped>
.index {
  background-image: url(../assets/index_bg.png);
  background-size: 100vw 100vh;
  min-height: 100vh;
  min-width: 100vw;
  background-attachment: fixed;
}
.title {
  width: 60vw;
  margin-left: 20vw;
  margin-top: 3vh;
}
.navigation {
  color: #0000007d;
  font-size: 1em;
  text-align: center;
  width: 8em;
  padding: 5vw;
  background-image: url(../assets/introbt.png);
  background-size: 100% 100%;
  margin: auto;
  margin-top: 3vh;
}
</style>
