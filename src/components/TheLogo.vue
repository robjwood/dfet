<template>
  <div class="logo">
    <img src="/images/logo.png" alt="Code TEST">
  </div>
</template>

<style lang="scss" scoped>
.logo {
  padding-inline: var(--spacing-base);

  img {
    width: 77px;
  }

  @media (min-width: 645px) {
    img {
      min-width: 120px;
    }
  }
}
</style>
  