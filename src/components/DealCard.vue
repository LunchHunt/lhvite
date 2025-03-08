<template>
  <div class="deal-card flex items-center justify-between">
    <div class="deal-info">
      <h1 class="deal-title">{{ deal.title }}</h1>
      <p class="deal-restaurant">{{ deal.restaurant }}</p>
      <p class="deal-price">{{ deal.price }}</p>
      <span
        v-if="deal"
        class="inline-flex shrink-0 items-center rounded-full 
        mt-1 px-2 py-0.5 text-lg font-medium 
        bg-green-600/50 text-green-200 ring-1 ring-green-200 ring-inset"
      >
        {{ deal.distance }} km
      </span>
    </div>
    <DealActions :initialLikes="deal.likes" />
    <!-- Info Icon -->
    <div class="restaurant-info flex items-center justify-end">
      <button class="action-button" @click="openDrawer">
        <v-icon
          name="io-ellipsis-vertical"
          class="action-icon drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
        />
        <div class="action-text"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import DealActions from "@/components/DealActions.vue";

const props = defineProps({
  deal: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits();
const openDrawer = () => {
  emit("open-drawer", props.deal); // ✅ Correctly reference props.deal
};
</script>

<style scoped>
.deal-info {
  color: white;
  text-align: left;
}

.deal-title {
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 4px black;
}

.deal-price {
  font-size: 1.5rem;
  margin-top: 0.5rem;
  text-shadow: 1px 1px 4px black;
}

.deal-distance {
  font-size: 1rem;
  margin-top: 0.5rem;
  text-shadow: 1px 1px 4px black;
}
.restaurant-info {
  padding-right: 20px;
}

.action-button {
  background: none;
  cursor: pointer;
  text-align: center;
  color: white;
  font-size: 14px;
  text-shadow: 1px 1px 4px black;
  padding: 8px 0px;
}

.action-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto;
}

/* Slide-up animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.drawer-container {
  z-index: 50; /* Ensures it's above the DealCard */
}
</style>
