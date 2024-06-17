<template>
  <h3>{{ result }}</h3>
</template>

<script setup>
import { computed, watch } from "vue";
const props = defineProps({ counter: Number });
const result = computed(() => (props.counter % 2 === 0 ? "çift" : "tek"));
// ["odd-event"] emitleri dökümante etmek için kullanılır zorunlu değildir
const emit = defineEmits(["odd-event"]);

watch(result, (result) => {
  console.log(result);
  if (result === "tek") emit("odd-event", true);
});
</script>
