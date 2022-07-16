<template>
  <div class="chk">
    <input type="checkbox" :name="name" :value="value" class="chk__box" />
    <label :for="name" class="chk__label"><slot /></label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.chk {
  width: 100%;
  @include jcc-aic;
  justify-content: flex-start;

  &__box {
    width: 24px;
    height: 24px;
    border: 0.75px solid $checkbox-brd;
    border-radius: 8px;
  }

  &__label {
    margin-left: 0.7rem;

    a,
    a:visited,
    a:hover,
    a:active,
    a:link {
      color: $charade;
    }
  }
}
</style>
