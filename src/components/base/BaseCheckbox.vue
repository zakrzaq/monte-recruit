<template>
  <div class="chk">
    <input
      type="checkbox"
      :name="name"
      :value="value"
      class="chk__box"
      :class="{ 'chk__box--error': isFieldValid }"
      @input="$emit('input', $event.target.checked)"
      @blur="$emit('blur')"
    />
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
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isFieldValid() {
      return !this.valid ? "chk__box--error" : "";
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
    outline: 0.75px solid $checkbox-brd;
    border-radius: 8px;

    &--error {
      outline: 0.75px solid $primary-bg;
    }
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
