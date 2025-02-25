<!-- filepath: /home/jonatan/Escritorio/registro-usuario/src/views/inventario.vue -->
<template>
  <div id="root" class="inventario">
    <h1>Sistema POS - Asadero</h1>
    <input type="file" accept="image/*" @change="handleImageUpload" />
    <button @click="handleProcessImage">Obtener Peso</button>
    <h2 v-if="weight">Peso detectado: {{ weight }} kg</h2>
  </div>
</template>

<script>
export default {
  name: 'inventario',
  data() {
    return {
      image: null,
      weight: ""
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0] || null;
      this.image = file;
    },
    async handleProcessImage() {
      if (!this.image) {
        alert("Por favor, sube una imagen antes de continuar.");
        return;
      }

      const formData = new FormData();
      formData.append("image", this.image);

      try {
        const response = await fetch("http://localhost:5000/process-image", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        this.weight = data.weight;
      } catch (error) {
        console.error("Error procesando la imagen:", error);
      }
    }
  }
}
</script>

<style scoped>
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
</style>