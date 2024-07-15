<template>
  <div>
    <h1>Ref</h1>
    <input v-model="msg" placeholder="Type here" />
    <h2>{{ msg }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('Type something');
</script>

<style scoped></style>
