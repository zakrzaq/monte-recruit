<template>
  <div class="form-content">
    <BaseInput type="text" v-model="user.firstName">first name</BaseInput>
    <BaseInput type="text" place-text="e.g. Walton" v-model="user.lastName"
      >last name</BaseInput
    >
    <BaseInput type="date" v-model="user.dateOfBirth">date of birth</BaseInput>
    <BaseCheckbox name="privacy-policy" v-model="user.privacyPolicy">
      I accept <a href="#">Privacy Policy</a>
    </BaseCheckbox>
  </div>
</template>

<script>
import BaseInput from "../base/BaseInput.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";

export default {
  name: "RegisterPageTwo",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        privacyPolicy: false,
      },
    };
  },
  watch: {
    user: {
      handler(newVal) {
        this.$emit("userUpdate", newVal);
      },
      deep: true,
    },
  },
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
