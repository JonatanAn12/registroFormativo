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
      textoReconocido: '' // Aquí se almacena el texto extraído de la imagen
    };
  },
  methods: {
    async obtenerPeso() {
      if (!this.textoReconocido || this.textoReconocido.trim() === '') {
        alert('Por favor, procesa una imagen antes de obtener el peso.');
        return;
      }

      try {
        // Enviar el texto extraído como parámetro de consulta
        const response = await axios.post('http://localhost:8080/api/peso', null, {
          params: {
            texto: this.textoReconocido // Enviar el texto como parámetro de consulta
          }
        });
        this.peso = response.data.peso; // Recibir el peso desde el backend
        alert('Peso obtenido correctamente: ' + this.peso + ' kg');
      } catch (error) {
        console.error('Error obteniendo el peso:', error);
        alert('Ocurrió un error al obtener el peso. Por favor, intenta nuevamente.');
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0] || null;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Ajustar la resolución (por ejemplo, 1024x1024)
            canvas.width = 1024;
            canvas.height = 1024;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Convertir la imagen procesada a un archivo Blob
            canvas.toBlob((blob) => {
              this.imagen = new File([blob], file.name, { type: file.type });
            }, file.type);
          };
        };
        reader.readAsDataURL(file);
      }
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
        this.textoReconocido = response.data.text; // Guardar el texto extraído
        alert('Texto procesado correctamente: ' + this.textoReconocido);
      } catch (error) {
        console.error('Error procesando la imagen:', error);
        alert('Ocurrió un error al procesar la imagen. Por favor, intenta nuevamente.');
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