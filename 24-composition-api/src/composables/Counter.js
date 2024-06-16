import { computed, ref, watch } from "vue";
// reactive effect (ref) reactive bir değişken tanımlamak için kullanılır

export default function () {
  const counter = ref(0);
  const oddOrEven = computed(() => (counter.value % 2 === 0 ? "çift" : "tek"));
  watch([counter, oddOrEven], (newVal, oldVal) => {
    console.log(oldVal, "=>", newVal);
  });
  return { counter, oddOrEven };
}
