const user = {
  namespaced: true,
  state: {
    user: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      privacyPolicy: false,
    },
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {},
};

export default user;
