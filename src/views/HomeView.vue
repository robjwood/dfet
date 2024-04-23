<template>
  <Intro class="intro" />
  <CallNowBanner />
  <Services />
  <Quote />
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
.intro {
  margin-block-end: var(--spacing-2xl);
}
</style>