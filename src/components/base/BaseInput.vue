<template>
  <div class="inp">
    <label for="" class="inp--label">
      <slot />
    </label>
    <input :type="inputType" class="inp--content" :placeholder="placeText">
    <button v-if="showPasswordButton" class="inp--button" @click="toggleViewPassword">
      <img src="@/assets/icons/ico-password.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    inpType: {
      type: String,
      default: 'text'
    },
    placeText: {
      type: String,
      default: 'e.g; Jessica'
    }
  },
  data() {
    return {
      passwordVisible: false
    }
  },
  computed: {
    inputType() {
      if (this.inpType === 'password') {
        return this.passwordVisible ? 'text' : 'password'
      } else {
        return this.inpType
      }
    },
    showPasswordButton() {
      return this.inpType === 'password' ? true : false
    }
  },
  methods: {
    toggleViewPassword() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.inp {
  max-width: 450px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  position: relative;


  &--label {
    flex: 1 1;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.15;
    text-transform: uppercase;
    color: $orange;
  }

  &--content {
    flex: 1 1;
    background: $input-bg;
    border: 0.1em solid $input-bg;
    border-radius: 8px;
    padding: 12px;
    outline: none;
    transition: 250ms ease-out 100ms;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.15;
    color: $input-txt;

    &::placeholder {
      color: $input-pl-txt;
    }

    &:hover {
      background: $input-bg-hover;
      border-color: $input-bg-hover;
    }

    &:focus {
      background: $input-bg-focus;
      border-color: $input-brd-focus;
    }
  }

  &--button {
    width: 40px;
    height: 40px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>