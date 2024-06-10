<template>
  <small
    v-if="todoList.length > 0"
    class="mt-2 d-flex justify-content-end green"
    >{{ todoList.length }} adet todo var
  </small>
  <span v-else class="text-red d-flex justify-content-center align-items-center"
    >hiç todo yok lütfen ekleyiniz</span
  >
</template>

<script>
export default {
  props: ["todoList"],
};
</script>
