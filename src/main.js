import { createApp } from 'vue';
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
