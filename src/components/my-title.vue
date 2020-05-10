<template>
  <img class="title" :src="title_img" />
</template>

<script>
export default {
  props: {
    title_img: String,
  },
};
</script>

<style>
.title {
  user-select: none;
  width: 40vw;
  margin-left: 30vw;
  margin-top: 5vh;
}
</style>
