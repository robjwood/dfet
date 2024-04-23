<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <header>
    <TheNavigation />
  </header>

  <main>
    <article>
      <RouterView />
    </article>
  </main>
  
  <footer>
    <TheFooter />
  </footer>
</template>

<style lang="scss" scoped></style>
