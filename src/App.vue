<template>
  <div class="app">
    <NavHeader />
    <main class="main-wrapper">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";

export default {
  name: "App",
  components: {
    NavHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap");
@import "./src/assets/scss/global";

.main-wrapper {
  min-width: 375px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
