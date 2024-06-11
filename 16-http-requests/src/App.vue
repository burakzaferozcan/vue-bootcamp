<template>
  <div class="container">
    <h3 class="text-red d-flex justify-content-center align-items-center mb-2">
      Alışveriş Listesi
    </h3>
    <hr />
    <div>
      <input type="text" placeholder="ne alacaksınız" @keydown.enter="onSave" />
    </div>
    <ul v-if="items.length > 0">
      <li
        v-for="item in items"
        :key="item.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">sil</button>
      </li>
    </ul>
    <div
      v-else
      class="bg-red text-white d-flex justify-content-center align-items-center mt-2"
    >
      Sepetinizde hiç ürün yok
    </div>
    <small
      v-if="items.length > 0"
      class="text-green d-flex justify-content-end align-items-center mt-2"
      >sepetinizde {{ items.length }} adet ürün vardır</small
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((response) => {
      this.items = response.data || [];
    });
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios
        .post("http://localhost:3000/items", saveObject)
        .then((save_response) => {
          console.log(save_response);
          this.items.push(save_response.data);
          e.target.value = "";
          e.target.focus;
        });
    },
    onDelete(item) {
      axios.delete("http://localhost:3000/items/" + item.id).then((res) => {
        if (res.status === 200) {
          this.items = this.items.filter((i) => i.id !== item.id);
        }
        return;
      });
    },
  },
};
</script>
