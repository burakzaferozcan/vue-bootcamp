<template>
  <div>
    <h1>home</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam
      alias cumque nisi, odio provident molestias necessitatibus enim nemo
      quisquam quaerat eaque laborum nostrum eligendi omnis fugit mollitia iure
      rerum.
    </p>
    <input type="text" @keydown.enter="goToDetails" />
  </div>
</template>

<script>
export default {
  methods: {
    goToDetails(e) {
      //! birinci kullanım
      // this.$router.push(`/detay/${e.target.value}`);
      //! ikinci kullanım

      this.$router.push({
        name: "DetailPage",
        params: {
          userID: e.target.value,
        },
      });
    },
  },
};
</script>
