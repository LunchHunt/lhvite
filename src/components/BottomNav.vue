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
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const menuItems = [
  { name: 'Home', icon: 'co-home', route: '/' },
  { name: 'List', icon: 'co-list', route: '/list' },
  { name: 'Map', icon: 'co-map', route: '/map' },
  { name: 'Search', icon: 'co-search', action: 'openModal' },
];

function handleClick(item) {
  if (item.route) {
    router.push(item.route);
  } else if (item.action === 'openModal') {
    // Implement your modal opening logic here
    console.log('Open search modal');
  }
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
