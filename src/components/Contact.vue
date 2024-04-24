<template>
  <section id="contact" class="contact">
    <div class="o-wrapper o-centre flow max-width-s">
      <h2>Contact About Awesomeness</h2>
      <p class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ContactForm />
    </div>
  </section>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<style lang="scss" scoped>
.contact {
  padding-block: var(--spacing-2xl);

  @media (min-width: 645px) {
    padding-block: var(--spacing-3xl);
  }
}
</style>
  