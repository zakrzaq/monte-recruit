<template>
  <div class="form-content">
    <BaseInput
      type="text"
      v-model="user.firstName"
      @blur="touched.firstName = true"
      :valid="!validateFirstNameMessage"
      >first name</BaseInput
    >
    <div class="form-content__error">
      {{ validateFirstNameMessage }}
    </div>
    <BaseInput
      type="text"
      place-text="e.g. Walton"
      v-model="user.lastName"
      @blur="touched.lastName = true"
      :valid="!validateLastNameMessage"
      >last name</BaseInput
    >
    <div class="form-content__error">
      {{ validateLastNameMessage }}
    </div>
    <BaseInput
      type="date"
      v-model="user.dateOfBirth"
      @blur="touched.dateOfBirth = true"
      :valid="!validateDateOfBirthMessage"
      >date of birth</BaseInput
    >
    <div class="form-content__error">
      {{ validateDateOfBirthMessage }}
    </div>
    <BaseCheckbox
      name="privacy-policy"
      v-model="user.privacyPolicy"
      @blur="touched.privacyPolicy = true"
    >
      I accept <a href="#">Privacy Policy</a>
    </BaseCheckbox>
    <div class="form-content__error">
      {{ validatePrivacyPolicyMessage }}
    </div>
  </div>
</template>

<script>
import BaseInput from "../base/BaseInput.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
import validateAge from '@/helpers/validateAge'

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
      valid: {
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
      return validateAge(this.user.dateOfBirth) >= 18 ? "" : "Please provide your date of birth.";
    },
    validatePrivacyPolicyMessage() {
      if (!this.touched.privacyPolicy) return "";
      return this.user.privacyPolicy
        ? ""
        : "Please accept our Pivacy Policy to register.";
    },
  },
  methods: {
    validateFirstName() {
      !this.validateFirstNameMessage
        ? (this.valid.firstName = true)
        : (this.valid.firstName = false);
    },
    validateLastName() {
      !this.validateLastNameMessage
        ? (this.valid.lastName = true)
        : (this.valid.lastName = false);
    },
    validateDateOfBirth() {
      !this.validateDateOfBirthMessage
        ? (this.valid.dateOfBirth = true)
        : (this.valid.dateOfBirth = false);
    },
    validatePrivacyPolicy() {
      this.user.privacyPolicy
        ? (this.valid.privacyPolicy = true)
        : (this.valid.privacyPolicy = false);
    },
  },
  watch: {
    user: {
      handler(newVal) {
        this.validateFirstName();
        this.validateLastName();
        this.validateDateOfBirth();
        this.validatePrivacyPolicy();
        this.$emit("userUpdate", newVal);
      },
      deep: true,
    },
    valid: {
      handler(newVal) {
        this.$emit("validUpdated", newVal);
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

  &__error {
    width: 100%;
    margin-top: -1rem;
  }
}
</style>
