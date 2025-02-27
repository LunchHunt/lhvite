<template>
  <div class="map-container">
    <div id="map" ref="mapRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { loadGoogleMapsApi } from '../utils/googleMaps';

const mapRef = ref(null);
let map = null;

onMounted(async () => {
  try {
    await loadGoogleMapsApi();
    initMap();
  } catch (error) {
    console.error('Failed to load Google Maps API:', error);
  }
});

function initMap() {
  // Check if Google Maps API is loaded
  if (window.google && window.google.maps) {
    // Create a new map instance
    map = new google.maps.Map(mapRef.value, {
      center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
      zoom: 16, // Default zoom level
      fullscreenControl: false,
      mapTypeControl: true,
      streetViewControl: false,
      zoomControl: true,
      mapTypeControl: false,
      // Position controls higher on the map
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
    });
  } else {
    console.error('Google Maps API not loaded');
  }
}
</script>

<style scoped>
.map-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

#map {
  width: 100%;
  height: 100%;
}
</style>