<template>
  <div class="form-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FormWrapper",
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  @include jcc-aic-h;
  padding: 50px;
  width: 600px;
  background: $white;
  box-shadow: $form-box-shadow;
  border-radius: 24px;
  margin-bottom: 40px;
}

@include sm {
  .form-wrapper {
    width: 100%;
    margin: 10px auto;
    padding: 20px;
    box-shadow: none;
    margin-bottom: 25px;
    border-radius: none;
  }
}
</style>

