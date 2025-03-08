<template>
  <label class="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
    <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
    <span class="mr-[18px] text-sm font-medium text-dark"> Sort </span>
    <div
      class="shadow-two flex h-[46px] w-[82px] items-center justify-center rounded-md bg-white"
    >
      <span class="light bg-primary flex h-9 w-9 items-center justify-center rounded">
        <v-icon name="ri-pin-distance-fill" />
      </span>
      <span class="dark text-body-color flex h-9 w-9 items-center justify-center rounded">
        <v-icon name="md-attachmoney" />
      </span>
    </div>
  </label>
</template>

<script setup>
let isChecked = false;

function handleCheckboxChange() {
  console.log('handleCheckboxChange');
  isChecked = !isChecked;
}
</script>