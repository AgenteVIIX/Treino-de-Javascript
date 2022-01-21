import { createApp } from 'vue'
import App from './App.vue'
//import VueAxios from './api/axios.js'
//import axios from 'axios'
import router from './route/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index.js'

const app = createApp(App)


//app.use(VueAxios, axios)
app.use(router)
app.use(ElementPlus)
app.use(store)

app.mount('#app')