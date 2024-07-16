<template>
  <div>
    <h2>Child View</h2>
    <p>parent message: {{ props.pMsg || 'No message' }}</p>
    <button @click="emit('childInput')">emit</button>
  </div>
</template>

<script setup>
const props = defineProps(['pMsg']);
const emit = defineEmits(['childInput']);
</script>

<style scoped></style>
