<template>
  <main class="main-wrapper">
    <h1>hello</h1>
    <BaseInput>Button</BaseInput>
    <BasePasswordInput>password</BasePasswordInput>
    <router-view></router-view>
  </main>
</template>

<script>
import BaseInput from './components/base/BaseInput.vue'
import BasePasswordInput from './components/base/BasePasswordInput.vue'

export default {
  name: 'App',
  components: {
    BaseInput,
    BasePasswordInput
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
