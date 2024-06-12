<template>
  <div>
    <li v-for="woodItem in woodItems" :key="woodItem">
      {{ woodItem }}
    </li>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    console.log("wood items : ", this.woodItems);
    console.log("active user : ", this.activeUser);
  },
  computed: {
    //! 1. kullanim
    // ...mapGetters(["woodItems", "activeUser"]),
    //! 2. kullanim
    ...mapGetters({
      activeUser: "activeUser",
      woodItems: "woodItems",
    }),
  },
};
</script>
