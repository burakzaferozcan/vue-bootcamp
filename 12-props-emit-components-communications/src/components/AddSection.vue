<template>
  <button @click="$emit('new-item', new Date().getTime())">setData</button>
</template>

<script>
export default {};
</script>
