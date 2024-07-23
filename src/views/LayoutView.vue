<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="btn navbar-brand" @click="destination = ''">
          <RouterLink to="/">Home</RouterLink>
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="pageName in pages" :key="pageName">
              <button class="btn nav-item">
                <RouterLink :to="pageName">{{ pageName }}</RouterLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div>
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
    </div> -->
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
