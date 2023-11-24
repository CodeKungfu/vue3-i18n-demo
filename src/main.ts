import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import language from './locales'

const app = createApp(App)
app.use(createI18n({
    locale: 'zh-Hans', // custom logic
    messages:language,
    globalInjection: true
}))
app.use(router)

app.mount('#app')
