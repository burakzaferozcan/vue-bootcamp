import { ref } from "vue";
// reactive effect (ref) reactive bir değişken tanımlamak için kullanılır

export default function () {
  const show = ref(false);
  const show2 = ref(false);
  const toggleIt = () => {
    show2.value = !show2.value;
  };
  return { show, show2, toggleIt };
}
