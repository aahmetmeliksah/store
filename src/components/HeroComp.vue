<template>
  <div class="hero">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="hero-content">
            <h1 class="hero-title">Vue Store</h1>
            <p>
              This is my VueJS, NodeJS fullstack developer bootcamp capstone
              project. The bootcamp is launched within efforts of Patika.dev and
              Logo Cyber Security...
            </p>
            <div class="hero-btn mt-5">
              <button class="btn custom-btn btn-info mr-4">Explore</button>
              <button class="btn custom-btn btn-outline-secondary">
                Products
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="graphic">
            <img src="/img/svg/graphic.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComp",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hero {
  padding-top: 7rem;
  width: 100%;
  height: 500px;
  text-align: left;
}
</style>
