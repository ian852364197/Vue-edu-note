<template>
  <div>
    <h1>Computed</h1>
    <input type="text" v-model="text" placeholder="item name" />
    <button v-if="text != ''" @click="addItem">add item</button>
    <button v-else disabled>type item name</button>
    <table>
      <tr v-for="item in filterItems" :key="item.id">
        <td><input type="checkbox" v-model="item.seleted" /></td>
        <td :class="{ seleted: item.seleted }">{{ item.name }}</td>
        <td><button @click="removeItem(item)">X</button></td>
      </tr>
    </table>
    <button @click="hideSeleted = !hideSeleted">
      {{ hideSeleted ? 'show all' : 'hide seleted' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let id = 0;

const text = ref('new item');

const hideSeleted = ref(false);

const items = ref([
  { id: id++, name: 'apple', seleted: true },
  { id: id++, name: 'orange', seleted: true },
  { id: id++, name: 'banana', seleted: false }
]);

const filterItems = computed(() => {
  return hideSeleted.value ? items.value.filter((i) => !i.seleted) : items.value;
});

function addItem() {
  items.value.push({ id: id++, name: text.value, seleted: false });
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
