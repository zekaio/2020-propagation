<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  async mounted() {
    this.$router.push({
      path: "/index",
    });
  },
};
</script>

<style src="./assets/icon.css"></style>
<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
.placeholder {
  visibility: hidden;
  height: 0;
}
</style>
