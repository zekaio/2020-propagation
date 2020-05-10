<template>
  <div class="food_wish">
    <div class="placeholder">placeholder</div>
    <backIcon :bg="foodBackBg"></backIcon>
    <myTitle :title_img="foodTitle"></myTitle>
    <myText :text1="text1" :text2="text2"></myText>
    <enter
      :enter_url="food_wish_url"
      :start_time="food_wish_start"
      :enter_bg="enter_bg"
    ></enter>
  </div>
</template>

<script>
import backIcon from "../components/back-icon";
import myTitle from "../components/my-title";
import myText from "../components/my-text";
import enter from "../components/enter";
import foodBackBg from "../assets/food_back_bg.png";
import foodTitle from "../assets/food_title.png";
import enter_bg from "../assets/food_enter.png";
import { food_wish_url, food_wish_start } from "../config/config";

export default {
  name: "food_wish",
  components: {
    backIcon,
    myTitle,
    myText,
    enter,
  },
  data: function() {
    return {
      foodBackBg,
      foodTitle,
      enter_bg,
      food_wish_url,
      food_wish_start,
      text1: [
        "将夏时分，蝉鸣阵阵",
        "阳光透过云隙洒满校道",
        "味蕾怀念的是华园滋味",
        "仰望青空，谁的心愿将被寄予远方",
      ],
      text2: [
        "5月23日至5月29日",
        "许愿系列线上活动食愿记",
        "暖萌食物替你传达愿望",
      ],
    };
  },
};
</script>

<style scoped>
.food_wish {
  background-image: url(../assets/food_bg.png);
  background-size: 100% 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-attachment: fixed;
  margin-top: 0;
}
</style>
