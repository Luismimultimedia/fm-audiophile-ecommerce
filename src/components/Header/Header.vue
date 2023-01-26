<script setup></script>

<template>
    <header class="header">
        <nav class="header__navigation">
            <a href="/">
                <img src="/assets/shared/desktop/logo.svg" alt="logo" />
            </a>
            <ol class="header__navigation-list">
                <li><a href="">Home</a></li>
                <li><a href="">Headphones</a></li>
                <li><a href="">Speakers</a></li>
                <li><a href="">Earphones</a></li>
            </ol>
            <button>
                <img src="/assets/shared/desktop/icon-cart.svg" alt="logo" />
            </button>
        </nav>
    </header>
</template>

<style lang="scss">
@import '@/styles/_variables';
.header {
    background-color: $color-black-500;
    padding: 32px;

    &__navigation {
        @include container;
        display: flex;
        justify-content: space-between;

        &-list {
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
        }
    }
}
</style>
