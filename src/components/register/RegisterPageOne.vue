<template>
  <div class="form-content">
    <BaseInput inp-type="text" place-text="Something ending with monterail.com">
      email
    </BaseInput>
    <BaseInput inp-type="password" place-text="Enter your password">password</BaseInput>
    <div class="form-content__messages">
      <p>At least 8 character</p>
      <p>At least one letter</p>
      <p>At least one digit</p>
    </div>
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
  gap: 25px;

  &__messages {
    width: 100%;
    text-align: left;
  }
}
</style>