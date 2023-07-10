<template>
  <div>
    <div class="col-xl-3 col-lg-4 col-md-6 justify-content-center colum">
            <div class="card productCard" v-for="manga in manga" style="width: 20rem" :key="manga.id">
                <div class="image">
                    <img :src=manga.image class="card-img-top" alt="product" loading="lazy">
                </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ manga.name }}</h5>
                        <p class="card-text">{{ manga.detail }}</p>
                        <p class="card-price">R{{ manga.price }}</p>
                        <div class="bttn">
                        <button class="btn text-center" id="addtocart" onclick='checkoutItemBtn(${JSON.stringify(item)})'>Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
  </div>
</template>

<script>
  export default {
    computed: {
    manga() {
      return this.$store.state.manga;
    },
  },
  mounted() {
    this.$store.dispatch("fetchManga");
  },
};
</script>

<style scoped>

</style>
