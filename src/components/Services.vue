<template>
  <section class="services flow">
    <div class="o-wrapper o-centre o-block flow max-width-s">
      <h2>We Do Really Awesome Things</h2>
      <p class="subheading">Lorem ipsum dolor sit amet, <a href="#">link</a> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div class="columns o-wrapper">
      <!-- Loop through the services array from the endpoint  -->
      <div
        v-for="service in services"
        :key="service.id"
        class="o-centre flow"
      >
        <img
          :src="`${service.image}`"
          alt=""
          width="150"
        >
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>

</template>

<script setup>
import { ref, onMounted } from 'vue'
const services = ref([]);

onMounted(() => {
  fetchServices();
});

async function fetchServices() {
  try {
    const response = await fetch("https://api.npoint.io/e51e2b5fbccedada86aa");
    services.value = await response.json();
  } catch (error) {
    console.error("Error fetching services:", error);
  }
}
</script>

<style lang="scss" scoped>
.services {
  padding-block: var(--spacing-2xl);

  @media (min-width: 645px) {
    padding-block: var(--spacing-3xl);
  }
}

  .services .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--spacing-xl);
    padding-block-start: var(--spacing-xl);

    @media (min-width: 645px) {
      padding-block: var(--spacing-2xl);
    }
  }

</style>
  