<template>
  <div>
    <span class="error" v-if="err">{{ err }}</span>
    <Suspense v-else>
      <template #default>
        <div>
          <Users />
          <hr />
          <Todos />
        </div>
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onErrorCaptured, ref } from "vue";
//! asenkron component tanımlamak
const Todos = defineAsyncComponent(() => {
  return import("./components/Todos.vue");
});
const Users = defineAsyncComponent(() => {
  return import("./components/Users.vue");
});
const err = ref(null);
//! asenkron komponentin içerisinde bir hata gerçekleişrse, hatayı yakalamak
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
</script>
