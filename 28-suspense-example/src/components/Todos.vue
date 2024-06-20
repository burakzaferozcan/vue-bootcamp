<template>
  <div>
    <h1>todos</h1>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <!-- <span v-else>loading...</span> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
const todoList = ref([]);
// const isLoad = ref(false);
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    todoList.value = json;
    // isLoad.value = true;
  });
</script>
