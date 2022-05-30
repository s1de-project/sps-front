import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.min.css'
import './assets/css/layout.min.css'

createApp(App).use(router).mount('#app')
