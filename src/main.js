import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import './assets/css/common.min.css'
import './assets/css/layout.min.css'

createApp(App).use(router).use(store).mount('#app')
