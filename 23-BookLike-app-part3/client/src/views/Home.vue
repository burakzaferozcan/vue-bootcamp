<template>
  <AppHeader />
  <div class="flex flex-row">
    <Sidebar @category-changed="updateBookmarkList" />
    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bookmark bulunmamaktadır..</div>
  </div>
</template>
<script>
import Sidebar from "@/components/Home/Sidebar";
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      bookmarkList: []
    };
  },
  mounted() {
    this.$socket.on("NEW_BOOKMARK_ADDED", bookmark => {
      this.bookmarkList.push(bookmark);
    });
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const bookmarkResponse = await this.$appAxios.get("/bookmarks");
        const bookmarks = bookmarkResponse.data || [];

        const categoryIds = [...new Set(bookmarks.map(bookmark => bookmark.categoryId))];
        const userIds = [...new Set(bookmarks.map(bookmark => bookmark.userId))];

        const categoryRequests = categoryIds.map(id => this.$appAxios.get(`/categories/${id}`));
        const userRequests = userIds.map(id => this.$appAxios.get(`/users/${id}`));

        const categories = await Promise.all(categoryRequests);
        const users = await Promise.all(userRequests);

        const categoryMap = categories.reduce((map, category) => {
          map[category.data.id] = category.data;
          return map;
        }, {});

        const userMap = users.reduce((map, user) => {
          map[user.data.id] = user.data;
          return map;
        }, {});

        this.bookmarkList = bookmarks.map(bookmark => ({
          ...bookmark,
          category: categoryMap[bookmark.categoryId],
          user: userMap[bookmark.userId]
        }));

        // Handle user bookmarks and likes similar to how you fetch bookmarks
        const userBookmarkResponse = await this.$appAxios.get("/user_bookmarks");
        const userLikeResponse = await this.$appAxios.get("/user_likes");

        this.$store.commit("setBookmarks", userBookmarkResponse.data || []);
        this.$store.commit("setLikes", userLikeResponse.data || []);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
    updateBookmarkList(categoryId) {
      const url = categoryId ? `/bookmarks?categoryId=${categoryId}` : `/bookmarks`;
      this.$appAxios.get(url).then(bookmark_list_response => {
        this.bookmarkList = bookmark_list_response?.data || [];
      });
    }
  }
};
</script>
