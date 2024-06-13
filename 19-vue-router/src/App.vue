<template>
  <div class="container">
    <div class="mb-2">
      <router-link class="nav-link" active-class="active" to="/"
        >Anasayfa</router-link
      >
      <router-link class="nav-link" active-class="active" to="/hakkimda"
        >Hakkimda</router-link
      >
      <router-link class="nav-link" active-class="active" to="/detay/123"
        >Detay</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style>
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid red;
  color: red;
  margin-top: 5px;
  display: inline-block;
}
.active {
  background-color: red;
  color: white;
}
</style>
