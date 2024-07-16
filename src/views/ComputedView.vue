<template>
  <div>
    <h1>Computed</h1>
    <input type="text" v-model="itemName" placeholder="item name" />
    <button :disabled="!itemName" @click="addItem">{{ itemBtnMsg }}</button>
    <table>
      <tr v-for="item in filterItems" :key="item.id">
        <td><input type="checkbox" v-model="item.seleted" /></td>
        <td :class="{ seleted: item.seleted }">{{ item.name }}</td>
        <td><button @click="removeItem(item)">X</button></td>
      </tr>
    </table>
    <button @click="hideSeleted = !hideSeleted">
      {{ hideBtnMsg }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let id = 0;

const itemName = ref('new item');

const itemBtnMsg = computed(() => {
  return itemName.value ? 'add item' : 'type item name';
});

const hideSeleted = ref(false);
const hideBtnMsg = computed(() => {
  return hideSeleted.value ? 'show all' : 'hide seleted';
});

const items = ref([
  { id: id++, name: 'apple', seleted: true },
  { id: id++, name: 'orange', seleted: true },
  { id: id++, name: 'banana', seleted: false }
]);

const filterItems = computed(() => {
  return hideSeleted.value ? items.value.filter((i) => !i.seleted) : items.value;
});

function addItem() {
  items.value.push({ id: id++, name: itemName.value, seleted: false });
}

function removeItem(item) {
  items.value = items.value.filter((i) => i !== item);
}
</script>

<style scoped>
.seleted {
  color: red;
}
</style>
