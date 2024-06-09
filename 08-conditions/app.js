const app = Vue.createApp({
  data() {
    return {
      showContainer: true,
      counter: 0,
      bgcolor: "",
    };
  },
  computed: {
    counterClass() {
      if (this.counter > 0) {
        return "bg-success ";
      } else if (this.counter === 0) {
        return "bg-primary";
      } else {
        return "bg-danger";
      }
    },
  },
}).mount("#app");
