import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const isModalOpen = ref(false);
  const searchTerm = ref("");

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  function setSearchTerm(term) {
    searchTerm.value = term;
  }

  return {
    isModalOpen,
    searchTerm,
    openModal,
    closeModal,
    setSearchTerm,
  };
});
