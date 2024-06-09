const app = Vue.createApp({
  data() {
    return {
      title: "burak zafer ozcan",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate çalıştı");
  },
  created() {
    console.log("create çalıştı");
    setTimeout(() => {
      this.itemList = [1, 2, 5, 9, 8, 3, 5];
      setTimeout(() => {
        this.title = "bu yeni baslik";
      }, 3000);
    }, 2000);
  },
  beforeMount() {
    console.log("beforeMount çalıştı");
  },
  mounted() {
    //bir etikete erişilecek ise mounted'da erişilmeli çünkü dom daha oluşmamış oluyor
    console.log("mounted çalıştı");
  },
  beforeUpdate() {
    console.log("beforeUpdate çalıştı");
  },
  updated() {
    console.log("updated çalıştı");
  },
  beforeUnmount() {
    console.log("beforeUnmount çalıştı");
  },
  unmount() {
    console.log("unmount çalıştı");
  },
});
app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 7000);
