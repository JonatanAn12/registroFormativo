<template>
  <section id="contenido2">
    <div class="contenido2">
      <div class="tituloa">
        <p class="titulo-seccion">Where did the potato originate?</p>
        <h2>THE PAPA IN THE <span>TOLIMA</span> AROSE...</h2>
        <br>
        <p>The history of the potato dates back to 3,400 to 2,200 B.C., when the indigenous people of the Andean region discovered it and began cultivating its plant. After a few years, with the development of these communities, it became popular and its production increased as a food source. Little by little, they discovered that there were more varieties of potatoes, very different from the "original" ones, so they expanded their cultivation and, in turn, their consumption, becoming their main source of sustenance.</p>
        </div>
          <br>
          <h6>A continuación le mostraremos imagenes</h6>
          
    <br>  
    </div>
  </section>
  </template>
  
  <script>
  export default {
    name: 'menu',
  };
  </script>
  <style scoped>
  #contenido2 {
    background-color: aliceblue;
    max-width: 1100px;
    margin: 40px auto;
    padding: 100px 15px;
    color: #111135;
    display: flex;
    justify-content: center;
    transition: .5s;
  }
  
  #contenido2 .contenido2 {
    margin: 0 40px;
  }
  
  #contenido2 .contenido2 .titulo-seccion {
    font-size: 22px;
    text-transform: uppercase;
    color: #6e2cf3;
    text-decoration: underline;
    text-decoration-color: #d3d3d3;
    text-decoration-thickness: 5px;
  }
  
  #contenido2 .contenido2 h2 {
    font-size: 34px;
    font-weight: bold;
    margin: 20px 0;
    letter-spacing: 2px;
  }
  
  #contenido2 .contenido2 h2 span {
    color: #1bd624;
  }
  
  #contenido2 .contenido2 span  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }
  
  #contenido2 .contenido2 .tituloa p {
    font-size: 22px;
    line-height: 25px;
    color: #565656;
    margin-bottom: 15px;
  }

  #contenido2:hover {
    box-shadow: 5px 5px 10px #1beb00fb, -5px -5px 10px #f0f0f0;
    
    }
  </style>