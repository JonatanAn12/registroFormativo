<!-- filepath: /home/jonatan/Escritorio/registro-usuario/src/views/ObjectWeight.vue -->
<template>
    <div class="object-weight">
      <h1>Reconocimiento de Texto en Imagen</h1>
      <input type="file" accept="image/*" @change="handleImageUpload" />
      <button @click="procesarImagen">Procesar Imagen</button>
      <h2 v-if="textoReconocido">Texto reconocido: {{ textoReconocido }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imagen: null,
        textoReconocido: ''
      };
    },
    methods: {
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
        formData.append('imagen', this.imagen);
  
        try {
          const response = await fetch('http://localhost:8080/api/imagen', {
            method: 'POST',
            body: formData
          });
          const data = await response.json();
          this.textoReconocido = data.texto;
        } catch (error) {
          console.error('Error procesando la imagen:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .object-weight {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  
  input[type="file"] {
    margin-bottom: 1rem;
  }
  
  button {
    padding: 0.75rem 1.5rem;
    background-color: #1e90ff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #1c86ee;
  }
  
  h2 {
    margin-top: 1rem;
    color: #1e90ff;
  }
  </style>