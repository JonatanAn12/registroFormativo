import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Register from '../views/registro.vue'
import DashboardLayout from '../components/dashboardLayout.vue'
import Inventario from '../views/inventario.vue'
import Administracion from '../views/administracion.vue'
import Menu from '../views/menu.vue'
import Peso from '../views/peso.vue'
import Estadistica from '../views/estadistica.vue'
import ForgotPassword from '../views/forgotPassword.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/forgot-password', name: 'forgotPassword', component: ForgotPassword },
  { path: '/dashboard', component: DashboardLayout, meta: { requiresAuth: true }, 
    children: [
      { path: 'inventario', name: 'Inventario', component: Inventario },
      { path: 'menu', name: 'Menu', component: Menu },
      { path: 'peso', name: 'Peso', component: Peso },
      { path: 'estadistica', name: 'Estadistica', component: Estadistica },
      { path: 'administracion', name: 'Administracion', component: Administracion }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = true; // Aquí deberías verificar el estado de autenticación real
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
})

export default router