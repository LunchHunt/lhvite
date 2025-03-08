<template>
  <div ref="listItem" class="list-item rounded-xl shadow-md mx-1 bg-stone-100" @click="emitShowModal">
    <div class="flex w-full items-center justify-between p-0 rounded-xl">
      <div class="rounded-t-xl" :style="{ backgroundImage: `url(${deal.image})` }"></div>
      <div class="flex flex-row flex-auto h-full">
        <div class="flex bg-cover bg-center h-full w-[130px] py-8 rounded-l-xl"
          :style="{ backgroundImage: `url(${deal.image})`, height: '130px' }"></div>

        <div class="flex flex-col grow pl-2 py-2 w-full bg-pink-500/10 relative">
          <div class="flex flex-row justify-between w-full">
            <div class="flex flex-col">
              <h3 class="truncate text-lg font-medium text-gray-900">
                {{ deal.title }}
              </h3>
              <p class="text-sm text-gray-500">{{ deal.restaurant }}</p>
            </div>
            <div>

            </div>
          </div>
          <div class="flex flex-row w-full bg-lime-500/15">
            <p class="text-xs text-gray-500 truncate py-2 w-full text-wrap">{{ deal.description }}</p>
          </div>

          <hr class="w-full border-t border-gray-300 block max-w-full" aria-hidden="true" />

          <div class="flex flex-row justify-between relative top-2 w-ful`l" style="border: thin solid lime;">
            <div>
              <p class="text-xl font-semibold text-gray-500">{{ deal.price }}</p>
            </div>
            <div>
              <p class="text-md font-semibold text-gray-500">
                icons of some kind
              </p>
            </div>
            <div>
              <span class="inline-flex shrink-0 items-center rounded-full bg-green-50 
                  px-1.5 py-0.5 text-lg font-medium text-green-700 
                  ring-1 ring-green-600/20 ring-inset">
                {{ deal.distance }} km
              </span>
            </div>
          </div>
        </div>
        <!-- <div class="flex flex-col grow pl-2 py-2">
          
               
          <p class="mt-1 truncate text-md font-semibold text-gray-500">
            {{ deal.price }}
          </p>
          <hr />
        </div>   -->
        <!-- <div class="flex flex-col items-center p-2">

        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  deal: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["show-modal"]);

function emitShowModal() {
  emit("show-modal", props.deal);
}
</script>

<style scoped>
.list-item {
  cursor: pointer;
  /* Change cursor to indicate clickability */
}
</style>