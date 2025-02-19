import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Register from '../views/registro.vue'
import Dashboard from '../components/dashboard.vue'
import forgotPassword from '../views/forgotPassword.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true }},
  { path: '/forgotPassword', name: 'forgotPassword', component: forgotPassword }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usa import.meta.env.BASE_URL en lugar de process.env.BASE_URL
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // Aquí deberías verificar el estado de autenticación real
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
})

export default router