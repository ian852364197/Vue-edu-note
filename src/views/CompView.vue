<template>
  <div>
    <h1>Parent View</h1>
    <input v-model="parentMsg" placeholder="parent message" />
    <ChildView :pMsg="parentMsg"></ChildView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildView from '@/components/ChildComp.vue';

const parentMsg = ref('');
</script>

<style scoped></style>
