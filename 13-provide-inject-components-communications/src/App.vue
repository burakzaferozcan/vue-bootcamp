<template>
  <div class="container">
    <UserSection />
  </div>
</template>

<script>
import UserSection from "./components/UserSection.vue";
export default {
  components: { UserSection },
  data() {
    return {
      provideData: ["burak", "zafer", "özcan"],
    };
  },
  methods: {
    addData(data) {
      this.provideData.push(data);
    },
  },
  provide() {
    return {
      provideData: this.provideData,
      addData: this.addData,
    };
  },
};
</script>
