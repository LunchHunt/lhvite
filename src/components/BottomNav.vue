<template>
  <nav class="bottom-nav bg-stone-950">
    <div 
      class="nav-item" 
      v-for="item in menuItems" 
      :key="item.name"
      @click="handleClick(item)"
    >
      <v-icon :name="item.icon" class="nav-icon" />
      <span class="nav-label">{{ item.name }}</span>
    </div>
    <SearchModal 
      :visible="isModalOpen" 
      v-model="searchTerm" 
      @close="closeModal" 
      @submit-search="submitSearch"
    />
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchModal from '@/components/SearchModal.vue';

const router = useRouter();
const isModalOpen = ref(false);
const searchTerm = ref('');

const menuItems = [
  { name: 'Home', icon: 'co-home', route: '/' },
  { name: 'List', icon: 'co-list', route: '/list' },
  { name: 'Map', icon: 'co-map', route: '/map' },
  { name: 'Search', icon: 'co-search', action: 'openSearchModal' },
];

function handleClick(item) {
  if (item.route) {
    router.push(item.route);
  } else if (item.action === 'openSearchModal') {
    console.log('Opening modal'); // Debugging log
    isModalOpen.value = true; // Open the modal
  }
}

function closeModal() {
  isModalOpen.value = false; // Close the modal
}

function submitSearch(newSearchTerm) {
  searchTerm.value = newSearchTerm;
  router.push({ path: '/results', query: { search: newSearchTerm } });
  closeModal(); // Close the modal after submitting the search
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 12px;
  cursor: pointer;
}

.nav-icon {
  width: 24px;
  height: 24px;
}
</style>
