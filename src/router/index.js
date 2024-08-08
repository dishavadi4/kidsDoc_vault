import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import aboutView from '../views/aboutView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Signup',
      name: 'Signup',
      component:SignupView,
      
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
  ]
})

export default router
