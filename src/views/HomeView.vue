<template>
  <Intro />

  <CallNowBanner />

  <Services />

  <Quote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <template #cite>Roy Barber - Dotcentric</template>
  </Quote>

  <Contact />

</template>

<script setup>
import CallNowBanner from '@/components/CallNowBanner.vue';
import Contact from '@/components/Contact.vue';
import CustomButton from '@/components/CustomButton.vue';
import Intro from '@/components/Intro.vue';
import Quote from '@/components/Quote.vue'
import Services from '@/components/Services.vue'
</script>

<style lang="scss" scoped>
</style>