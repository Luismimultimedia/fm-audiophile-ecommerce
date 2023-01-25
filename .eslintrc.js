module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        '@vue/eslint-config-prettier',
        'plugin:vue/vue3-recommended',
        'prettier',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    plugins: ['prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        // override/add rules settings here, such as:
        quotes: ['error', 'single'],
        indent: ['error', 4],
    },
};
