<template>
  <div>
    <div class="text-green-300">Tamamlanmışlar {{ completed.length }}</div>
    <div class="text-red-300">Tamamlanmamışlar {{ uncompleted.length }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["todoList"],
  setup(props) {
    const completed = computed(() => props.todoList.filter((i) => i.completed));
    const uncompleted = computed(() =>
      props.todoList.filter((i) => !i.completed)
    );
    return { completed, uncompleted };
  },
};
</script>
