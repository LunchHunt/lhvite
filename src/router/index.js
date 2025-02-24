import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import List from '@/views/List.vue';
import MapView from '@/views/Map.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/list', component: List },
  { path: '/map', component: MapView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
