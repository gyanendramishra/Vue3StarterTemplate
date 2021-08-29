import { createStore } from "vuex";
import Home from "./Home";

export default createStore({
  state: {
    title: "Vuex Store",
    user: {
      loggedIn: false,
    },
    notes: ["Note 1", "Note 2", "Note 3", "Note 4", "Note 5"],
  },
  getters: {
    auth(state) {
      return state.user;
    },
  },
  mutations: {
    saveNote: (state, payload) => {
      state.notes.push(payload);
    },
    deleteNote: (state, payload) => {
      state.notes = state.notes.filter((note) => note != payload);
    },
  },
  actions: {
    saveNote: (context, payload) => {
      context.commit("saveNote", payload);
    },
    deleteNote: (context, payload) => {
      context.commit("deleteNote", payload);
    },
  },
  modules: {
    home: Home,
  },
});
