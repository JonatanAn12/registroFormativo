<template>
  <div class="background">
    <div class="login">
      <h1>SmartPay</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
      <p><router-link to="/forgot-password">¿Olvidaste tu contraseña?</router-link></p>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../store';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  methods: {
    login() {
      this.userStore.setUser({ email: this.email });
      console.log('Email:', this.email, 'Password:', this.password);
      this.$router.push('/dashboard'); // Redirigir al dashboard después de iniciar sesión
    },
  },
};
</script>

<style scoped>
.background {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff; /* Fondo azul claro */
  width: 100vw;
}

.login {
  background-color: #ffffff; /* Fondo blanco */
  padding: 4rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
  margin-left: 12rem;
}

h1 {
  color: #1e90ff; /* Azul */
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #1e90ff; /* Azul */
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #1e90ff; /* Azul */
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #1e90ff; /* Azul */
  color: #ffffff; /* Blanco */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1c86ee; /* Azul más oscuro */
}

p {
  margin-top: 1rem;
  color: #1e90ff; /* Azul */
}

a {
  color: #1e90ff; /* Azul */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>