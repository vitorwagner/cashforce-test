<script setup>
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <Content />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  width: 100%;
}
</style>
