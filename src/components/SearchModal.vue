<template>
  <div class="modal-overlay z-50" v-if="visible" @click.self="close">
    <div 
      class="modal-content bg-stone-50/60 backdrop-blur-lg rounded-xl px-4 py-4"
    >
      <form @submit.prevent="handleSubmit">
        <input 
          ref="searchInput" 
          v-model="searchTerm" 
          @input="$emit('update:modelValue', searchTerm)" 
          type="text" 
          placeholder="Search..." 
          class="search-input bg-white rounded-xl p-4 w-full focus:outline-none
                 focus:ring-2 focus:ring-brand"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { ref, watch, nextTick } from "vue";
import { useRouter } from "vue-router";

const emit = defineEmits(["close", "update:modelValue", "submit-search"]);
const searchTerm = ref("");
const router = useRouter();
const searchInput = ref(null);

const props = defineProps({
  visible: Boolean,
  modelValue: String,
});

// Focus the input when the modal becomes visible
watch(
  () => props.visible,
  async (newVal) => {
    if (newVal) {
      await nextTick(); // Wait for the DOM to update
      if (searchInput.value) {
        searchInput.value.focus();
      }
    }
  },
);

function close() {
  emit("close");
  searchTerm.value = ""; // Reset search term when modal is closed
}

function handleSubmit() {
  if (searchTerm.value.trim()) {
    router.replace({
      path: "/results",
      query: { search: searchTerm.value },
    });
    emit("submit-search", searchTerm.value);
    searchTerm.value = ""; // Reset search term after submission
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
}

.modal-content {
  width: 80vw;
  max-width: 500px;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
}
</style>
