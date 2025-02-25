<template>
  <section id="estadisticas">
    <div class="estadisticas">
      <h2>Estadísticas de Peso de los Alimentos</h2>
      <Charts />
    </div>
  </section>
</template>

<script>
import Charts from '../components/charts.vue'

export default {
  name: 'estadistica',
  components: {
    Charts
  }
}
</script>

<style scoped>
#estadisticas {
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

#estadisticas .estadisticas {
  margin: 0 40px;
  width: 100%;
}
</style>