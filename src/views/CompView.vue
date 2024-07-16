<template>
  <div>
    <h1>Parent View</h1>
    <input v-model="parentMsg" placeholder="parent message" />
    <p>emit times: {{ emitTimes }}</p>
    <input v-model="msgModel" placeholder="model message" />
    <ChildView :pMsg="parentMsg" @childInput="emitTimes++" v-model="msgModel"></ChildView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildView from '@/components/ChildComp.vue';

const parentMsg = ref('');
const emitTimes = ref(0);
const msgModel = ref('');
</script>

<style scoped></style>
