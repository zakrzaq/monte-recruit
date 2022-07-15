<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  background: $primary;
  color: $white;
  border-radius: 64px;
  border: none;
  flex: none;
  order: 1;
  flex-grow: 0;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
}
</style>