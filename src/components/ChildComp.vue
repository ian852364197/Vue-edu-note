<template>
  <div>
    <h2>Child View</h2>
    <p>{{ props.pMsg }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['pMsg']);
</script>

<style scoped></style>
