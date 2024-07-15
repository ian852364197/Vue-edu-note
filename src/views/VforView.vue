<template>
  <div>
    <h1>v-for</h1>
    <input type="text" v-model="text" placeholder="item name" />
    <button v-if="text != ''" @click="addItem">add item</button>
    <button v-else disabled>type item name</button>
    <table>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.name }}</td>
        <td><button @click="removeItem(item)">X</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let id = 0;

const text = ref('new item');

const items = ref([
  { id: id++, name: 'apple' },
  { id: id++, name: 'orange' },
  { id: id++, name: 'banana' }
]);

function addItem() {
  items.value.push({ id: id++, name: text.value });
}

function removeItem(item) {
  let index = items.value.indexOf(item);
  items.value.splice(index, 1);
}
</script>

<style scoped></style>
