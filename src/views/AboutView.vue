<template>
  <div class="about">
    
    <div class="container">
      <div class="row ">
        <div
          class="col-sm  text-center  shadow"
          v-for="(item, index) in items.products"
          :key="index"
          id="product-gap"
        >
          <div class="p-2 g-col-4">
            <h5 class="text-dark">{{item.title}}</h5></div
          >
          <div class="p-2 g-col-4">
            <img :src="item.thumbnail" id="img" class="rounded mx-auto d-block"
          /></div>
          <div class="p-2 g-col-4"> ${{ item.price }}</div>
          <span>
            <button type="button" class="btn btn-danger" @click="deleteData(item.id)">
              <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
            
            <!-- <button type="button"
              class="btn btn-success btn-block mb-4 rounded mx-auto d-block"
            >
              <router-link class="text-decoration-none text-white" :to="{name:'detail', params:{id: product.id}}">BUY</router-link>
             
            </button> -->
          </span>
        </div>
      </div>
    </div>
    <div class="p-2 g-col-4"><button><router-link class="text-decoration-none text-dark" to="/addData">Add Products </router-link> </button></div>
   
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["items"]),
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  methods:{
    ...mapActions(["deleteData",]),
  }
}
</script>
<style scoped>

#img {
  width: 150px;
  height: 100px;
}
</style>
