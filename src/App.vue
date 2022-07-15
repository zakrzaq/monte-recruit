<template>
  <main class="main-wrapper">
    <h1>hello</h1>
    <BaseButton>Button</BaseButton>
    <router-view></router-view>
  </main>
</template>

<script>
import BaseButton from './components/base/BaseButton.vue'
export default {
  name: 'App',
  components: {
    BaseButton
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
