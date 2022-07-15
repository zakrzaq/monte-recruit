<template>
  <main class="main-wrapper">
    <h1>hello</h1>
    <BaseInput>Button</BaseInput>
    <router-view></router-view>
  </main>
</template>

<script>
import BaseInput from './components/base/BaseInput.vue'
export default {
  name: 'App',
  components: {
    BaseInput
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
