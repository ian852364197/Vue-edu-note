<template>
  <div>
    <h1>Parent View</h1>
    <input v-model="parentMsg" placeholder="parent message" />
    <p>Child View emit times: {{ emitTimes }}</p>
    <input v-model="msgModel" placeholder="model message" />
    <ChildView :pMsg="parentMsg" @childInput="emitTimes++" v-model="msgModel"></ChildView>
    <p>Slot emit times: {{ slotCount }}</p>
    <ChildButtom
      ><ChildView pMsg="component in slot" @childInput="slotTimes++" v-model="slotTimes"></ChildView
    ></ChildButtom>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ChildView from '@/components/ChildComp.vue';
import ChildButtom from '@/components/ChildButton.vue';

const parentMsg = ref('');
const emitTimes = ref(0);
const msgModel = ref('');
const slotTimes = ref(0);
const slotCount = computed(() => {
  return !slotTimes.value ? 0 : slotTimes;
});
</script>

<style scoped></style>
