import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
/* import "./util/rem" *///适配移动端


createApp(App).use(router).use(store).use(ElementPlus,{ size: 'small', zIndex: 3000 }).mount('#app')
