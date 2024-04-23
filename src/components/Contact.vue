<template>
  <section id="contact" class="o-wrapper flow"
    style="max-width: 718px"
  >
    <h2>Contact About Awesomeness</h2>
    <p class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    
    <ContactForm />
  </section>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<style lang="scss" scoped>
blockquote > div {
  display: flex;
  gap: var(--spacing-l);
}

  blockquote .quote {
    margin-top: var(--spacing-s);
  }
  
  blockquote .quote,
  blockquote svg {
    width: 50px;
    height: 33px;
  }
</style>
  