<template>
  <main class="main-wrapper">
    <h1>hello</h1>
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
  max-width: 900px;
  margin: 0 auto;

  h1 {
    color: $cherry-red;
  }
}
</style>
