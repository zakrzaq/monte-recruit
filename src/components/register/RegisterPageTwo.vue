<template>
  <div class="form-content">
    <BaseInput inp-type="text">first name</BaseInput>
    <BaseInput inp-type="text" place-text="e.g. Walton">last name</BaseInput>
    <BaseInput inp-type="date">date of birth</BaseInput>

  </div>
</template>

<script>
import BaseInput from '../base/BaseInput.vue'
export default {
  name: 'RegisterPageTwo',
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

  &:last-child {
    gap: 0;
  }
}
</style>