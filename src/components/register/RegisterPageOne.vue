<template>
  <div class="form-content">
    <BaseInput inp-type="text" place-text="Something ending with monterail.com">
      email
    </BaseInput>
    <BaseInput inp-type="password" place-text="Enter your password">password</BaseInput>
  </div>
</template>

<script>
import BaseInput from '../base/BaseInput.vue'
export default {
  name: 'RegisterPageOne',
  components: {
    BaseInput
  }
}
</script>

<style lang="scss" scoped>
.form-content {
  width: 100%;
  @include jcc-aic;
  flex-direction: column;
  gap: 25px
}
</style>