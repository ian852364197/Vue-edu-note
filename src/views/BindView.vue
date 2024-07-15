<template>
  <div>
    <h1>Bind</h1>
    <h2 :class="titleClass">Selected color:{{ titleClass }}</h2>
    <select v-model="titleClass">
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const titleClass = ref('Red');
</script>

<style scoped>
.Red {
  color: red;
}
.Blue {
  color: blue;
}
.Green {
  color: green;
}
</style>
