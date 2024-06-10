<template>
  <li class="d-flex justify-content-between align-items-center">
    <span>{{ item.text }}</span>
    <button @click="$emit('delete-todo-item', item)" class="sm red">sil</button>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>
