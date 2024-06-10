<template>
  <ul v-if="todoList.length > 0">
    <TodoListItem
      @delete-todo-item="$emit('delete-todo-item', $event)"
      :item="todoItem"
      v-for="todoItem in todoList"
      :key="todoItem.id"
    />
  </ul>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  props: ["todoList"],

  components: { TodoListItem },
};
</script>
