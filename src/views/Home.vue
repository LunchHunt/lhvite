<script setup>
import Navbar from "@/components/Navbar.vue";
import Deals from "@/components/Deals.vue";
import BottomNav from "@/components/BottomNav.vue";
</script>

<template>
  <div>
    <Navbar />
    <div class="container mx-auto">
      <Deals />
    </div>
    <BottomNav />
  </div>
</template>
