<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import ButtonComponent from '../../Button/Button.vue';

export default {
  name: 'HeroComponent',
  components: {
    ButtonComponent,
  },
  props: {
    eyebrow: { type: String, required: false, default: '' },
    heading: { type: String, required: false, default: '' },
    body: { type: String, required: false, default: '' },
    cta: { type: Object, required: false, default: () => ({}) },
    hasBackground: { type: Boolean, required: false, default: false },
  },
  setup(props) {
    // hooks
    const router = useRouter();

    // computed
    const ctaComputed = computed(() => {
      const renderButton = !!(props.cta?.text && props.cta?.target);
      return renderButton || null;
    });

    const wrapperClasses = computed(() => {
      const backgroundClass = props.hasBackground ? '' : 'hero__container--without-background';
      return [backgroundClass];
    });

    // methods
    const onNavigate = (target) => {
      // console.log(target);
      router.push({ name: target });
    };

    return {
      onNavigate,
      ctaComputed,
      wrapperClasses,
    };
  },
};
</script>

<template>
  <div
    class="hero__container"
    :class="wrapperClasses"
  >
    <p
      v-if="!!eyebrow"
      class="hero__eyebrow"
    >
      {{ eyebrow }}
    </p>
    <h1
      v-if="!!heading"
      class="hero__heading"
    >
      {{ heading }}
    </h1>
    <p
      v-if="!!body"
      class="hero__body"
    >
      {{ body }}
    </p>
    <div class="hero__wrapper-button">
      <ButtonComponent
        v-if="ctaComputed"
        :on-click="() => onNavigate(cta.target)"
      >
        {{ cta.text }}
      </ButtonComponent>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/_variables';

.hero {

  &__container {
    max-width: 379px;
    margin: auto;

    @media (min-width: 1024px) {
      margin-left: 0;
    }
  }

  &__container--without-background {
    margin: 32px auto;
  }

  &__eyebrow {
    @include text-overline;
    color: $color-white-500;
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 1024px) {
       text-align: left;
    }
  }

  &__heading {
    @include text-header-1000;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.4px;
    color: $color-white-500;
    text-align: center;

    @media (min-width: 768px) {
      @include text-header-1000;
    }

    @media (min-width: 1024px) {
      text-align: left;
    }
  }

  &__body {
    @include text-body;
    color: white;
    text-align: center;
    max-width: 349px;
    margin: 24px auto;

    @media (min-width: 1024px) {
      text-align: left;
      margin-left: 0;
    }
  }

  &__wrapper-button {
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width: 1024px) {
      justify-content: left;
    }
  }
}
</style>
