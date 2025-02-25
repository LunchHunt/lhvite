<template>
  <div class="list-container my-18 grid grid-cols-1 md:grid-cols-2 gap-4"> 
    <DealModal 
      v-if="selectedDeal"
      :deal="selectedDeal"
      :visible="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { deals as dealsData } from '@/data/dealsData.js';
import ListItem from '@/components/ListItem.vue';
import DealModal from '@/components/DealModal.vue';

const deals = ref(dealsData);
const selectedDeal = ref(null);
const isModalVisible = ref(false);

function showModal(deal) {
  selectedDeal.value = deal;
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
  selectedDeal.value = null;
}
</script>

<style scoped>
.list-container {
  list-style: none; /* Prevents any list-style from being applied */
}
</style>