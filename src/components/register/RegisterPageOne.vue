<template>
  <div class="form-content">
    <BaseInput
      type="text"
      place-text="Something ending with monterail.com"
      v-model="user.email"
      @blur="touched.email = true"
      :valid="!validateEmailMessage"
    >
      email
    </BaseInput>
    <div class="form-content__error">
      {{ validateEmailMessage }}
    </div>
    <BaseInput
      type="password"
      place-text="Enter your password"
      v-model="user.password"
      @blur="touched.password = true"
      :valid="!validatePasswordMessage"
      >password</BaseInput
    >
    <div class="form-content__messages">
      <p
        :class="
          passwordErrors.length && touched.password
            ? 'form-content--text-error'
            : ''
        "
      >
        At least 8 character
      </p>
      <p
        :class="
          passwordErrors.letter && touched.password
            ? 'form-content--text-error'
            : ''
        "
      >
        At least one letter
      </p>
      <p
        :class="
          passwordErrors.digit && touched.password
            ? 'form-content--text-error'
            : ''
        "
      >
        At least one digit
      </p>
    </div>
  </div>
</template>

<script>
import BaseInput from "../base/BaseInput.vue";
import validateEmail from "@/helpers/validateEmail";

export default {
  name: "RegisterPageOne",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      touched: {
        email: false,
        password: false,
      },
      valid: {
        email: false,
        password: false,
      },
      passwordErrors: {
        length: true,
        digit: true,
        letter: true,
      },
    };
  },
  computed: {
    validateEmailMessage() {
      if (!this.touched.email) return "";
      return validateEmail(this.user.email)
        ? ""
        : "Please provide valid email address.";
    },
    validatePasswordMessage() {
      if (!this.touched.password) return "";
      return !this.passwordErrors.length &&
        !this.passwordErrors.letter &&
        !this.passwordErrors.digit
        ? ""
        : "error";
    },
    password() {
      return this.user.password;
    },
  },
  methods: {
    validateEmail() {
      !this.validateEmailMessage
        ? (this.valid.email = true)
        : (this.valid.email = false);
    },
    validatePassword() {
      !this.validatePasswordMessage
        ? (this.valid.password = true)
        : (this.valid.password = false);
    },
  },
  watch: {
    user: {
      handler(newVal) {
        this.validateEmail();
        this.validatePassword();

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
    password() {
      this.user.password.length < 8
        ? (this.passwordErrors.length = true)
        : (this.passwordErrors.length = false);
      this.user.password.match(/\d/)
        ? (this.passwordErrors.digit = false)
        : (this.passwordErrors.digit = true);
      this.user.password.match(/[a-zA-Z]/)
        ? (this.passwordErrors.letter = false)
        : (this.passwordErrors.letter = true);
    },
  },
  components: {
    BaseInput,
  },
};
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

  &__error {
    width: 100%;
    margin-top: -1rem;
  }

  &--text-error {
    color: $primary-bg;
  }
}
</style>
