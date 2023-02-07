<script>
import ButtonComponent from '../Button/Button.vue';

export default {
  name: 'HeaderComponent',
  components: {
    ButtonComponent,
  },
  setup() {
    const openCart = () => {
      console.log('Hola mundo');
    };
    return {
      openCart,
    };
  },
};
</script>

<template>
  <header class="header">
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
