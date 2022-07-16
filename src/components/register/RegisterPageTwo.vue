<template>
  <div class="form-content">
    <BaseInput type="text">first name</BaseInput>
    <BaseInput type="text" place-text="e.g. Walton">last name</BaseInput>
    <BaseInput type="date">date of birth</BaseInput>
    <BaseCheckbox name="privacy-policy">
      I accept <a href="#">Privacy Policy</a>
    </BaseCheckbox>
  </div>
</template>

<script>
import BaseInput from "../base/BaseInput.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";

export default {
  name: "RegisterPageTwo",
  components: {
    BaseInput,
    BaseCheckbox,
  },
};
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
