import { createApp } from 'vue'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
import App from './App.vue'
import router from '@/router/index'


const app = createApp(App)

app.use(router)

app.mount('#app')
