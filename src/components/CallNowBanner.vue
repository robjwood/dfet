<template>
  <section class="banner">
    <div class="o-wrapper" 
      style="max-width: 1089px"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
      <CustomButton href="tel:123-456-7890">Call now</CustomButton>
    </div>
  </section>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue';
</script>

<style lang="scss" scoped>
.banner {
  background-color: var(--color-accent);
  color: var(--white);
}

  .banner > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-base);
  }

    .banner p {
      font-size: var(--font-size-xl);
      font-weight: 500;
    }
</style>
  