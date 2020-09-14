<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Roboto", sans-serif;
}
</style>
