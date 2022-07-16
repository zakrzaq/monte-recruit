<template>
  <div class="form-content">
    <BaseInput
      type="text"
      place-text="Something ending with monterail.com"
      v-model="user.email"
    >
      email
    </BaseInput>
    <BaseInput
      type="password"
      place-text="Enter your password"
      v-model="user.password"
      >password</BaseInput
    >
    <div class="form-content__messages">
      <p>At least 8 character</p>
      <p>At least one letter</p>
      <p>At least one digit</p>
    </div>
  </div>
</template>

<script>
import BaseInput from "../base/BaseInput.vue";

export default {
  name: "RegisterPageOne",
  data() {
    return {
      user: {
        email: "",
        password: "",
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
