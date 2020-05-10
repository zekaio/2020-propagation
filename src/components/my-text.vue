<template>
  <div class="text_wrapper">
    <div class="text" v-for="(text, index) in text1" :key="'1-' + index">
      {{ text }}
    </div>
    <br />
    <div class="text" v-for="(text, index) in text2" :key="'2-' + index">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["text1", "text2"],
};
</script>

<style scoped>
.text_wrapper {
  user-select: none;
  width: fit-content;
  max-width: 75vw;
  margin: auto;
  margin-top: 5vh;
}
.text {
  color: #0000007d;
  font-size: 1em;
  line-height: 1.8em;
}
</style>
