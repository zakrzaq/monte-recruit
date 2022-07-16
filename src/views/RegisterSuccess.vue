<template>
  <div class="success">
    <h1 class="success__heading">Good job Georgia!</h1>
    <p class="success__text">
      We have sent you an email to
      <strong>{{ getUser.email }}</strong
      >. <br />Make sure to click the link from the message to activate your
      account.
    </p>
    <div class="success__controls">
      <BaseButton @click="$router.push({ name: 'register' })"
        >Go to homepage</BaseButton
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "RegisterSuccess",
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.success {
  width: 700px;
  height: calc(100vh - 200px);
  @include jcc-aic-h;

  &__heading {
    @include eczar(normal, 600);
    font-size: 80px;
    line-height: 81.6px;
    color: $tuna;
    margin: 0;
  }

  &__text {
    @include roboto(normal, 400);
    font-size: 1.3rem;
    line-height: 1.15;
    color: $charade;
    text-align: center;
    margin-top: 35px;
  }

  &__controls {
    margin-top: 35px;
    width: 250px;
    @include jcc-aic;
  }
}

@include sm {
  .success {
    width: 100%;
    margin: 10px auto;

    &__text {
      margin-left: 20px;
      margin-right: 20px;
    }

    &__heading {
      font-size: 40px;
    }
  }
}
</style>
