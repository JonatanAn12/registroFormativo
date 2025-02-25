<!-- filepath: /home/jonatan/Escritorio/registro-usuario/src/views/Administracion.vue -->
<template>
  <section id="administracion">
    <div class="administracion">
      <h2>Administración</h2>
      <p>Contenido específico de la administración.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Administracion'
}
</script>

<style scoped>
#administracion {
  background-color: #f9f9f9;
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  color: #111135;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .5s;
}

#administracion .administracion {
  margin: 0 40px;
  width: 100%;
}
</style>