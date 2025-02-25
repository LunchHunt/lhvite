<template>
  <div class="filter-bar flex flex-row justify-center">
    <div class="grid grid-cols-1 w-1/2 rounded-lg px-2">
      <button @click="togglePriceSort" class="w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand sm:text-sm/6">
        Price <v-icon :name="priceSortIcon" class="pointer-events-none mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
      </button>
    </div>
    <div class="grid grid-cols-1 w-1/2 rounded-lg px-2">
      <button @click="toggleDistanceSort" class="w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand sm:text-sm/6">
        Distance <v-icon :name="distanceSortIcon" class="pointer-events-none mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineEmits } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const emit = defineEmits(['sortChange']);
const selectedPriceSort = ref('asc');
const selectedDistanceSort = ref('asc');


const priceSortIcon = ref('hi-chevron-up');
const distanceSortIcon = ref('hi-chevron-up');

const route = useRoute();
const router = useRouter();

function togglePriceSort() {
  selectedPriceSort.value = selectedPriceSort.value === 'asc' ? 'desc' : 'asc';
  
  priceSortIcon.value = selectedPriceSort.value === 'asc' ? 'hi-chevron-up' : 'hi-chevron-down';
  updateQueryParams();
  emitSortChange();
}

function toggleDistanceSort() {
  selectedDistanceSort.value = selectedDistanceSort.value === 'asc' ? 'desc' : 'asc';
  
  distanceSortIcon.value = selectedDistanceSort.value === 'asc' ? 'hi-chevron-up' : 'hi-chevron-down';
  updateQueryParams();
  emitSortChange();
}

function updateQueryParams() {
  router.push({
    query: {
      ...route.query,
      priceSort: selectedPriceSort.value,
      distanceSort: selectedDistanceSort.value
    }
  });
}

function emitSortChange() {
  emit('sortChange', {
    price: selectedPriceSort.value,
    distance: selectedDistanceSort.value
  });
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style> 