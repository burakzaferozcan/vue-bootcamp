<template>
  <div>
    <ListSection />
    <AddSection />
  </div>
</template>

<script>
import AddSection from "./AddSection.vue";
import ListSection from "./ListSection.vue";
export default {
  components: { AddSection, ListSection },
};
</script>
