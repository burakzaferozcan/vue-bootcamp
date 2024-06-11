<template>
  <div>
    <ListSection :userList="userList" />
    <AddSection @new-item="$emit('new-item', $event)" />
  </div>
</template>

<script>
import AddSection from "./AddSection.vue";
import ListSection from "./ListSection.vue";
export default {
  components: { AddSection, ListSection },

  props: ["userList"],
};
</script>
