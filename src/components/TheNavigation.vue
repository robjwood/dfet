<template>
  <nav>
    <RouterLink to="/">
      <TheLogo />
    </RouterLink>
    <ul>
      <li><RouterLink to="/about-us">About Us</RouterLink></li>
      <li><RouterLink to="/about-you">About You</RouterLink></li>
      <li><RouterLink to="/about">Portfolio</RouterLink></li>
    </ul>
    <button type="button">Contact</button>
  </nav>
</template>

<script setup>
import TheLogo from '@/components/TheLogo.vue'
</script>

<style lang="scss" scoped>
/*
nav {
  background-color: #f2f2f2;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: #333;
  padding: 5px;
}

a:hover {
  background-color: #333;
  color: #fff;
}
*/
</style>
