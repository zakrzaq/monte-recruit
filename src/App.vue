<template>
  <main class="main-wrapper">
    <h1>hello</h1>
    <BaseInput inp-type="text" place-text="something ending with monterail.com">Email</BaseInput>
    <BaseInput inp-type="password" place-text="*****">Password</BaseInput>

    <router-view></router-view>
  </main>
</template>

<script>
import BaseInput from './components/base/BaseInput.vue'

export default {
  name: 'App',
  components: {
    BaseInput,
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
