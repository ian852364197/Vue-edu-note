<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="btn navbar-brand">
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
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const pages = ref(['ref', 'bind', 'event', 'vfor', 'computed', 'component']);
</script>

<style scoped></style>
