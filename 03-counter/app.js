const app = Vue.createApp({
  data() {
    return {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      counter4: 0,
    };
  },
  methods: {
    inc() {
      this.counter2++;
    },
    dec() {
      this.counter2--;
    },

    functionCounterResult1() {
      console.log("funksiyon functionCounterResult1 çalıştı");
      return this.counter1 > 5 ? "büyük " : " küçük";
    },
    functionCounterResult2() {
      console.log("funksiyon functionCounterResult2 çalıştı");

      return this.counter2 > 5 ? "büyük " : " küçük";
    },
  },
  computed: {
    computedCounterResult1() {
      console.log("computed computedCounterResult1 çalıştı");

      return this.counter1 > 5 ? "büyük " : " küçük";
    },

    computedCounterResult2() {
      console.log("computed computedCounterResult1 çalıştı");

      return this.counter2 > 5 ? "büyük " : " küçük";
    },
  },
  watch: {
    counter4(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
  },
}).mount("#app");
