<template>
  <div class="background">
  <div class="login">
    <h1>Iniciar Sesión</h1>
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
    <p><router-link to="forgotPassword">¿Olvidaste tu contraseña?</router-link></p>
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
  },
},
};
</script>

<style scoped>


.login {
  margin: auto;
  padding: 8em;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-color:  rgba(202, 179, 179, 0.5); /* Fondo blanco semitransparente */
  backdrop-filter: blur(1px); /* Efecto de desenfoque */
}

input,button {
  border-radius: 4px;
  border: unset;  /*para que no se vean los bordes*/
  padding: 15px 30px;
  font-size: larger;
  margin-bottom: 1em;
  width: 100%;
  display: block;
  font-weight: bold;
}

h1, label {
  font-weight: bold; /* Aumenta el grosor de las letras del título */
  color: rgb(0, 0, 0);
}
</style>
@Column(name = "email",
 nullable = false,
 unique = true
 )
private String email;