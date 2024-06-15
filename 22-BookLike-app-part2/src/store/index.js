import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: true });
export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456",
  },
  getters: {
    _currentUserId: (state) => state.user !== null,
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      //   if (user !== null && user.hasOwnProperty("password")) {
      //     delete user.password;
      //   }
      delete user?.password;
      return user;
    },
    _saltKey: (state) => state.saltKey,
    _userLikes: (state) => state.user?.likes || [],
    _userBookmarks: (state) => state.user?.bookmarks || [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      if (!state.user.likes) {
        state.user.likes = [];
      }
    },
    logoutUser(state) {
      state.user = null;
    },
    setBookmarks(state, bookmarkIds) {
      if (!state.user.bookmarks) {
        state.user.bookmarks = [];
      }
      state.user.bookmarks = bookmarkIds;
    },
    setLikes(state, bookmarkIds) {
      if (!state.user.likes) {
        state.user.likes = [];
      }
      state.user.likes = bookmarkIds;
    },
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
