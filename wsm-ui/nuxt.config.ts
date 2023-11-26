// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      ["@nuxtjs/i18n", {vueI18n: "./i18n.config.ts"}],
      '@vueuse/nuxt',
      '@hypernym/nuxt-anime',
      "nuxt-icons",
    ],
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    app: {
        head: {
            title: "Web System Monitor"
        }
    },
})