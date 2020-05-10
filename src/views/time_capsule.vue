<template>
  <div class="time_capsule">
    <div class="placeholder">placeholder</div>
    <backIcon :bg="timeBackBg"></backIcon>
    <myTitle :title_img="timeTitle"></myTitle>
    <myText :text1="text1" :text2="text2"></myText>
    <enter
      :enter_url="time_capsule_url"
      :start_time="time_capsule_start"
      :enter_bg="enter_bg"
    ></enter>
  </div>
</template>

<script>
import backIcon from "../components/back-icon";
import myTitle from "../components/my-title";
import myText from "../components/my-text";
import enter from "../components/enter";
import timeBackBg from "../assets/time_back_bg.png";
import timeTitle from "../assets/time_title.png";
import enter_bg from "../assets/time_enter.png";
import { time_capsule_url, time_capsule_start } from "../config/config";

export default {
  name: "time_capsule",
  components: {
    backIcon,
    myTitle,
    myText,
    enter,
  },
  data: function() {
    return {
      timeBackBg,
      timeTitle,
      enter_bg,
      time_capsule_url,
      time_capsule_start,
      text1: [
        "当过去凋零成遗迹",
        "用文字刻划出暖意",
        "我们携手在华园地图上标记",
        "保存那些珍贵的回忆",
      ],
      text2: ["5月16日至6月14日", "毕业季时光胶囊", "为你定格那一刻的美好"],
    };
  },
};
</script>

<style scoped>
.time_capsule {
  background-image: url(../assets/time_bg.png);
  background-size: 100% 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-attachment: fixed;
  margin-top: 0;
}
</style>
