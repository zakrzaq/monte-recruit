<template>
  <main class="main-wrapper">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
.main-wrapper {
  min-width: 375px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
