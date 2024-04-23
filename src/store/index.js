import { createStore } from 'vuex';

export default  createStore({
  state: {
    message:"Mahesh",
    users: [],
    filteredUsers: [],
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 5,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
      state.filteredUsers = users;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setFilteredUsers(state, users) {
      state.filteredUsers = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      console.log("users data--> "+ users)
      commit('setUsers', users);
    },
    filterUsers({ state, commit }) {
      let filteredUsers = state.users;
      const query = state.searchQuery.toLowerCase();
      if (query) {
        filteredUsers = filteredUsers.filter(user =>
          user.name.toLowerCase().includes(query) ||
          user.username.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
        );
      }
      commit('setFilteredUsers', filteredUsers);
    },
  },
  getters: {
    paginatedUsers(state) {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return state.filteredUsers.slice(startIndex, endIndex);
    },
    totalPages(state) {
      return Math.ceil(state.filteredUsers.length / state.itemsPerPage);
    },
  },
});
