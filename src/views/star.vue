<template>
  <div class="star">
    <div class="placeholder">placeholder</div>
    <backIcon :bg="starBackBg"></backIcon>
    <myTitle :title_img="starTitle"></myTitle>
    <myText :text1="text1" :text2="text2"></myText>
    <enter
      :enter_url="star_url"
      :start_time="star_start"
      :enter_bg="enter_bg"
    ></enter>
  </div>
</template>

<script>
import backIcon from "../components/back-icon";
import myTitle from "../components/my-title";
import myText from "../components/my-text";
import enter from "../components/enter";
import starBackBg from "../assets/star_back_bg.png";
import starTitle from "../assets/star_title.png";
import enter_bg from "../assets/star_enter.png";
import { star_url, star_start } from "../config/config";

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
      starBackBg,
      starTitle,
      enter_bg,
      star_url,
      star_start,
      text1: [
        "灰色疫情吞噬了城市的色彩",
        "冰冷口罩掩盖了纯真的笑容",
        "这一次，让我们踏上星际追寻失去的色彩",
        "镜子对面，是自己专属的红",
        "日月并行，是时间独特的蓝",
        "回忆湖畔，是记忆荧光的黄",
        "这趟旅程中，星星点点，描绘彩色的未来",
        "请握紧手中的船票，让我们带你追寻心里的星空",
      ],
      text2: ["5月29日至6月5日", "星语星寻 光点与你"],
    };
  },
};
</script>

<style scoped>
.star {
  background-image: url(../assets/star_bg.png);
  background-size: 100% 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-attachment: fixed;
  margin-top: 0;
}
</style>
