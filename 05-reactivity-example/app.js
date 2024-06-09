const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["elma", "armut", "kiraz", "çilek"],
      // filteredList: [],
    };
  },
  methods: {
    searchList() {
      // this.filteredList = this.itemList.filter((item) =>
      //   item.toLowerCase().includes(this.search.toLowerCase())
      // );
    },
  },
  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search.toLowerCase()));
    },
  },
}).mount("#app");
