<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo.svg" alt="logo" class="company-logo">
    </div>
    <div class="header__slogan">
      <p>Developed with
        <span class="header__slogan--emoji">❤️</span>
        by Monterail
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  display: flex;
  justify-content: space-between;

  &__logo {
    @include jcc-aic;
    padding-left: 30px
  }

  &__slogan {
    @include jcc-aic;
    padding-right: 30px;
    text-transform: uppercase;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.1;
    letter-spacing: 0.03em;

    &--emoji {
      font-size: 0.9rem;
    }
  }
}
</style>