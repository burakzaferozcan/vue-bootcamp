<template>
  <ul>
    <li v-for="user in provideData" :key="user">
      {{ user }}
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["provideData"],
};
</script>
