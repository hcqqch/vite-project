import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
//router
app.use(router)
//element-plus
app.use(ElementPlus)
//pinia
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
