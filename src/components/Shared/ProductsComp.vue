<template>
  <div class="container">
    <div class="row">
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from "../ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.container {
  margin-top: 3rem;
}
</style>
>
