<template>
  <div class="footer">
    <div class="o-wrapper">
      <p>&copy; 2021 <a href="https://www.dotcentric.co.uk/">Dotcentric</a> Code Test - All rights reserved - Call 01234 432 123</p>
      <img src="/images/logo-footer.png" alt="Code TEST">
    </div>
  </div>
</template>

<script setup>
import TheLogo from '@/components/TheLogo.vue'
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-primary-500);
  color: var(--white);
  margin-block-start: var(--spacing-xl);
  padding-block: var(--spacing-2xl);
  padding-inline: var(--spacing-l);
}

  .footer > * {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-xl);

    @media (min-width: 645px) {
      flex-direction: row;
    }
  }
</style>
