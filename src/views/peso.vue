<template>
  <div class="peso">
    <h1>Zona de Pesaje</h1>
    <button @click="obtenerPeso">Obtener Peso</button>
    <h2 v-if="peso">Peso detectado: {{ peso }} kg</h2>

    <h1>Reconocimiento de Texto en Imagen</h1>
    <input type="file" accept="image/*" @change="handleImageUpload" />
    <button @click="procesarImagen">Procesar Imagen</button>
    <h2 v-if="textoReconocido">Texto reconocido: {{ textoReconocido }}</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      peso: null,
      imagen: null,
      textoReconocido: ''
    };
  },
  methods: {
    async obtenerPeso() {
      try {
        const response = await axios.get('http://localhost:8080/api/peso');
        this.peso = response.data.peso;
      } catch (error) {
        console.error('Error obteniendo el peso:', error);
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0] || null;
      this.imagen = file;
    },
    async procesarImagen() {
      if (!this.imagen) {
        alert('Por favor, sube una imagen antes de continuar.');
        return;
      }

      const formData = new FormData();
      formData.append('image', this.imagen);

      try {
        const response = await axios.post('http://localhost:8080/api/ocr/extract-text', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.textoReconocido = response.data.text;
      } catch (error) {
        console.error('Error procesando la imagen:', error);
        alert('Error procesando la imagen.');
      }
    }
  }
};
</script>

<style scoped>
.peso {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #1e90ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

button:hover {
  background-color: #1c86ee;
}

input[type="file"] {
  margin-bottom: 1rem;
}

h2 {
  margin-top: 1rem;
  color: #1e90ff;
}
</style>