<template>
  <div
    class="enter"
    :style="{ 'background-image': 'url(' + enter_bg + ')' }"
    @click="enter(enter_url, start_time)"
  >
    进入
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  name: "enter",
  props: {
    enter_bg: String,
    enter_url: String,
    start_time: String,
  },
  methods: {
    enter(url, start_time) {
      let d = new Date(Date.parse(start_time.replace(/-/g, "/")));
      let cur_date = new Date();
      if (d > cur_date) {
        Message({
          message: "活动还没开始哦",
          type: "warning",
          center: true,
          showClose: true,
        });
      } else {
        window.location.href = url;
      }
    },
  },
};
</script>

<style scoped>
.enter {
  color: #0000007d;
  font-size: 1em;
  padding: 1em 3em 0.9em;
  width: fit-content;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
