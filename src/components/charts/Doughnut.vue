<template>
    <div
      class="chart-container"
      style="width:300px; height:300px; "
    >
      <canvas id="myChartDoughnut" class="chart"></canvas>
    </div>
  </template>

    <script >
  import Chart from "chart.js/auto";
  export default {
    mounted() {
      const ctx = document.getElementById("myChartDoughnut");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Coding", "Eat", "Sleeping", "Meditation", "The fight against evil"],
          datasets: [
            {
      
              data: [60, 20, 10, 5, 5,],
              backgroundColor: [
                "rgba(54, 162, 235)",
                "rgba(255,128,0)",
                "rgba(255,0,0)",
                "rgba((47,79,79)",
                "rgba(178,34,34)",
              
              ],
              borderWidth: 1,
            },
           
          ],
        },
        options: {
          plugins: {
      datalabels: {
        formatter: (value) => {
          return value + '%';
        },
      },
    },
          
        },
      });
      myChart;
    },
  };
  </script>
