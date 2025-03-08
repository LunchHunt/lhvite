<template>
  <div class="search-term-display px-4 m-0 w-full">
    <p v-if="searchTerm">Searching for: <strong>{{ searchTerm }}</strong></p>
    <p v-else>No search term entered.</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const searchTerm = computed(() => route.query.search || "");

// Watch for changes in the route's query parameters
watch(
  () => route.query.search,
  (newSearchTerm) => {
    // This will trigger a reactivity update
    console.log("Search term updated:", newSearchTerm);
  },
);
</script>

<style scoped>
.search-term-display {
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #333;
}
</style>
