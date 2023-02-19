<script>
import { reactive, computed } from 'vue';
import ButtonComponent from '../Button/Button.vue';
import HeroComponent from './Hero/Hero.vue';

export default {
  name: 'HeaderComponent',
  components: {
    ButtonComponent,
    HeroComponent,
  },
  setup() {
    // data
    const heroData = reactive({
      eyebrow: 'New product',
      heading: 'XX99 Mark II Headphones',
      body: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
      cta: {
        text: 'See Product',
        target: '/home',
      },
    });

    // computed
    const hasCompletedData = computed(() => {
      const isCompletedHero = !!(
        heroData?.eyebrow
        && heroData?.body
        && heroData?.cta?.text
        && heroData?.cta?.target
      );
      return isCompletedHero;
    });

    const wrapperClasses = computed(() => {
      const hasBackground = hasCompletedData.value ? 'header--with-background' : '';
      return ['header', hasBackground];
    });

    // Methods
    const openCart = () => {
      console.log('Hola mundo');
    };
    return {
      heroData,
      openCart,
      wrapperClasses,
      hasCompletedData,
    };
  },
};
</script>

<template>
  <header :class="wrapperClasses">
    <nav class="header__navigation-container">
      <ButtonComponent
        class="header__menu-icon"
        :is-icon="true"
        :on-click="openCart"
      >
        <template #icon>
          <img src="/assets/shared/tablet/icon-hamburger.svg" alt="icon hamburguer menu" />
        </template>
      </ButtonComponent>
      <a class="header__navigation-logo" href="/">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </a>
      <ul class="header__navigation-list">
        <li><a href="">Home</a></li>
        <li><a href="">Headphones</a></li>
        <li><a href="">Speakers</a></li>
        <li><a href="">Earphones</a></li>
      </ul>
      <ButtonComponent :is-icon="true" :on-click="openCart">
        <template #icon>
          <img src="/assets/shared/desktop/icon-cart.svg" alt="icon cart" />
        </template>
      </ButtonComponent>
    </nav>
    <div class="header__hero">
      <HeroComponent
        v-bind="heroData"
        :has-background="hasCompletedData"
      />
    </div>
    <section class="header_hero" />
  </header>
</template>

<style lang="scss">
@import '@/styles/_variables';

.header {
    background-color: $color-black-500;
    padding: 32px;

    @media (max-width: 425px) {
        padding: 24px;
    }

    &--with-background {
      background-image: url('/assets/home/mobile/image-header.jpg ');
      background-repeat: no-repeat;
      background-size: cover;

      @media (min-width: 768px) {
        background-image: url('/assets/home/tablet/image-header.jpg ');
      }

      @media (min-width: 1024px) {
        background-image: url('/assets/home/desktop/image-hero.jpg ');
      }

      .header__hero {
        @include container;
        margin-top: 128px;
        margin-bottom: 158px;
      }
    }

    &__menu-icon {
        @media (min-width: 992px) {
            display: none;
        }
    }

    &__navigation-container {
        @include container;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 24px;
        border-bottom: 1px solid #979797;
    }

    &__navigation-list {
        display: flex;
        justify-content: space-between;
        width: 430px;
        margin: auto;

        li {
            a {
                color: $color-white-500;
                @include text-navigation;
            }
        }

        @media (max-width: 991px) {
            display: none;
        }
    }

    &__navigation-logo {
        @media (min-width: 426px) and (max-width: 991px) {
            flex-grow: 1;
        }
    }
}
</style>
