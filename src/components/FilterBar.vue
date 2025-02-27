<template>
  <div class="flex justify-end space-x-3 p-3 mr-16">
    <button 
      @click="setSort('price')" 
      class="px-4 py-2 rounded-md text-xs font-semibold shadow-sm"
      :class="activeButtonClass('price')"
    >
      Best Deal
    </button>
    <button 
      @click="setSort('distance')" 
      class="px-4 py-2 rounded-md text-xs font-semibold shadow-sm"
      :class="activeButtonClass('distance')"
    >
      Closest
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineEmits } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50';
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
