<template>
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
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      // Lógica para registrar al usuario
      console.log('Usuario registrado:', this.username, this.email);
      // Aquí se puede agregar la llamada a la API para registrar al usuario
    }
  }
}
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.register h1 {
  text-align: center;
}
.register form {
  display: flex;
  flex-direction: column;
}
.register label {
  margin-bottom: 5px;
}
.register input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.register button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.register button:hover {
  background-color: #218838;
}
</style>