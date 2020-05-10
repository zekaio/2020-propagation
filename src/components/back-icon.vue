<template>
  <div
    class="backIcon"
    @click="back()"
    :style="{ 'background-image': 'url(' + bg + ')' }"
  >
    <el-button type="text">
      <i class="iconfont icon-alifanhui"></i>
      <span class="back_text">返回</span>
    </el-button>
  </div>
</template>

<script>
export default {
  name: "backIcon",
  props: {
    bg: String,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.backIcon {
  background-size: 100% 100%;
  width: fit-content;
  background-repeat: no-repeat;
  padding: 1vw 6vw 0.5vw 4vw;
  margin-top: 2vh;
  margin-left: 5vw;
}
button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.el-button {
  color: black !important;
}
.back_text {
  margin-left: 0.5em;
}
</style>
