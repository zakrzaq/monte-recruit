<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo" class="company-logo">

      </router-link>
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
  margin-bottom: 50px;

  &__logo {
    @include jcc-aic;
    padding-left: 30px
  }

  &__slogan {
    @include jcc-aic;
    padding-right: 30px;
    text-transform: uppercase;
    @include roboto-mono(normal, 500);
    font-size: 1.1rem;
    line-height: 1.1;
    letter-spacing: 0.03em;
    color: $tuna;

    &--emoji {
      font-size: 0.9rem;
    }
  }
}

@include sm {
  .header {
    justify-content: center;

    &__slogan {
      display: none;
    }

    &__logo {
      padding: 0;
    }
  }
}
</style>
