<template>
  <div class="home">
    <h1>Bienvenido a la Aplicación de Autenticación de Usuarios</h1>
    <p>Esta es la página de inicio de la aplicación. Aquí puedes encontrar información general y enlaces a las funcionalidades de inicio de sesión y registro.</p>
    <router-link to="/login">Iniciar Sesión</router-link>
    <router-link to="/register">Registrarse</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>