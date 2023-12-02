import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Popper from "vue3-popper";
import 'bootstrap'
import * as echarts from 'echarts'
const app = createApp(App)

app.use(router)

app.component("Popper", Popper);

app.mount('#app')
