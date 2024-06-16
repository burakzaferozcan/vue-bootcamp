<template>
  <div class="w-screen h-screen bg-gray-400 pt-10">
    <div
      class="bg-gray-700 rounded-md shadow-md text-white min-w-[430px] w-1/2 mx-auto p-3"
    >
      <h3 class="text-center text-2xl">TodoList</h3>
      <AddSection :AddTodo="AddTodo" />
      <TodoList @delete-event="deleteItem" :todoList="todoList" />
    </div>
  </div>
</template>

<script>
import AddSection from "./components/AddSection.vue";
import TodoList from "./components/TodoList.vue";
import { ref } from "vue";

export default {
  components: { AddSection, TodoList },
  setup() {
    const todoList = ref([]);
    const AddTodo = (todoText) => {
      todoList.value.push({
        title: todoText,
        completed: false,
        id: new Date().getTime(),
      });
      console.log(todoList.value);
    };
    const deleteItem = (todo) => {
      todoList.value = todoList.value.filter((t) => t.id !== todo.id);
    };
    return { todoList, AddTodo, deleteItem };
  },
};
</script>
