<template>
  <div class="deals-container">
    <div class="deals-wrapper" :style="{ transform: `translateY(-${activeIndex * 100}vh)` }">
      <div v-for="(deal, index) in deals" :key="index" class="deal-item">
        <template v-if="deal.video">
          <video autoplay loop muted playsinline class="deal-image">
            <source :src="deal.video" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </template>
        <template v-else>
          <div :style="{ backgroundImage: `url(${deal.image})` }" class="deal-image"></div>
        </template>
        <DealCard :deal="deal" @open-drawer="openDrawer" />
      </div>
    </div>
    <DealDrawer ref="dealDrawerRef" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import DealCard from '@/components/DealCard.vue';
import DealDrawer from '@/components/DealDrawer.vue';
import { deals as dealsData } from '@/data/dealsData.js';

const deals = ref(dealsData);

const activeIndex = ref(0);
const isScrolling = ref(false);
const touchStartY = ref(0);
const touchEndY = ref(0);
const dealDrawerRef = ref(null);

const openDrawer = (deal) => {
  if (dealDrawerRef.value) {
    dealDrawerRef.value.openDrawer(deal);
  }
};

const changeSlide = (direction) => {
  if (isScrolling.value) return;
  isScrolling.value = true;

  if (direction === 'next' && activeIndex.value < deals.value.length - 1) {
    activeIndex.value++;
  } else if (direction === 'prev' && activeIndex.value > 0) {
    activeIndex.value--;
  }

  setTimeout(() => {
    isScrolling.value = false;
  }, 500); // Lock scrolling during transition
};

const handleWheel = (event) => {
  if (event.deltaY > 0) {
    changeSlide('next');
  } else if (event.deltaY < 0) {
    changeSlide('prev');
  }
};

const handleTouchStart = (event) => {
  touchStartY.value = event.touches[0].clientY;
};

const handleTouchEnd = (event) => {
  touchEndY.value = event.changedTouches[0].clientY;
  if (touchStartY.value - touchEndY.value > 50) {
    changeSlide('next');
  } else if (touchStartY.value - touchEndY.value < -50) {
    changeSlide('prev');
  }
};

onMounted(() => {
  window.addEventListener('wheel', handleWheel);
  window.addEventListener('touchstart', handleTouchStart);
  window.addEventListener('touchend', handleTouchEnd);
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel);
  window.removeEventListener('touchstart', handleTouchStart);
  window.removeEventListener('touchend', handleTouchEnd);
});
</script>

<style scoped>
.deals-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.deals-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.deal-item {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Ensure children stack vertically */
  justify-content: flex-end; /* Pushes deal-card to the bottom */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; /* Establishes a new stacking context */
}

.deal-card {
  width: 100%;
  position: relative; /* Ensures it stays inside the deal-item */
  bottom: 60px;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  margin-top: auto; /* Ensures it remains at the bottom of its parent */
  z-index: 1; /* Ensures it is above the background image */
}

.deal-image {
  width: 100%;
  height: 100vh; /* Ensures it covers the full viewport height */
  object-fit: cover; /* Ensures the video/image covers the entire area */
  background-size: cover; /* For div background images */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents background image repetition */
  position: absolute; /* Positions it within the deal-item */
  top: 0;
  left: 0;
  z-index: 0; /* Ensures it is below the deal-card */
}
</style>
