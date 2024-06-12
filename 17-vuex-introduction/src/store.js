import { createStore } from "vuex";
const store = createStore({
  state: {
    user: {
      name: "burak",
      lname: "ozcan",
      age: 33,
      address: {},
      password: 123123123,
      tc: 111111,
    },
    theme: "dark",
    permissions: [1, 2, 3, 4, 5],
    userList: ["burak", "zafer", "ozcan", "sevval", "çimen"],
    fullName: "burak zafer özcan",
    itemList: [
      { id: 1, title: "masa", type: "mobilya" },
      { id: 2, title: "tv", type: "elektronik" },
      { id: 3, title: "monitör", type: "elektronik" },
      { id: 4, title: "sandalye", type: "mobilya" },
      { id: 5, title: "bardak", type: "plastik" },
    ],
  },
  getters: {
    woodItems: (state) => state.itemList.filter((i) => i.type === "mobilya"),
    activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
  mutations: {
    //! mutations kullanımı asenkron çalışmaz asenkron olarak çalışmaz
    //! bir datayı asenkron set etmek için actions kullanılır

    newItem(state, payload) {
      state.itemList.push(payload);
    },
    changeFullName(state, payload) {
      state.fullName = payload;
    },
  },
  actions: {
    //! bir datayı asenkron set etmek için actions kullanılır
    newItem(context, item) {
      //? istenilirse object destructuring ile de kullanılarbilir
      //? newItem({commit,dispatch,state}, item)
      //! farklı bir state'i set etmek istenirse context.state
      //! farklı bir actions çalıştırılmak istenirse context.dispatch
      //! farklı bir mutations çalıştırılmak istenirse context.commit

      console.log("item -> ", item);

      setTimeout(() => {
        context.commit("newItem", item);
      }, 2000);
    },
  },
});
export default store;
