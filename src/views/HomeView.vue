<template>
  <div>
  <div class="container ">
    <p class="text-muted">Home/Dashboard</p>
   
    <div class="row mb-4 bg-light static-top mb-5 shadow-lg ">
      <div class="col-md-6 mb-5 mt-3 ">
        <h4>Daily Sales</h4>
        <h3 class="text-end">
          <font-awesome-icon icon="fa-solid fa-arrow-up" /> $120
        </h3>
        <p class="small text-muted text-end">Todays Income</p>
        <div
          class="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-info" style="width: 85%">85%</div>
        </div>
      </div>

      <div class="col-md-6 mb-5 mt-3">
        <h4>Weekly Sales</h4>
        <h3 class="text-end">
          <font-awesome-icon icon="fa-solid fa-arrow-up" /> $5,000
        </h3>
        <p class="small text-muted text-end">Todays Income</p>
        <div
          class="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-warning" style="width: 55%">55%</div>
        </div>
      </div>
    </div>
  
   
  </div>
  <div class="bg-light static-top mb-5 shadow-lg">
    <h2 class="text-center mb-4">sales analysis</h2>
      <Bar/>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

import Bar from "@/components/charts/Bar.vue";
import Doughnut from "@/components/charts/Doughnut.vue";
import LineChart from "@/components/charts/LineChart.vue";
import Radar from "@/components/charts/Radar.vue";

export default {
  name: "HomeView",
  components: {
    Bar,
    Doughnut,
    LineChart,
    Radar,
  },
};
</script>
<style scoped>
</style>
