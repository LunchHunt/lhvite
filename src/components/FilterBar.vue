<template>
  <div class="flex justify-end space-x-0 p-3 mr-16 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">

    <!-- <ToggleDistancePrice /> -->
    <button 
      @click="setSort('price')" 
      class="px-4 py-2 rounded-l-md text-xs font-semibold shadow-sm cursor-pointer uppercase"
      :class="activeButtonClass('price')"
    >
      <v-icon name="md-attachmoney" class="mr-1" />

      Best Deal
    </button>
    <button 
      @click="setSort('distance')" 
      class="px-4 py-2 rounded-r-md text-xs font-semibold shadow-sm cursor-pointer uppercase"
      :class="activeButtonClass('distance')"
    >
      <v-icon name="ri-pin-distance-fill" class="mr-1" />
      Closest
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineEmits } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ToggleDistancePrice from './ToggleDistancePrice.vue';

const emit = defineEmits(['sortChange']);
const currentSort = ref('');

const route = useRoute();
const router = useRouter();

onMounted(() => {
  // Initialize from URL query params if present
  if (route.query.sort) {
    currentSort.value = route.query.sort;
  }
});

function setSort(sortType) {
  currentSort.value = sortType;
  updateQueryParams();
  emitSortChange();
}

function activeButtonClass(sortType) {
  return currentSort.value === sortType 
    ? 'bg-brand text-white' 
    : 'bg-white/80 text-gray-700 border border-gray-300 hover:bg-gray-50';
}

function updateQueryParams() {
  router.push({
    query: {
      ...route.query,
      sort: currentSort.value
    }
  });
}

function emitSortChange() {
  emit('sortChange', { sort: currentSort.value });
}
</script>
