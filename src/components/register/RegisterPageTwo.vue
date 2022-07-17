<template>
  <div class="form-content">
    <BaseInput
      type="text"
      v-model="user.firstName"
      @blur="touched.firstName = true"
      :valid="!validateFirstNameMessage"
      >first name</BaseInput
    >
    {{ validateFirstNameMessage }}
    <BaseInput
      type="text"
      place-text="e.g. Walton"
      v-model="user.lastName"
      @blur="touched.lastName = true"
      :valid="!validateLastNameMessage"
      >last name</BaseInput
    >
    {{ validateLastNameMessage }}
    <BaseInput
      type="date"
      v-model="user.dateOfBirth"
      @blur="touched.dateOfBirth = true"
      :valid="!validateDateOfBirthMessage"
      >date of birth</BaseInput
    >
    {{ validateDateOfBirthMessage }}
    <BaseCheckbox name="privacy-policy" v-model="user.privacyPolicy" @blur="touched.privacyPolicy = true">
      I accept <a href="#">Privacy Policy</a>
    </BaseCheckbox>
    {{ validatePrivacyPolicyMessage }}
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
      touched: {
        firstName: false,
        lastName: false,
        dateOfBirth: false,
        privacyPolicy: false,
      },
    };
  },
  computed: {
    validateFirstNameMessage() {
      if (!this.touched.firstName) return "";
      return this.user.firstName ? "" : "Please provide your first name.";
    },
    validateLastNameMessage() {
      if (!this.touched.lastName) return "";
      return this.user.lastName ? "" : "Please provide your last name.";
    },
    validateDateOfBirthMessage() {
      if (!this.touched.dateOfBirth) return "";
      return this.user.dateOfBirth ? "" : "Please provide your date of birth.";
    },
    validatePrivacyPolicyMessage() {
      if (!this.touched.privacyPolicy) return "";
      return this.user.privacyPolicy
        ? ""
        : "Please accept our Pivacy Policy to register.";
    },
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
