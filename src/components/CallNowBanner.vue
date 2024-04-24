<template>
  <section class="banner flow">
    <div class="o-wrapper max-width-l">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
      <CustomButton href="tel:123-456-7890" class="wide">Call now</CustomButton>
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
  padding-block: var(--spacing-xl);
}

  .banner > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-base);
    text-align: center;

    @media (min-width: 645px) {
      flex-direction: inherit;
      text-align: inherit;
    }
}

    .banner p {
      font-size: var(--font-size-xl);
      font-weight: 400;
    }

    .banner a {
      flex-shrink: 0; // Stop the button text wrapping
      width: 100%;

      @media (min-width: 645px) {
        width: auto;
      }
    }


</style>
  