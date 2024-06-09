const app = Vue.createApp({
  data() {
    return {
      fullName: "Küpeli",
      fullName2: "bıyıklı",
    };
  },
  methods: {
    updateValue(e) {
      this.fullName = e.target.value;
    },
  },
}).mount("#app");
