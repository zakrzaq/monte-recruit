<template>
  <div class="register">
    <h1 class="register__header">
      {{ headerA }}<br />
      <span class="register__header--gray">{{ headerB }}</span>
    </h1>
    <FormWrapper>
      <RegisterPageOne v-if="formPage === 'first'" @userUpdate="updateUser" />
      <RegisterPageTwo v-if="formPage === 'second'" @userUpdate="updateUser" />
      <div class="register__controls">
        <BaseButton btn-type="secondary">Log in instead</BaseButton>
        <BaseButton btn-type="primary" @click="nextPage">{{
          buttonName
        }}</BaseButton>
      </div>
    </FormWrapper>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import FormWrapper from "@/components/forms/FormWrapper.vue";
import RegisterPageOne from "@/components/register/RegisterPageOne.vue";
import RegisterPageTwo from "@/components/register/RegisterPageTwo.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "RegisterView",
  data() {
    return {
      formPage: "first",
      user: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
      },
    };
  },
  computed: {
    headerA() {
      return this.formPage === "first" ? "Ahoy you!" : "Great!";
    },
    headerB() {
      return this.formPage === "first" ? "Care to register?" : "Now your name";
    },
    buttonName() {
      return this.formPage === "first" ? "Next step" : "Register";
    },
  },
  methods: {
    ...mapMutations(["user/setUser"]),
    nextPage() {
      if (this.formPage === "first") {
        this.formPage = "second";
      } else {
        this.$router.push({ name: "register-success" });
      }
    },
    updateUser(payload) {
      this.user = { ...this.user, ...payload };
    },
  },
  components: {
    FormWrapper,
    RegisterPageOne,
    RegisterPageTwo,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.register {
  @include jcc-aic-h;

  &__header {
    @include eczar(normal, 600);
    font-size: 80px;
    line-height: 102%;
    letter-spacing: -0.01em;
    color: $tuna;

    &--gray {
      color: $jumbo;
    }
  }

  &__controls {
    margin-top: 35px;
    width: 100%;
    @include jcc-aic;
    justify-content: space-between;
    gap: 20px;
  }
}

@include sm {
  .register {
    width: 100%;

    &__header {
      font-size: 40px;
      text-align: center;
    }

    &__controls {
      width: 300px;
      flex-direction: column-reverse;
      justify-content: center;
    }
  }
}
</style>
