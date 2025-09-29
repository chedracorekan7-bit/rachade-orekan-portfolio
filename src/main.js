import { createApp } from 'vue'
import './style.css'
import './assets/css/responsive.css'
import App from './App.vue'
import { Icon } from "@iconify/vue";
import Countup from 'vue-countup-v3'
createApp(App)
.component('Icon', Icon)
.component('Countup', Countup)
.mount('#app')
