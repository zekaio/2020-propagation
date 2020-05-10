<template>
  <div class="market">
    <div class="placeholder">placeholder</div>
    <backIcon :bg="marketBackBg"></backIcon>
    <myTitle :title_img="marketTitle"></myTitle>
    <myText :text1="text1" :text2="text2"></myText>
  </div>
</template>

<script>
import backIcon from "../components/back-icon";
import myTitle from "../components/my-title";
import myText from "../components/my-text";
import marketBackBg from "../assets/market_back_bg.png";
import marketTitle from "../assets/market_title.png";

export default {
  name: "food_wish",
  components: {
    backIcon,
    myTitle,
    myText,
  },
  data: function() {
    return {
      marketBackBg,
      marketTitle,
      text1: [
        "时光荏苒，四年悄然而逝",
        "岁月冷暖，四年的时光色彩斑斓",
        "我们用设计记录华工的点滴，用产品鼓励你们奋勇向前",
        "前路漫漫，未来可期",
        "细数过往，纸短情长",
      ],
      text2: ["6月6日至6月10日", "记得来带走你的华工记忆"],
    };
  },
};
</script>

<style scoped>
.market {
  background-image: url(../assets/market_bg.png);
  background-size: 100% 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-attachment: fixed;
  margin-top: 0;
}
</style>
