import { ref, onMounted } from "vue";

export default function () {
  const title = ref("başlık");
  const counter = ref(0);
  const inc = () => {
    counter.value++;
  };
  const alerMe = (info) => {
    console.log(info);
  };
  onMounted(() => {
    console.log("mounted esnasında yapılacaklar burada");
  });

  return { title, counter, alerMe, inc };
}
