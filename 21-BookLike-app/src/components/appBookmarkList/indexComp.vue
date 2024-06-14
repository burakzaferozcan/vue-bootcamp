<template>
  <div>
    <div class="p-2 flex gap-4 xxxx">
      <BookmarkListItem v-for="i in 10" :key="i"></BookmarkListItem>
    </div>
  </div>
</template>

<script>
import BookmarkListItem from "./BookmarkListItem.vue";
export default {
  components: { BookmarkListItem },
};
</script>
<style>
.xxxx {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
