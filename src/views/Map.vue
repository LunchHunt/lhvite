<script setup>
import Navbar from '@/components/Navbar.vue';
import BottomNav from '@/components/BottomNav.vue';
import Map from '@/components/Map.vue';
</script>

<template>
  <div>
    <Navbar />
    <div class="container mx-auto">
      <Map />
    </div>
    <BottomNav />
  </div>
</template>
