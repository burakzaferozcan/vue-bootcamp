<template>
  <div class="container">
    <ul style="border: 1px solid white">
      <li>
        <h3>{{ title1 }}</h3>
        <input type="text" v-model="title1" />
      </li>
      <li>
        <h3>{{ title2 }}</h3>
        <input type="text" v-model="title2" />
      </li>
      <li>
        <p>{{ charLength }}</p>
        <h3>{{ title3 }}</h3>
        <input type="text" v-model="title3" />
      </li>
    </ul>
    <div style="border: 1px solid white">
      <button @click="show = !show">{{ show ? "gizle" : "göster" }}</button>
      <p v-if="show">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
        perferendis repudiandae! Itaque, cum hic. Ipsa asperiores vitae
        voluptate quibusdam facere debitis ducimus delectus in veniam provident?
        Architecto pariatur nihil optio!
      </p>
    </div>
    <div style="border: 1px solid white">
      <button @click="toggleIt">{{ show2 ? "gizle" : "göster" }}</button>
      <p v-if="show2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
        perferendis repudiandae! Itaque, cum hic. Ipsa asperiores vitae
        voluptate quibusdam facere debitis ducimus delectus in veniam provident?
        Architecto pariatur nihil optio!
      </p>
    </div>
    <div style="border: 1px solid white">
      <button @click="counter++">
        {{ counter }} : {{ oddOrEven }} : arttır
      </button>
    </div>
    <div style="display: flex; gap: 5px">
      <div style="border: 1px solid white">
        <input type="text" v-model="searchText" />
        <p v-if="isTyping">şuan yazıyor</p>
      </div>
      <div style="border: 1px solid white">
        <input type="text" v-model="searchText2" />
        <p v-if="isTyping2">şuan yazıyor</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./composables/Counter.js";
import Header from "./composables/Header.js";
import Search from "./composables/Search.js";
import Toggle from "./composables/Toggle.js";
// reactive effect (ref) reactive bir değişken tanımlamak için kullanılır
export default {
  data() {
    return {
      title1: "bu bir data başlık",
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  setup() {
    // setup beforeCreate ve created'ten bile önce çalışır
    console.log("setup");
    //? composables kullanımı
    const { counter, oddOrEven } = Counter();
    const { title2, title3, charLength } = Header();
    const { show, toggleIt, show2 } = Toggle();
    const { searchText, isTyping, searchText2, isTyping2 } = Search();
    //? composables kullanımı

    return {
      title2,
      title3,
      show,
      show2,
      toggleIt,
      charLength,
      counter,
      oddOrEven,
      searchText,
      isTyping,
      searchText2,
      isTyping2,
    };
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
