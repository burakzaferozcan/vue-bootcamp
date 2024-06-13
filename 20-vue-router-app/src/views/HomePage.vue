<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm" @click="$router.push('/new')">
        +Yeni Ekle
      </button>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Açıklama</th>

          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in bookMarkList" :key="bookmark.id">
          <th scope="row">{{ bookmark.id }}</th>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
          </td>
          <td>{{ bookmark.description }}</td>

          <td>
            <button class="btn btn-sm btn-danger" @click="deleteItem(bookmark)">
              sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookMarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((list) => {
      console.log(list);
      this.bookMarkList = list.data || [];
    });
  },

  methods: {
    deleteItem(item) {
      this.$appAxios
        .delete(`/bookmarks/${item.id}`)
        .then((response) => {
          if (response.status === 200) {
            this.bookMarkList = this.bookMarkList.filter(
              (b) => b.id !== item.id
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
