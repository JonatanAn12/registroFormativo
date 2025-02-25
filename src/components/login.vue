<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p>¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
    <p><router-link to="/forgot-password">¿Olvidaste tu contraseña?</router-link></p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const userStore = useUserStore();
    const router = useRouter();

    const login = async () => {
      try {
        await userStore.login(email.value, password.value);
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
  padding: 2em;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco semitransparente */
  backdrop-filter: blur(10px); /* Aplica el efecto difuminado */
}

input, button {
  border-radius: 4px;
  border: unset;  /*para que no se vean los bordes*/
  padding: 15px 30px;
  font-size: larger;
  margin-bottom: 1em;
  width: 100%;
  display: block;
  font-weight: bold; /* Aumenta el grosor de las letras de los inputs y botones */
}
</style>