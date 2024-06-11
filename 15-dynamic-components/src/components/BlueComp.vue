<template>
  <div>
    <h3 class="bg-blue text-white">Blue Component</h3>
    <input type="text" />
  </div>
</template>

<script>
export default {
  //?  keep-alive ile gelen 2 yeni hook
  activated() {
    console.log("blue activated");
  },
  deactivated() {
    console.log("blue deactivated");
  },
};
</script>
