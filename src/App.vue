<template>
  <div class="app">
    <NavHeader />
    <main class="main-wrapper">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue';
export default {
  name: 'App',
  components: {
    NavHeader
  }
}
</script>

<style lang="scss">
.main-wrapper {
  min-width: 375px;
  max-width: 1200px;
  margin: auto;
}
</style>
