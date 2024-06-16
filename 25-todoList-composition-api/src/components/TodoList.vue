<template>
  <section class="mt-4">
    <TodoListItem
      v-for="todoItem in todoList"
      :key="todoItem.id"
      :todo="todoItem"
      @delete-event="$emit('delete-event', $event)"
    />
    <div class="mt-2">
      <small>{{ todoLength }} adet veri var</small>
      <Summary :todoList="todoList" />
    </div>
  </section>
</template>

<script>
import Summary from "./Summary.vue";
import TodoListItem from "./TodoListItem.vue";
import { computed } from "vue";

export default {
  components: { TodoListItem, Summary },
  props: ["todoList"],
  setup(props) {
    const todoLength = computed(() => {
      return props.todoList.length;
    });
    return { todoLength };
  },
};
</script>
