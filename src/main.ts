import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

import '@/assets/iconfont/iconfont.css'

import 'vant/lib/index.css';
import '@/styles/index.scss'

import DInput from '@/components/DInput.vue'
import DButton from '@/components/DButton.vue'

import { Popup, Switch, ImagePreview, Toast } from 'vant';

const app = createApp(App)

app.use(Popup)
app.use(Switch)
app.use(ImagePreview)
app.use(Toast)

app.component('DInput', DInput)
app.component('DButton', DButton)

app.use(router)

app.mount('#app')
