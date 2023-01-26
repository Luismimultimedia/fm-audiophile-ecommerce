<script setup>
console.log();
</script>

<template>
    <h1>Text header 1000</h1>
    <h2>text-header-900</h2>
    <h3>text-header-800</h3>
    <h4>text-header-700</h4>
    <h5>text-header-600</h5>
    <h6>text-header-500</h6>
    <p class="text-overline">text-overline</p>
    <p class="text-sub-title">text-sub-title</p>
    <p class="text-button">text-button</p>
    <p class="text-input">text-input</p>
    <p class="text-input-placement">text-input-placement</p>
    <p class="text-body">text-body</p>
    <img src="/assets/cart/image-xx59-headphones.jpg" alt="product" />
</template>

<style lang="scss" scoped>
@import '@/styles/_variables';

h1 {
    @include text-header-1000;
    color: $color-primary-100;
}

h2 {
    @include text-header-900;
    color: $color-primary-500;
}

h3 {
    @include text-header-800;
}

h4 {
    @include text-header-700;
}

h5 {
    @include text-header-600;
}

h6 {
    @include text-header-500;
}

.text-overline {
    @include text-overline;
}

.text-sub-title {
    @include text-sub-title;
}

.text-button {
    @include text-button;
}

.text-input {
    @include text-input;
}

.text-input-placement {
    @include text-input-placement;
}

.text-body {
    @include text-body;
}
</style>
