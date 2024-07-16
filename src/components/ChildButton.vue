<template>
  <h2>Slot</h2>
  <button @click="showSlot = !showSlot">{{ btnMsg }}</button>
  <div v-show="showSlot">
    <p>parent message被固定了</p>
    <p>model message隨emit次數改變</p>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const showSlot = ref(false);
const btnMsg = computed(() => {
  return showSlot.value ? 'hide slot' : 'show slot';
});
</script>

<style scoped></style>
