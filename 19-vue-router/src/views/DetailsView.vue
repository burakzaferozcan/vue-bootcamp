<template>
  <div>
    <p>details</p>
    <h1>param : userID={{ $route.params.userID }}</h1>
    <h1>query : {{ $route.query }}</h1>
    <button class="default" @click="goBack">geri dön</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
  methods: {
    goBack() {
      //   this.$router.go(-1);
      this.$router.push("/");
    },
  },
};
</script>
