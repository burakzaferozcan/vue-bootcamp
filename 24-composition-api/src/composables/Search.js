import { ref, watchEffect } from "vue";
// reactive effect (ref) reactive bir değişken tanımlamak için kullanılır

export default function () {
  //! watchEffect
  const searchText = ref("");
  const isTyping = ref(false);
  // watch(searchText, () => {
  //   if (searchText.value.length > 0) {
  //     isTyping.value = true;
  //     setTimeout(() => {
  //       isTyping.value = false;
  //     }, 2000);
  //   }
  // });
  watchEffect((onInvalidate) => {
    if (searchText.value.length > 0) {
      isTyping.value = true;
      const typing = setTimeout(() => {
        isTyping.value = false;
      }, 2000);
      onInvalidate(() => {
        clearTimeout(typing);
      });
    }
  });

  const searchText2 = ref("");
  const isTyping2 = ref(false);
  const stop = watchEffect((onInvalidate) => {
    if (searchText2.value.length > 0) {
      isTyping2.value = true;
      const typing = setTimeout(() => {
        isTyping2.value = false;
        stop();
      }, 2000);
      onInvalidate(() => {
        clearTimeout(typing);
      });
    }
  });
  //! watchEffect
  return { searchText, isTyping, searchText2, isTyping2 };
}
