import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import ParentApp from './ParentApp.vue'
import router from './router'

const app = createApp(ParentApp)

app.use(router)

app.mount('#app')