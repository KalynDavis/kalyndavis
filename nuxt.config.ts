// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        ['@pinia/nuxt', {
            autoImports: [['defineStore', 'definePiniaStore'], "acceptHMRUpdate"]
        }]
    ],
    imports: {
        dirs: ['stores']
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    app: {
        head: {
            title: "Kalyn Davis | Full-Stack Engineer",
            meta: [{ name: 'description', content: 'Kalyn Davis, a Full-Stack Software Engineer from Birmingham, Alabama.' }],
        }
    },
    runtimeConfig: {
        public: {
            posthogPublicKey: process.env.POSTHOG_API_KEY,
            posthogHost: process.env.POSTHOG_HOST
        }
    }
})
