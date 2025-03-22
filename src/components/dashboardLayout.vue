<template>
  <div :class="['dashboard-layout', { 'dark-mode': isDarkMode }]">
    <div class="sidebar" :class="{ open: isOpen }">
      <div class="logo-details">
        <div class="logo_name">SmartPay</div>
        <i class='bx' :class="isOpen ? 'bx-menu-alt-right bx-md' : 'bx-menu bx-md'" id="btn" @click="toggleSidebar"></i>
      </div>
      <ul class="nav-list">
        <li>
          <i class='bx bx-search bx-md' @click="toggleSidebar"></i>
          <input type="text" placeholder="Buscar...">
          <span class="tooltip">Buscar</span>
        </li>
        <li>
          <router-link to="/dashboard">
            <i class='bx bx-grid-alt bx-md'></i>
            <span class="links_name">Dashboard</span>
          </router-link>
          <span class="tooltip">Dashboard</span>
        </li>
        <li>
          <router-link to="/dashboard/inventario">
            <i class='bx bx-folder bx-md'></i>
            <span class="links_name">Inventario</span>
          </router-link>
          <span class="tooltip">Inventario</span>
        </li>
        <li>
          <router-link to="/dashboard/menu">
            <i class='bx bx-menu bx-md'></i>
            <span class="links_name">Menu</span>
          </router-link>
          <span class="tooltip">Menu</span>
        </li>
        <li>
          <router-link to="/dashboard/peso">
            <i class='bx bx-package bx-md'></i>
            <span class="links_name">Zona-peso</span>
          </router-link>
          <span class="tooltip">Zona-peso</span>
        </li>
        <li>
          <router-link to="/dashboard/estadistica">
            <i class='bx bx-chart bx-md'></i>
            <span class="links_name">Estadísticas</span>
          </router-link>
          <span class="tooltip">Estadísticas</span>
        </li>
        <li>
          <router-link to="/dashboard/administracion">
            <i class='bx bx-cog bx-md'></i>
            <span class="links_name">Administración</span>
          </router-link>
          <span class="tooltip">Administración</span>
        </li>
      </ul>
    </div>
    <nav class="navbar">
      <div class="navbar-content">
        <div class="profile-details">
          <img src="../assets/img/morichal.png" alt="profileImg">
          <div class="name_job">
            <li>
              <router-link to="/dashboard/user">
            <button class="name"><i class='bx bx-user bx-md' ></i></button>
              </router-link>
          </li>
            <div class="job"></div>
          </div>
        </div>
        <div class="navbar-buttons">
          <button @click="toggleDarkMode" class="mode-btn">
            <i :class="isDarkMode ? 'bx bx-sun bx-md' : 'bx bx-moon bx-md'"></i>
          </button>
          <button @click="logout" class="logout-btn"><i class='bx bxs-door-open bx-md'></i></button>
        </div>
      </div>
    </nav>
    <div class="home-section">
      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      isOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    logout() {
      // Lógica para cerrar sesión
      console.log('Cerrar sesión');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}



.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 78px;
  background: #000000;
  padding: 6px 14px;
  z-index: 1001; /* Asegura que el sidebar esté por encima del navbar */
  transition: all 0.5s ease;
}

.sidebar.open {
  width: 250px;
}

.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.sidebar .logo-details .logo_name {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details,
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}

.sidebar .logo-details #btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
  text-align: center;
}

.sidebar i {
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}

.sidebar .nav-list {
  margin-top: 20px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 8px;
}

.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}

.sidebar input {
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: #1d1b31;
}

.sidebar.open input {
  padding: 0 20px 0 50px;
  width: 100%;
}

.sidebar .bx-search {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  background: #1d1b31;
  color: #fff;
}

.sidebar .bx-search:hover {
  background: #fff;
  color: #11101D;
}

.sidebar.open .bx-search:hover {
  background: #1d1b31;
  color: #fff;
}

.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}

.sidebar li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #11101D;
}

.sidebar li a:hover {
  background: #fff;
}

.sidebar li a .links_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}

.sidebar.open li a .links_name {
  opacity: 1;
  pointer-events: auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
  transition: all 0.5s ease;
  color: #11101D;
}

.sidebar li .tooltip {
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}

.sidebar li:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}

.sidebar.open li .tooltip {
  display: none;
}

.sidebar li.profile {
  position: fixed;
  height: 60px;
  width: 78px;
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: #1d1b31;
  transition: all 0.5s ease;
  overflow: hidden;
}

.sidebar.open li.profile {
  width: 250px;
}

.sidebar li .profile-details {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.sidebar li img {
  height: 45px;
  width: 45px;
  object-fit: contain;
  border-radius: 6px;
  margin-right: 10px;
}

.sidebar li.profile .name,
.sidebar li.profile .job {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
}

.sidebar li.profile .job {
  font-size: 12px;
}

.sidebar .profile #log_out {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #1d1b31;
  width: 100%;
  height: 60px;
  line-height: 60px;
  transition: all 0.5s ease;
}

.sidebar.open .profile #log_out {
  width: 50px;
  background: none;
}

.navbar {
  background-color: black;
  color: white;
  padding: 0.2em;
  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed; /* Hace que el navbar sea estático */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Asegura que el navbar esté por debajo del sidebar */
}

.navbar-content {
  display: flex;
  align-items: center;
  
}

.navbar-buttons {
  display: flex;
  align-items: center;
}

.navbar-buttons button {
  margin-left: 6px; /* Añade un espacio de 6px entre los botones */
  background-color: #e90c0c; /* Color combinado */
  border: none;
  border-radius: 50%; /* Hace los botones redondos */
  color: white;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navbar-buttons button:hover {
  background-color: #e64242a4; /* Color al pasar el ratón */
}


.profile-details {
  display: flex;
  align-items: center;
  margin-right: 10px; /* Ajusta el margen derecho */
}

.profile-details img {
  height: 45px;
  width: 45px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 10px;
}

.name_job {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; /* Ajusta el margen inferior */
}

.name {
  font-size: 15px;
  font-weight: 400;
}

.job {
  font-size: 12px;
}

.logout-btn {
  background-color: #ff4b5c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 2px; /* Ajusta el margen inferior */
}


.logout-btn:hover {
  background-color: #ff1f3a;
}

.home-section {
  position: relative;
  background: #ffffff;
  min-height: 100vh;
  top: 60px; /* Ajusta para que no se superponga con el navbar */
  left: 70px;
  width: calc(100% - 129px);
  transition: all 0.5s ease;
}

.sidebar.open ~ .home-section {
  left: 250px;
  width: calc(100% - 250px);
}

.home-section .text {
  display: inline-block;
  color: #11101D;
  font-size: 25px;
  font-weight: 500;
  margin: 18px;
}

.content {
  padding: 1em;
}
</style>