<template>
  <div class="register">
    <h1 class="register__header">Ahoy you!<br />
      <span class="register__header--gray">Care to register?</span>
    </h1>
    <FormWrapper>
      <RegisterPageOne />
    </FormWrapper>
  </div>
</template>

<script>
import FormWrapper from '@/components/forms/FormWrapper.vue'
import RegisterPageOne from '@/components/register/RegisterPageOne.vue'
export default {
  name: 'RegisterView',
  components: {
    FormWrapper,
    RegisterPageOne
  }
}
</script>

<style lang="scss" scoped>
.register {
  @include jcc-aic-h;

  &__header {
    font-family: 'Eczar';
    font-style: normal;
    font-weight: 600;
    font-size: 80px;
    line-height: 102%;
    letter-spacing: -0.01em;
    color: $tuna;

    &--gray {
      color: $jumbo;
    }
  }
}
</style>