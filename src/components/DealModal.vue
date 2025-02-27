<template>
  <div v-if="visible" class="modal-overlay" @click="closeModal">
    <div 
      class="modal-content rounded-xl flex flex-col relative bg-stone-50" 
      @click.stop
    >
      <button class="close-button" @click="closeModal">
        <v-icon 
          name="io-close" 
          class="block size-8 text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" 
          aria-hidden="true" 
        />
      </button>
      <div 
        :class="['image-container', { 'expanded': isImageExpanded }]" 
        class="relative"
      >
        <img 
          :src="deal.image" 
          alt="Deal Image" 
          :class="[
            'deal-image', 
            { 'rounded-t-xl': !isImageExpanded }, 
            { 'rounded-xl': isImageExpanded }
          ]" 
        />
        <button class="expand-button" @click="toggleImage">
          <v-icon 
            :name="isImageExpanded ? 'gi-contract' : 'gi-expand'" 
            class="text-white block size-6" 
            :style="{ color: 'white' }" 
            aria-hidden="true" 
          />
        </button>
      </div>

      <div class="details p-4 flex flex-col justify-between">
        <div class="flex flex-col flex-grow">
          <div class="flex flex-row justify-between">
            <h3 class="text-2xl font-bold">{{ deal.title }}</h3>
            <span 
              class="inline-flex shrink-0 items-center rounded-full bg-green-50 
                     px-2 py-0.5 text-lg font-medium text-green-700 
                     ring-1 ring-green-600/20 ring-inset"
            >
              {{ deal.distance }} km
            </span>
          </div>
          <p class="text-md py-2">{{ deal.restaurant }}</p>
          <p class="text-lg">{{ deal.price }}</p>
          <p class="text-sm">{{ deal.description }}</p>
          <div class="flex flex-row justify-evenly mt-auto">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
              <v-icon name="fa-share" class="block size-6" aria-hidden="true" />
            </button>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
              <v-icon 
                name="md-deliverydining" 
                class="block size-6" 
                aria-hidden="true" 
              />
            </button>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
              <v-icon name="fa-globe" class="block size-6" aria-hidden="true" />
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
      <div class="map bg-green-200 rounded-b-xl flex-none">
        <iframe 
          class="w-full h-full rounded-b-xl" 
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
  </div>  
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';

const props = defineProps({
  deal: {
    type: Object,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);
const isImageExpanded = ref(false);

function closeModal() {
  emit('close');
}

function toggleImage() {
  isImageExpanded.value = !isImageExpanded.value;
}

onMounted(() => {
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) {
    const height = modalContent.offsetHeight;
    modalContent.style.minWidth = `375px`; 
    modalContent.style.width = `${height * .66}px`; 
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 20px 20px;
  z-index: 1000;
}

.modal-content {
  position: relative;
  height: calc(100% - 40px); /* Full height minus padding */
  width: 100%; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.image-container {
  position: relative;
  height: 33.33%; /* Set the container height to one-third of the modal */
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
}

.image-container.expanded {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%; /* Full height of the modal */
  z-index: 1002; /* Bring to front */
}
 
.deal-image {
  width: 100%; /* Full width */
  height: 100%; /* Full height of the container */
  object-fit: cover; /* Ensure the image covers the space */
}

.details {
  flex-grow: 1; /* Allow the details section to grow */
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: calc(100% - 40px); /* Set a maximum height */
}

.map {
  height: 33.33%; /* Each section takes one-third of the modal height */
  width: 100%;
}

.expand-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  color: white !important;
  z-index: 1003; /* Ensure button is above the image */
}

.expand-button:hover {
  background: rgba(0, 0, 0, 0.7);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  z-index: 1001;
}

.close-button:hover {
  color: #000;
}
</style>
