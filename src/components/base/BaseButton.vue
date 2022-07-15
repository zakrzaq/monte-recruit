<template>
  <button :class="buttonClasses" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    btnType: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClasses() {
      return [
        "btn",
        { "btn--primary": this.btnType === "primary" },
        { "btn--secondary": this.btnType === "secondary" },
      ];
    },
  },
  methods: {
    click(event) {
      this.$emit("click", event);
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  @include jcc-aic;
  min-width: 100px;
  width: 100%;
  padding: 12px 24px;
  border-radius: 64px;
  @include roboto-mono(normal, 500);
  font-size: 1rem;
  line-height: 100%;
  transition: 250ms ease-out 100ms;
  outline: none;

  &--primary {
    color: $white;
    background: $primary-bg;
    border: 0.3em solid $primary-bg;

    &:hover {
      background-color: $primary-bg-hover;
      border-color: $primary-bg-hover;
    }

    &:focus {
      border: 0.3em solid $primary-brd-focus;
      background-color: $primary-bg-hover;
    }
  }

  // fix secondary color classification in colors.scss
  &--secondary {
    color: $primary-bg;
    background: $white;
    border: 0.3em solid $white;

    &:hover {
      background: $athens-gray;
      border-color: $athens-gray;
    }

    &:focus {
      border: 0.3em solid $athens-gray;
      background: darken($white, 0.15);
    }
  }
}
</style>