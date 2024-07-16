<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();

const destination = ref('');

const pages = ref(['ref', 'bind', 'event', 'vfor', 'computed', 'component']);

watch(
  () => destination.value,
  () => {
    router.push(destination.value);
  }
);
</script>

<template>
  <header>
    <div>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>
            <select v-model="destination">
              <option v-for="pageName in pages" :key="pageName" :value="pageName">
                {{ pageName }}
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
