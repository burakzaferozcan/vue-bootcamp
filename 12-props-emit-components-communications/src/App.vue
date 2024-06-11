<template>
  <div class="container">
    <UserSection :userList="userList" @new-item="userList.push($event)" />
  </div>
</template>

<script>
import UserSection from "./components/UserSection.vue";
export default {
  components: { UserSection },
  data() {
    return {
      userList: ["burak", "zafer", "özcan"],
    };
  },
};
</script>
