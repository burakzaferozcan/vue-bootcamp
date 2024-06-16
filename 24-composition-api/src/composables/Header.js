import { computed, ref } from "vue";
// reactive effect (ref) reactive bir değişken tanımlamak için kullanılır

export default function () {
  const title2 = "bu bir setup başlık";
  const title3 = ref("bu bir reactive setup başlık");
  const charLength = computed(() => {
    return title3.value.length + " adet karakter var";
  });
  return { title2, title3, charLength };
}
