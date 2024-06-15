<template>
  <div>
    <AppHeader />
    <div class="flex flex-row">
      <SideBar @category-changed="updateBookmarkList" />
      <appBookmarkList :items="bookmarkList" />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Home/SideBar.vue";

export default {
  components: { SideBar },
  data() {
    return {
      bookmarkList: [],
      categories: [],
      users: [],
    };
  },
  methods: {
    updateBookmarkList(categoryId) {
      this.$appAxios
        .get(`/bookmarks?categoryId=${categoryId}`)
        .then((bookmark_list_response) => {
          this.bookmarkList = bookmark_list_response?.data || [];
        })
        .catch((error) => {
          console.error("Error fetching bookmarks by category:", error);
        });
    },
  },
  created() {
    this.$appAxios
      .get("/bookmarks")
      .then((bookmark_list_response) => {
        this.bookmarkList = bookmark_list_response?.data || [];

        this.$appAxios.get("/categories").then((categories_response) => {
          this.categories = categories_response?.data || [];
          this.bookmarkList.forEach((bookmark) => {
            bookmark.category = this.categories.find(
              (category) => category.id === bookmark.categoryId
            );
          });
        });

        this.$appAxios.get("/users").then((users_response) => {
          this.users = users_response?.data || [];
          this.bookmarkList.forEach((bookmark) => {
            bookmark.user = this.users.find(
              (user) => user.id === bookmark.userId
            );
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching initial bookmarks:", error);
      });
  },
};
</script>

<style scoped></style>
