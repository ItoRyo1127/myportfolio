import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'
import profile from './views/profile.vue'

const app = createApp(App);

const routes = {
    '/profile':profile,
}

const router = new createRouter({
    history:createWebHistory(),
    routes:routes,
})

app.use(router)

