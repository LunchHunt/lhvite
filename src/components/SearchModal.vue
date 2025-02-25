<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content bg-stone-50/60 backdrop-blur-lg rounded-xl px-4 py-4">
      <form @submit.prevent="submitSearch">
        <input v-model="searchTerm" type="text" placeholder="Search..." class="search-input bg-white rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-brand" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['close']);
const searchTerm = ref('');
const router = useRouter();

function close() {
  emit('close');
}

function submitSearch() {
  if (searchTerm.value.trim()) {
    router.push({ path: '/results', query: { search: searchTerm.value } });
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 80vw;
  max-width: 500px;
}

.search-input {



}
</style>
