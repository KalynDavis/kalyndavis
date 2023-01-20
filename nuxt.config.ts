// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        ['@pinia/nuxt',{
        autoImports: [['defineStore', 'definePiniaStore'], "acceptHMRUpdate"]
        }]
    ],
    imports: {
        dirs: ['stores']
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
})
