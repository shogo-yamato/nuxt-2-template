import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // https://v3.nuxtjs.org/getting-started/bridge#feature-flags
  bridge: {
    // -- Opt-in features --
    // Use Vite as the bundler instead of Webpack 4
    vite: true,
    // Enable Nuxt 3 compatible useMeta
    // meta: true,
    // -- Default features --
    // Use legacy server instead of Nitro
    // nitro: false,
    // Disable nuxt 3 compatible `nuxtApp` interface
    // app: false,
    // Disable composition API support
    // capi: false,
    // ... or just disable legacy composition API support
    // capi: {
    //   legacy: false
    // },
    // Do not transpile modules
    // transpile: false,
    // Disable <script setup> support
    // scriptSetup: false,
    // Disable composables auto importing
    // autoImports: false,
    // Do not warn about module incompatibilities
    // constraints: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-2-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/nuxt/framework/issues/3221#issuecomment-1044370689
    transpile: ['@nuxt/bridge-edge'],
  },
})
