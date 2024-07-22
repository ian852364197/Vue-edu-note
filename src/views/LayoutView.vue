<template>
  <header>
    <div>
      <nav>
        <ul>
          <li>
            <button @click="destination = ''"><RouterLink to="/">Home</RouterLink></button>
          </li>
          <li>
            <select v-model="destination">
              <option v-for="pageName in pages" :key="pageName" :value="pageName">
                {{ pageName }}
              </option>
            </select>
          </li>
          <li v-for="pageName in pages" :key="pageName">
            <RouterLink :to="pageName">{{ pageName }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();

const destination = ref('');

const pages = ref(['ref', 'bind', 'event', 'vfor', 'computed', 'component']);

watch(
  () => destination.value,
  () => {
    if (destination.value) {
      router.push(destination.value);
    }
  }
);
</script>

<style scoped></style>
