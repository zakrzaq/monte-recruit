<template>
  <div class="inp">
    <label for="" class="imp--label">
      <slot />
    </label>
    <input type="text" class="inp--content" placeholder="e.g. Jessica">
  </div>
</template>

<script>
export default {
  name: 'BaseInput'
}
</script>

<style lang="scss" scoped>
.inp {
  max-width: 450px;
  min-width: 300px;
  display: flex;
  flex-direction: column;



  &--label {
    flex: 1 1;
  }

  &--content {
    flex: 1 1;
    background: $input-bg;
    border: 0.1em solid $input-bg;
    border-radius: 8px;
    padding: 12px;
    outline: none;
    transition: 250ms ease-out 100ms;

    &:hover {
      background: $input-bg-hover;
      border-color: $input-bg-hover;
    }

    &:focus {
      background: $input-bg-focus;
      border-color: $input-brd-focus;
    }
  }
}
</style>