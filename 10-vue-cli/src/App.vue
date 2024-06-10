<template>
  <div>
    <AppHeader />
    <div class="wrapper">
      <div class="container">
        <h3>bu benim ilk vue cli uygulamam</h3>
        <p>bugun component ve vue cli öğreneceğiz</p>
      </div>
      <CounterItem></CounterItem>
      <CounterItem />
    </div>
  </div>
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
export default {
  components: {
    CounterItem,
  },
};
</script>
<style>
.wrapper {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
