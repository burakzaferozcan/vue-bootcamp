<template>
  <div>
    <h1>asd</h1>
    <p>{{ $store.state.mainName }}</p>
    <p>{{ $store.state.contact }}</p>

    <p>{{ $store.state.contact.contactName }}</p>
    <p>{{ $store.getters["contact/contactName"] }}</p>
    <p>{{ contactName }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    console.log(this.$store.getters["contact/contactName"]);
  },
  computed: {
    ...mapGetters({ contactName: "contact/contactName" }),
  },
};
</script>
