import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import axios from 'axios'
import ElementPlus from 'element-plus'

import {resetForm} from "@/utils/idle";

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8888'

app.config.globalProperties.resetForm = resetForm

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
