<script setup>
import Navbar from '@/components/Navbar.vue';
import BottomNav from '@/components/BottomNav.vue';
import SearchResultsContainer from '@/components/SearchResultsContainer.vue';
</script>

<template>
  <div>
    <Navbar />
    <div class="container mx-auto">
      <SearchResultsContainer />
    </div>
    <BottomNav />
  </div>
</template>