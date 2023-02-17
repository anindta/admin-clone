<template>
  <div class="about">
    <div class="container overflow-hidden">
      <p class="text-muted">Products</p>
  <div class="row gy-5">
    <div class="col-6" v-for="(item, index) in items.products"
          :key="index">
      <div class="p-3 bg-white shadow"> <h5 class="text-dark">{{item.title}}</h5><br>
        <img :src="item.thumbnail" id="img" class="rounded mx-auto d-block"
          /> <br>
          <p>${{ item.price }}</p>
          <span>
            <button type="button" class="btn btn-danger" @click="deleteData(item.id)">
              <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
          </span></div>
          
    </div>
   
  </div>
</div>
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
  width: 250px;
  height: 200px;
}
</style>
