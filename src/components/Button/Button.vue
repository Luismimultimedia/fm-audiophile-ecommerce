<script>
import { computed } from 'vue';

export default {
  name: 'ButtonComponent',
  props: {
    modifier: {
      type: String,
      required: false,
      default: 'primary',
    },
    onClick: {
      type: Function,
      required: true,
      default: () => {},
    },
    isIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const wrapperClasses = computed(() => {
      const isIconClass = props.isIcon ? 'button--icon' : '';
      const modifierClass = props.modifier ? `button--${props.modifier}` : '';
      return [
        'button',
        modifierClass,
        isIconClass,
      ];
    });

    return {
      wrapperClasses,
    };
  },
};
</script>

<template>
  <button type="button" :class="wrapperClasses" @click="onClick">
    <slot class="button__icon" name="iconLeft" />
    <slot />
    <slot class="button__icon" name="icon" />
    <slot class="button__icon" name="iconRight" />
  </button>
</template>

<style lang="scss">
@import '@/styles/_variables';
.button {
    @include text-button;
    -webkit-appearance: none;
    appearance: none;
    border: 0;
    cursor: pointer;
    margin: 0;
    padding: 15px 30px;

    &--primary {
        color: $color-white-500;
        background-color: $color-primary-500;

        &:hover {
            background-color: $color-primary-100;
        }
    }

    &--secondary {
        color: $color-black-500;
        background-color: $color-white-500;

        &:hover {
            color: $color-white-500;
            background-color: $color-black-500;
        }
    }

    &--icon {
        background-color: transparent;
        padding: 10px 10px;
        &:hover {
          background-color: transparent;
        }

        @media (max-width: 425px) {
          padding: 0;
        }
    }
}
</style>
