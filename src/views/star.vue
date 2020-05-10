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
    <div class="placeholder">placeholder</div>
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
    };
  },
  computed: {
    star_url: function() {
      return this.$global_data ? this.$global_data.star_url : "";
    },
    star_start: function() {
      return this.$global_data ? this.$global_data.star_start : "";
    },
    text1: function() {
      return this.$global_data ? this.$global_data.star_text1 : "";
    },
    text2: function() {
      return this.$global_data ? this.$global_data.star_text2 : "";
    },
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
