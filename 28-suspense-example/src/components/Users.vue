<template>
  <div>
    <h1>users</h1>
    <ul>
      <li v-for="user in userList" :key="user.id">{{ user.name }}</li>
    </ul>
    <!-- <span v-else>loading</span> -->
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const userList = ref([]);
// let isLoad = ref(false);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    userList.value = json;

    // isLoad.value = ref(true);
  });
</script>
