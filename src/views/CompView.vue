<template>
  <div>
    <h1>Parent View</h1>
    <input v-model="parentMsg" placeholder="parent message" />
    <p>emit times: {{ emitTimes }}</p>
    <ChildView :pMsg="parentMsg" @childInput="emitTimes++"></ChildView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildView from '@/components/ChildComp.vue';

const parentMsg = ref('');
const emitTimes = ref(0);
</script>

<style scoped></style>
