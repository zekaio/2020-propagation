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
    <div class="placeholder">placeholder</div>
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
    };
  },
  computed: {
    time_capsule_url: function() {
      return this.$global_data ? this.$global_data.time_capsule_url : "";
    },
    time_capsule_start: function() {
      return this.$global_data ? this.$global_data.time_capsule_start : "";
    },
    text1: function() {
      return this.$global_data ? this.$global_data.time_text1 : "";
    },
    text2: function() {
      return this.$global_data ? this.$global_data.time_text2 : "";
    },
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
