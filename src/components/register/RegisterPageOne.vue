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
    {{ validateEmailMessage }}
    <BaseInput
      type="password"
      place-text="Enter your password"
      v-model="user.password"
      @blur="touched.password = true"
      :valid="!validatePasswordMessage"
      >password</BaseInput
    >
    {{ validatePasswordMessage }}
    <div class="form-content__messages">
      <p>At least 8 character</p>
      <p>At least one letter</p>
      <p>At least one digit</p>
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
      return this.user.password.length < 7 ? "Min 8 chars" : "";
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
}
</style>
