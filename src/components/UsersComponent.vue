<template>
  <div>
    <input type="text" v-model="searchQuery" @input="filterUsers" placeholder="Search...">
    <ul>
      <li v-for="user in paginatedUsers" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
    filteredUsers() {
      return this.$store.state.filteredUsers;
    },
    paginatedUsers() {
      return this.$store.getters.paginatedUsers;
    },
    totalPages() {
      return this.$store.getters.totalPages;
    },
    currentPage() {
      return this.$store.state.currentPage;
    },
    searchQuery: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit('setSearchQuery', value);
        this.$store.dispatch('filterUsers');
      }
    }
  },
  methods: {
    prevPage() {
      this.$store.commit('setCurrentPage', this.currentPage - 1);
    },
    nextPage() {
      this.$store.commit('setCurrentPage', this.currentPage + 1);
    },
    filterUsers() {
      this.$store.dispatch('filterUsers');
      this.$store.commit('setCurrentPage', 1); // Reset page to 1 when filtering
    }
  },
  created() {
    this.$store.dispatch('fetchUsers');
  }
};
</script>
