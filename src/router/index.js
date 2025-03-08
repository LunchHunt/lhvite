import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import List from '@/views/List.vue';
import MapView from '@/views/Map.vue';
import Results from '@/views/Results.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/list', component: List },
  { path: '/map', component: MapView },
  { path: '/results', component: Results },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
