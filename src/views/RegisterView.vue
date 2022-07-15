<template>
  <div class="register">
    <h1 class="register__header">Ahoy you!<br />
      <span class="register__header--gray">Care to register?</span>
    </h1>
    <FormWrapper>
      <RegisterPageOne />
      <div class="register__messages">
        <p>At least 8 character</p>
        <p>At least one letter</p>
        <p>At least one digit</p>
      </div>
      <div class="register__controls">
        <BaseButton btn-type="secondary">Log in instead</BaseButton>
        <BaseButton btn-type="primary" @click="nextPage">Next Step</BaseButton>

      </div>
    </FormWrapper>
  </div>
</template>

<script>
import FormWrapper from '@/components/forms/FormWrapper.vue'
import RegisterPageOne from '@/components/register/RegisterPageOne.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  name: 'RegisterView',
  data() {
    return {
      formPage: 'first'
    }
  },
  methods: {
    nextPage() {
      this.formPage === 'first' ? this.formPage = 'second' : this.formPage = 'first'
    },
  },
  components: {
    FormWrapper,
    RegisterPageOne,
    BaseButton
  }
}
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

  &__messages {
    margin-top: 210x;
    width: 100%;
    text-align: left;
  }

  &__controls {
    margin-top: 35px;
    width: 100%;
    @include jcc-aic;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>