import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(userData) {
      this.user = userData
      this.isAuthenticated = true
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    },
    register(userData) {
      // Lógica para registrar un nuevo usuario
      this.user = userData
      this.isAuthenticated = true
    },
  },
})