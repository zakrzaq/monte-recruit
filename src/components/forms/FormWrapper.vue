<template>
  <div class="form-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormWrapper',
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  @include jcc-aic-h;
  padding: 50px;
  // gap: 40px;
  width: 600px;
  background: $white;
  box-shadow: $form-box-shadow;
  border-radius: 24px;
}
</style>