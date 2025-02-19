<template>
  <div class="background">
    <div class="register">
      <h1>Registro de Usuario</h1>
      <form @submit.prevent="registerUser">
        <div>
          <label for="username">Nombre de Usuario:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <p>¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
    </div>
  </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Register',
    setup() {
      const username = ref('');
      const email = ref('');
      const password = ref('');
  
      const registerUser = () => {
        // Lógica para registrar al usuario
        console.log('Usuario registrado:', { username, email, password });
      };
  
      return {
        username,
        email,
        password,
        registerUser,
      };
    },
  };
  </script>
  
  <style scoped>


  .register {
    max-width: 600px;
    margin: auto;
    padding: 8em;
    border: 1px solid #ccc;
    border-radius: 5px;
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
    font-weight: bold; /* Aumenta el grosor de las letras de los inputs y botones */
  }
  
  h1, label {
    font-weight: bold; /* Aumenta el grosor de las letras del título */
    color: rgb(0, 0, 0);
  }
  </style>