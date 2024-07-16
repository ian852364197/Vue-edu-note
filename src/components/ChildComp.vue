<template>
  <div>
    <h2>Child View</h2>
    <p>parent message: {{ props.pMsg || 'No message' }}</p>
    <p>model message: {{ model || 'No message' }}</p>
    <button @click="emit('childInput')">emit</button>
    <button @click="model = ''">clear model message</button>
  </div>
</template>

<script setup>
const props = defineProps(['pMsg']);
const emit = defineEmits(['childInput']);
const model = defineModel();
</script>

<style scoped></style>
