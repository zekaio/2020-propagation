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
    };
  },
  computed: {
    food_wish_url: function() {
      return this.$global_data ? this.$global_data.food_wish_url : "";
    },
    food_wish_start: function() {
      return this.$global_data ? this.$global_data.food_wish_start : "";
    },
    text1: function() {
      return this.$global_data ? this.$global_data.food_text1 : "";
    },
    text2: function() {
      return this.$global_data ? this.$global_data.food_text2 : "";
    },
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
