const app = Vue.createApp({
  data() {
    return {
      showBorder: false,
      redBg: false,
      blueBg: false,
      greenBg: false,
      boxClass: "border",
      bgcolor: "",
    };
  },
  computed: {
    boxClasses() {
      return {
        border: this.showBorder,
        red: this.redBg,
        blue: this.blueBg,
        green: this.greenBg,
      };
    },
  },
}).mount("#app");
