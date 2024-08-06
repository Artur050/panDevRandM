import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { createI18n, useI18n  } from 'vue-i18n';
import { languages } from './i18n/index.js';
import { defaultLocate } from './i18n/index.js';

const localStorageLang = localStorage.getItem('lang')
const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || defaultLocate,
    fallbackLocale: 'en',
    messages
})

createApp(App,
    {
    setup() {
        const {t} = useI18n()
        return {t}
    }
}).use(i18n).use(router).mount('#app');