<template>
  <div class="navbar mx-auto max-w-full px-0 sm:pr-8 lg:pr-8 fixed top-0 left-0 right-0" :class="isModalOpen ? 'z-0' : 'z-1'">
    <div class="relative flex h-16 justify-between">
      <div class="absolute inset-y-0 right-2 flex items-center">
        <!-- Mobile menu button -->
        <button v-if="!isOpen" @click="toggleMenu" class="menu-button cursor-pointer drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] backdrop-blur-sm" :class="isModalOpen ? 'z-0' : 'z-1'">
          <span class="sr-only">Toggle Menu</span>
          <v-icon name="co-hamburger-menu" class="block size-8" aria-hidden="true" />
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex flex-none items-center">
          <img class="h-16 w-auto drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] z-10" src="@/assets/images/logo.svg" alt="Lunch Hunt" />
        </div>
      </div>
    </div>
  
    <!-- Full-Screen Overlay (Fades in separately) -->
    <Transition name="fade">
      <div v-if="isOpen" class="menu-overlay" @click.self="closeMenu"></div>
    </Transition>

    <!-- Slide-in Menu -->
    <Transition name="slide-in">
      <div v-if="isOpen" class="menu-panel bg-stone-950">
        <!-- Close Button Inside Menu -->
        <button @click="closeMenu" class="close-menu-button text-white">
          <v-icon name="io-close" class="block size-8" aria-hidden="true" />
        </button>
        
        <nav class="flex flex-col gap-4 text-white mt-2">
          <a href="#" class="text-2xl font-semibold hover:text-brand inline-flex items-center">
            <v-icon name="co-home" />
            <span class="ml-2">Home</span>
          </a>
          <a href="#" class="text-2xl font-semibold hover:text-brand inline-flex items-center">
            <v-icon name="co-search" />
            <span class="ml-2">Search</span>
          </a>
          <a href="#" class="text-2xl font-semibold hover:text-brand inline-flex items-center">
            <v-icon name="co-gift" />
            <span class="ml-2">Giving Back</span>
          </a>

          <div class="flex flex-col border-t gap-2 border-gray-700 pt-8 mt-4">
            <small class="text-gray-400 uppercase text-xs"> <v-icon name="co-restaurant" /> Restaurants</small>
            <a href="#" class="text-md font-semibold hover:text-brand">The Lunch Hunt Experience</a>
            <a href="#" class="text-md font-semibold hover:text-brand">Sign Up</a>
            <a href="#" class="text-md font-semibold hover:text-brand">Restaurant Login</a>
            <a href="#" class="text-md font-semibold hover:text-brand">Help</a>
          </div>

          <div class="flex flex-col border-t gap-2 border-gray-700 pt-8 mt-4">
            <small class="text-gray-400 uppercase text-xs">  <v-icon name="co-flag-alt" /> Company</small>
            <a href="#" class="text-md font-semibold hover:text-brand">About Lunch Hunt</a>
            <a href="#" class="text-md font-semibold hover:text-brand">Contact</a>
            <a href="#" class="text-md font-semibold hover:text-brand">News</a>
            <a href="#" class="text-md font-semibold hover:text-brand">Privacy Policy</a>
            <a href="#" class="text-md font-semibold hover:text-brand">Terms of Service</a>
          </div>
        </nav>
        <p class="text-gray-400 text-xs absolute bottom-5">&copy; {{ currentYear }} Lunch Hunt Inc.  <v-icon name="fa-canadian-maple-leaf" class="text-brand text-xs pt-1 ml-2" />Made in Canada</p>
      </div>
    </Transition>

    <!-- Add the modal component here too if you want it to appear from navbar -->
    <SearchModal 
      :visible="modalStore.isModalOpen" 
      v-model="modalStore.searchTerm" 
      @close="modalStore.closeModal" 
      @submit-search="submitSearch"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useModalStore } from '@/stores/modalStore';
import SearchModal from '@/components/SearchModal.vue';

// Get the current year
const currentYear = new Date().getFullYear();
const isOpen = ref(false);

const router = useRouter();
const modalStore = useModalStore();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

function submitSearch(newSearchTerm) {
  modalStore.setSearchTerm(newSearchTerm);
  router.push({ path: '/results', query: { search: newSearchTerm } });
  modalStore.closeModal();
}
</script>

<style scoped>
/* 🔹 Full-Screen Overlay (Fades in) */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8); /* Dark background */
  z-index: 30;
}

/* 🔹 Slide-in Menu */
.menu-panel {
  position: fixed;
  right: 0;
  top: 0;
  width: 75vw;
  max-width: 400px;
  height: 100vh;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

/* 🔹 Mobile Menu Button */
.menu-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
}

/* 🔹 Close Button Inside Menu */
.close-menu-button {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
  color: white;
}

/* 🔹 Fade-in Animation (for overlay) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 🔹 Slide-in Animation (for menu) */
.slide-in-enter-active, .slide-in-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(100%);
}

.slide-in-enter-to {
  transform: translateX(0%);
}

.slide-in-leave-from {
transform: translateX(0%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}
</style>
