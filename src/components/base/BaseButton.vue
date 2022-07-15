<template>
  <button class="btn" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    click(event) {
      this.$emit("click", event);
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  background: $primary-bg;
  color: $white;
  border-radius: 64px;
  border: 0.3em solid $primary-bg;
  @include roboto-mono(normal, 500);
  font-size: 1rem;
  line-height: 100%;
  transition: 250ms ease-out 100ms;
  outline: none;

  &:hover {
    background-color: $primary-bg-hover;
    border-color: $primary-bg-hover;
  }

  &:focus {
    border: 0.3em solid $primary-brd-focus;
    background-color: $primary-bg-hover;
  }
}
</style>