<template>
  <div>
    <h1>On click</h1>
    <h2>Count: {{ count }} {{ count % 2 == 0 ? 'even' : 'odd' }}</h2>
    <button @click="count++">Count++</button>
    <h1>Submit</h1>
    <form v-if="prevent" @submit.prevent="cena = !cena">
      <button @click="prevent = !prevent">{{ preventString }}</button>
      <button>{{ cenaString }}</button>
      <span v-show="cena">早上好中國</span>
    </form>
    <form v-else @submit="cena = !cena">
      <button @click="prevent = !prevent">{{ preventString }}</button>
      <button>{{ cenaString }}</button>
      <span v-show="cena">早上好中國</span>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const count = ref(0);
const prevent = ref(false);
const cena = ref(false);
const preventString = computed(() => {
  return prevent.value ? 'submit.prevent' : 'submit';
});
const cenaString = computed(() => {
  return cena.value ? 'you can see me' : "you can't see me";
});
</script>

<style scoped></style>
