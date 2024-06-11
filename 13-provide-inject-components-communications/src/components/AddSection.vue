<template>
  <button @click="addData(new Date().getTime())">setData</button>
</template>

<script>
export default {
  inject: ["addData"],
};
</script>
