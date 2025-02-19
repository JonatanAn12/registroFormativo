<!-- filepath: /home/jonatan/Escritorio/registro-usuario/src/views/ForgotPassword.vue -->
<template>
    <div class="background">
  <div class="forgot-password">
    <h1>Recuperar Contraseña</h1>
    <form @submit.prevent="recoverPassword">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    recoverPassword() {
      // Lógica para recuperar la contraseña
      console.log('Email:', this.email);
    }
  }
};
</script>

<style scoped>
.forgot-password {
   margin: auto;
 padding: 8em;
 border: 1px solid #ccc;
 border-radius: 5px;
 background-size: cover;
 background-position: center;
 background-color:  rgba(202, 179, 179, 0.5); /* Fondo blanco semitransparente */
 backdrop-filter: blur(1px); /* Efecto de desenfoque */
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

h1, label {
    font-weight: bold; /* Aumenta el grosor de las letras del título */
    color: rgb(0, 0, 0);
  }
</style>