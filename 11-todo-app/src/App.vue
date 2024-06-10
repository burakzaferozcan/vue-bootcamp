<template>
  <div class="container">
    <h3 class="text-center text-blue">Todo App</h3>
    <hr class="my-2" />
    <AddSection @add-todo="addNewTodo" />
    <TodoList :todoList="todoList" @delete-todo-item="deleteItem" />
    <ResultBar :todoList="todoList" />
  </div>
</template>

<script>
import AddSection from "./components/AddSection.vue";
import ResultBar from "./components/ResultBar.vue";
import TodoList from "./components/TodoList.vue";
export default {
  components: { TodoList, ResultBar, AddSection },
  data() {
    return {
      todoList: [
        {
          id: 1,
          text: "bootcamp #2",
        },
        {
          id: 2,
          text: "bootcamp #2.1",
        },
        {
          id: 3,
          text: "bootcamp #2.2",
        },
        {
          id: 4,
          text: "bootcamp #2.3",
        },
        {
          id: 5,
          text: "bootcamp #2.4",
        },
      ],
    };
  },
  methods: {
    deleteItem(todoItem) {
      this.todoList = this.todoList.filter((item) => item !== todoItem);
    },
    addNewTodo(e) {
      this.todoList.unshift({
        id: this.todoList.length + 1,
        text: e,
      });
    },
  },
};
</script>
