<template>
  <div class="inp">
    <label
      :for="this.$slots.default[0].text"
      class="inp__label"
          >
      <slot />
    </label>
    <input
      :type="inputType"
      :name="this.$slots.default[0].text"
      class="inp__content"
      :class="isFieldValid"
      :placeholder="placeText"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
    />
    <button
      v-if="showPasswordButton"
      class="inp__button"
      @click="toggleViewPassword"
    >
      <img src="@/assets/icons/ico-password.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeText: {
      type: String,
      default: "e.g. Jessica",
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      passwordVisible: false,
    };
  },
  computed: {
    inputType() {
      if (this.type === "password") {
        return this.passwordVisible ? "text" : "password";
      } else {
        return this.type;
      }
    },
    showPasswordButton() {
      return this.type === "password" ? true : false;
    },
    isFieldValid() {
      return !this.valid ? "inp__content--error" : "";
    },
  },
  methods: {
    toggleViewPassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.inp {
  max-width: 550px;
  min-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  position: relative;

  &__label {
    flex: 1 1;
    @include roboto-mono(normal, 700);
    font-size: 1rem;
    line-height: 1.15;
    text-transform: uppercase;
    color: $orange;
  }

  &__content {
    flex: 1 1;
    background: $input-bg;
    border: 0.1em solid $input-bg;
    border-radius: 8px;
    padding: 12px;
    outline: none;
    transition: 250ms ease-out 100ms;
    @include roboto(normal, 400);
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

    &--error {
      background: $athens-gray;
      border-color: $primary-bg;
    }
  }

  &__button {
    width: 47px;
    height: 47px;
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
