import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'
import axios from './axios'

import './scss/style.scss'
import './index.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = axios
