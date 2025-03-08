<template>
  <div class="deal-actions">
    <!-- <button class="action-button">
      <v-icon 
        name="io-restaurant" 
        class="action-icon drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" 
      />
    </button> -->
    <!-- Like Button -->
    <button class="action-button" @click="toggleLike">
      <v-icon 
        name="fa-heart" 
        :class="{ 'text-brand': isLiked }" 
        class="action-icon drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" 
      />
      <div class="action-text">{{ likes }}</div>
    </button>

    <!-- Share Button -->
    <button class="action-button" @click="shareDeal">
      <v-icon 
        name="fa-share" 
        class="action-icon drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" 
      />
    </button>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  initialLikes: { type: Number, default: 0 }
});

const isLiked = ref(false);
const likes = ref(props.initialLikes);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
  likes.value += isLiked.value ? 1 : -1;
};

const shareDeal = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Check out this deal!',
      text: 'I found this amazing deal you might like.',
      url: window.location.href
    })
    .then(() => console.log('Deal shared successfully!'))
    .catch((error) => console.error('Error sharing deal:', error));
  } else {
    alert("Web Share API is not supported in your browser.");
  }
};
</script>

<style scoped>
.deal-actions {
  position: absolute;
  bottom: 140px; /* Adjust as needed */
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 50;
  width: 100px;
}

.action-button {
  background: none;
  cursor: pointer;
  text-align: center;
  color: white;
  font-size: 14px;
  text-shadow: 1px 1px 4px black;
  padding: 4px 0px;
}

.action-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto;
}

.action-text {
  font-size: 12px;
  text-align: center;
  text-shadow: 1px 1px 4px black;
}

.restaurant-name {
  width: 100px;
  height: 50px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
</style>
