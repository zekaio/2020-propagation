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
    };
  },
  computed: {
    text1: function() {
      return this.$global_data ? this.$global_data.market_text1 : "";
    },
    text2: function() {
      return this.$global_data ? this.$global_data.market_text2 : "";
    },
  },
};
</script>

<style scoped>
.market {
  background-image: url(../assets/market_bg.png);
  background-size: 100vw 100vh;
  min-width: 100vw;
  min-height: 100vh;
  background-attachment: fixed;
  margin-top: 0;
}
</style>
