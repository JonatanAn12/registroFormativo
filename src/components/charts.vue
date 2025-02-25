<template>
    <div>
      <BarChart :chartData="barChartData" :options="chartOptions" />
      <PieChart :chartData="pieChartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Bar, Pie } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale)
  
  export default {
    name: 'Charts',
    components: {
      BarChart: Bar,
      PieChart: Pie
    },
    data() {
      return {
        barChartData: {
          labels: ['Alimento 1', 'Alimento 2', 'Alimento 3', 'Alimento 4'],
          datasets: [
            {
              label: 'Peso de los alimentos',
              backgroundColor: '#42A5F5',
              data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100))
            }
          ]
        },
        pieChartData: {
          labels: ['Alimento 1', 'Alimento 2', 'Alimento 3', 'Alimento 4'],
          datasets: [
            {
              label: 'Peso de los alimentos',
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100))
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .chart-container {
    position: relative;
    margin: auto;
    height: 400px;
    width: 600px;
  }
  </style>