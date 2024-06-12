export default {
  //! bir module'nün altında oldugunu göstermek için namespaced:true
  //! kullanmalıyız yoksa karışabilir
  namespaced: true,

  state: {
    contactName: "contact name",
    contactAddress: "contact address",
  },
  mutations: {
    setItem(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    contactName(state) {
      return state.contactName;
    },
  },
};
