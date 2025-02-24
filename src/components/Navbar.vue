<template>
  <div class="mx-auto max-w-full px-0 sm:pr-8 lg:pr-8 fixed top-0 left-0 right-0 z-50 ">
    <div class="relative flex h-16 justify-between">
      <div class="absolute inset-y-0 right-2 flex items-center">
        <!-- Mobile menu button -->
        <button v-if="!isOpen" @click="toggleMenu" class="menu-button cursor-pointer drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <span class="sr-only">Toggle Menu</span>
          <v-icon name="co-hamburger-menu" class="block size-8" aria-hidden="true" />
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex flex-none items-center">
          <img class="h-16 w-auto drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" src="/images/logo.svg" alt="Lunch Hunt" />
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

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Get the current year
const currentYear = new Date().getFullYear();
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
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
  z-index: 40;
}

/* 🔹 Slide-in Menu */
.menu-panel {
  position: fixed;
  right: 0;
  top: 0;
  width: 75vw;
  height: 100vh;
  /* background: #111111; */
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

/* 🔹 Mobile Menu Button */
.menu-button {
  z-index: 60;
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
