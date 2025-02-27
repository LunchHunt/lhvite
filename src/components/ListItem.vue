<template>
  <div 
    ref="listItem" 
    class="list-item rounded-xl shadow-md mx-1 bg-stone-100" 
    @click="emitShowModal"
  >
    <div class="flex w-full items-center justify-between p-0 rounded-xl">
      <div 
        class="rounded-t-xl" 
        :style="{ backgroundImage: `url(${deal.image})` }"
      ></div>
      <div class="flex flex-row flex-auto h-full">
        <div 
          class="flex bg-cover bg-center h-full w-[130px] py-8 rounded-l-xl" 
          :style="{ backgroundImage: `url(${deal.image})`, height: '130px' }"
        ></div>
        <div class="flex flex-col grow pl-2 py-2">
          <h3 class="truncate text-lg font-medium text-gray-900">
            {{ deal.title }}
          </h3>
          <p class="text-sm text-gray-500">{{ deal.restaurant }}</p>        
          <p class="mt-1 truncate text-md font-semibold text-gray-500">
            {{ deal.price }}
          </p>
        </div>  
        <div class="flex flex-col items-center p-2">
          <span 
            class="inline-flex shrink-0 items-center rounded-full bg-green-50 
                  px-1.5 py-0.5 text-sm font-medium text-green-700 
                  ring-1 ring-green-600/20 ring-inset"
          >
            {{ deal.distance }} km
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  deal: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['show-modal']);

function emitShowModal() {
  emit('show-modal', props.deal);
}
</script>

<style scoped>
.list-item {
  cursor: pointer; /* Change cursor to indicate clickability */
}
</style>