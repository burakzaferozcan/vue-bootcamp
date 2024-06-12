<template>
  <div>
    <button @click="changeName">new wood item & change fullName</button>
  </div>
</template>
<script>
export default {
  methods: {
    changeName() {
      //! mutations kullanımı asenkron çalışmaz asenkron olarak çalışmaz
      //! bir datayı asenkron set etmek için actions kullanılır
      //! mutations commit edilir actions dispatch edilir
      const userData = {
        id: this.$store.state.itemList.length + 1,
        title: "Raf",
        type: "mobilya",
      };
      this.$store.commit("newItem", userData);
      const newFullName = "new fullname : " + new Date().toLocaleTimeString();
      this.$store.commit("changeFullName", newFullName);
      // this.$store.state.itemList.push({
      //   id: this.$store.state.itemList.length + 1,
      //   title: "Raf",
      //   type: "mobilya",
      // });
      // this.$store.state.fullName = new Date().toLocaleTimeString();

      //!  actions dispatch edilir mutations commit edilir
      this.$store.dispatch("newItem", userData);
    },
  },
};
</script>
