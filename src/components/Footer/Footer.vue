<template>
  <footer class="footer__container">
    <div class="footer__navigation">
      <a class="footer__navigation-logo" href="/">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </a>
      <ul class="footer__navigation-list">
        <li><a href="">Home</a></li>
        <li><a href="">Headphones</a></li>
        <li><a href="">Speakers</a></li>
        <li><a href="">Earphones</a></li>
      </ul>
    </div>
    <div class="footer__information">
      <p class="footer__description">
        Audiophile is an all in one stop to fulfill your audio needs.
        We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
        Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <div class="footer__footer">
        <p class="footer__copy-rights">
          Copyright 2021. All Rights Reserved
        </p>
        <ul class="footer__social-networks">
          <li>
            <a href="">
              <object>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#FFF" fill-rule="nonzero"/></svg>
              </object>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss">
@import '@/styles/_variables';

.footer {
  &__container {
    background-color: $color-black-400;
    padding: 52px 24px 38px;

    @media (min-width: 767px) {
      padding: 60px 40px 46px;
    }

    @media (min-width: 992px) {
      padding: 75px 165px 48px;
    }
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  &__navigation-logo {
    display: block;
    width: 100%;
    text-align: center;

    @media (min-width: 767px) {
      display: inline;
      width: auto;
      text-align: left;
    }
  }

  &__navigation-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 48px;
    align-items: center;
    height: 148px;
    justify-content: space-between;

    li {
        a {
            color: $color-white-500;
            @include text-navigation;
        }
    }

    @media (min-width: 768px) {
      justify-content: space-between;
      flex-direction: row;
      height: auto;
      width: 430px;
      margin-top: 32px;
    }

    @media (min-width: 992px) {
      margin-top: 0;
    }
  }

  &__information {
    margin-top: 48px;

    @media (min-width: 768px) {
      margin-top: 32px;
    }
  }

  &__description {
    @include text-body;
    color: $color-white-500;
  }
}
</style>
