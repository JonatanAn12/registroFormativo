<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    <p>¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'pinia';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const store = useStore();
    const router = useRouter();

    const login = async () => {
      try {
        await store.login(email.value, password.value);
        router.push('/dashboard');
      } catch (error) {
        alert('Error al iniciar sesión: ' + error.message);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>