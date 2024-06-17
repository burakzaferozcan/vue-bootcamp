<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title" />
    <button @click="inc">{{ counter }}</button>
    <hr />
    <OddOrEven :counter="counter" @odd-event="alerMe"></OddOrEven>
    <hr />
    <h1>user app</h1>
    <div>
      <input type="text" v-model="state.personal.name" />
      {{ state.personal.name }}
      <input type="text" v-model="state.personal.lname" />
      {{ state.personal.lname }}
    </div>
    {{ state.personal }}
  </div>
</template>

<script setup>
import OddOrEven from "./components/OddOrEven.vue";
import Utils from "./composables/Utils.js";
import { ref, reactive, watch } from "vue";

//! composable kullanımı
const { title, counter, alerMe, inc } = Utils();

//! userApp
//? reactive içerisine object almak zorunda
const state = reactive({
  personal: {
    name: null,
    lname: null,
  },
});
console.log(state);
console.log("personal name => ", state.personal.name);
console.log("personal last name => ", state.personal.lname);
//! reactive bir state'i bu şekilde değişkine atayara izleyebiliyoruz
const obj = () => JSON.parse(JSON.stringify(state.personal));
watch(obj, (newPers, oldPers) => {
  console.log(oldPers, " => ", newPers);
});
//? aynı zamanda değişkene atamadan da izleyebiliriz
// watch(()=>JSON.parse(JSON.stringify(state.personal)), (newPers, oldPers) => {
//   console.log(oldPers, " => ", newPers);
// });
</script>
