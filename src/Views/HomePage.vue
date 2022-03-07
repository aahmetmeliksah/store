<template>
  <div class="container">
    <HeroComp />
    <ProductsComp />
  </div>
</template>

<script>
import HeroComp from "../components/HeroComp.vue";
import ProductsComp from "../components/Shared/ProductsComp.vue";
export default {
  components: {
    HeroComp,
    ProductsComp,
  },
};
</script>
