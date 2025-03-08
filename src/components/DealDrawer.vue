<template>
  <Teleport to="body">
    <!-- Debugging: Check if the overlay is being rendered -->
    <div 
      v-if="isOverlayVisible" 
      class="deal-drawer-overlay" 
      @click.self="closeDrawer"
    >
      <!-- Temporary content to check visibility -->
      <p style="color: white; text-align: center; margin-top: 50vh;">Overlay</p>
    </div>

    <Transition name="slide-up">
      <div 
        v-show="isOpen" 
        class="deal-drawer bg-gradient-to-b from-stone-50 to-white"
      >
        <v-icon 
          name="io-close" 
          class="close-button" 
          @click="closeDrawer" 
        />
        <div class="details flex flex-col justify-between">
          <div class="flex flex-col flex-grow p-5">
            <!-- deal details -->
            <div class="flex flex-row justify-between mt-8">
              <h3 v-if="deal" class="text-2xl font-bold">
                {{ deal.title }}
              </h3>
              <span 
                v-if="deal" 
                class="inline-flex shrink-0 items-center rounded-full 
                       bg-green-50 px-2 py-0.5 text-lg font-medium 
                       text-green-700 ring-1 ring-green-600/20 ring-inset"
              >
                {{ deal.distance }} km
              </span>
            </div>
            <p v-if="deal" class="text-md py-2">{{ deal.restaurant }}</p>
            <p v-if="deal" class="text-lg">{{ deal.price }}</p>
            <p v-if="deal" class="text-sm">{{ deal.description }}</p>

            <!-- action buttons-->
            <div v-if="deal" class="flex flex-row justify-evenly my-auto">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
                <v-icon 
                  name="fa-share" 
                  class="block size-6" 
                  aria-hidden="true" 
                />
              </button>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
                <v-icon 
                  name="md-deliverydining" 
                  class="block size-6" 
                  aria-hidden="true" 
                />
              </button>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
                <v-icon 
                  name="fa-globe" 
                  class="block size-6" 
                  aria-hidden="true" 
                />
              </button>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
                <v-icon 
                  name="fa-phone-alt" 
                  class="block size-6" 
                  aria-hidden="true" 
                />
              </button>          
            </div>
          </div>
        </div>

        <!-- map -->
        <div class="map bg-green-200 w-full flex-none">
          <iframe 
            class="w-full h-full" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en
                 &amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8
                 &amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const isOpen = ref(false);
const isOverlayVisible = ref(false);
const deal = ref(null);

const openDrawer = async (selectedDeal) => {
  deal.value = selectedDeal;
  isOverlayVisible.value = true;
  isOpen.value = true;
  document.body.classList.add("no-scroll");
  console.log("Overlay should be visible:", isOverlayVisible.value);
};

const closeDrawer = () => {
  isOpen.value = false;

  setTimeout(() => {
    isOverlayVisible.value = false;
    document.body.classList.remove("no-scroll");
  }, 300);
};

defineExpose({ openDrawer });
</script>

<style scoped>
/* 🔹 Overlay */
.deal-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 40;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* When overlay is visible */
.deal-drawer-overlay {
  opacity: 1;
}

/* 🔹 Drawer */
.deal-drawer {
  width: 95vw;
  height: 85vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0px;
  margin: 0 auto;
}

/* 🔹 Slide-Up Animation */
.slide-up-enter-active {
  transition: transform 0.3s ease-in;
}
.slide-up-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-enter-to {
  transform: translateY(0%);
}

.slide-up-leave-from {
  transform: translateY(0%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

/* 🔹 Close Button */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  height: 32px;
  width: 32px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

html.no-scroll,
body.no-scroll {
  overflow: hidden;
  height: 100%;
  touch-action: none; /* Prevents mobile touch scrolling */
}

.deal-drawer {
  overflow-y: auto; /* ✅ Allows vertical scrolling inside the drawer */
  max-height: 75vh;
  padding-bottom: 20px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch; /* ✅ Smooth scrolling on mobile */
}

.details, .map {
  height: 50%; /* Each section takes one-third of the modal height */
  width: 100%;
}
</style>
