<template>
  <div>
    <div class="p-2 flex gap-4 xxxx">
      <BookmarkListItem
        v-for="item in items"
        :key="item.id"
        :item="item"
      ></BookmarkListItem>
    </div>
  </div>
</template>

<script>
import BookmarkListItem from "./BookmarkListItem.vue";
export default {
  components: { BookmarkListItem },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
<style>
.xxxx {
  flex-wrap: wrap;
  justify-content: start;
}
</style>
