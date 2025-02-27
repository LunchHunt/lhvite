<template>
  <div>
    <div class="flex flex-col w-full pt-20 pb-6">
      <SearchResultsBar :searchTerm="searchTerm" />
    </div>
    <div class="list-container grid grid-cols-1 md:grid-cols-2 gap-4">
      <ListItem 
        v-for="deal in dealSearchResults"
        :key="deal.id"
        :deal="deal"
        @show-modal="showDealModal"
      />
      <DealModal 
        v-if="isDealModalVisible"
        :deal="selectedDeal"
        :visible="isDealModalVisible"
        @close="closeDealModal"
      />    
      <SearchModal 
        v-if="isSearchModalVisible"
        :visible="isSearchModalVisible"
        v-model="searchTerm"
        @close="closeSearchModal"
        @submit-search="submitSearch"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { dealSearchResults } from '@/data/searchResults.js';
import ListItem from '@/components/ListItem.vue';
import DealModal from '@/components/DealModal.vue';
import SearchModal from '@/components/SearchModal.vue';
import FilterBar from '@/components/FilterBar.vue';
import SearchResultsBar from '@/components/SearchResultsBar.vue';

const route = useRoute();
const router = useRouter();
const searchTerm = ref(route.query.search || '');
// const deals = ref(dealSearchResults);
const selectedDeal = ref(null);
const isDealModalVisible = ref(false);
const isSearchModalVisible = ref(false);

function showDealModal(deal) {
  selectedDeal.value = deal;
  isDealModalVisible.value = true;
  isSearchModalVisible.value = false; // Ensure search modal is closed
}

function closeDealModal() {
  isDealModalVisible.value = false;
  selectedDeal.value = null;
}

function closeSearchModal() {
  isSearchModalVisible.value = false;
}

function submitSearch(newSearchTerm) {
  searchTerm.value = newSearchTerm;
  router.push({ path: '/results', query: { search: newSearchTerm } });
  closeSearchModal();
}
</script>

<style scoped>
.list-container {
  list-style: none; /* Prevents any list-style from being applied */
}
</style>