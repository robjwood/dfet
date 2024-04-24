<template>
  <component
    :is="type"
    :href="href"
    :class="[
      'btn--' + purposeClass
    ]"
    :type="computedType"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  purpose: {
    type: String,
    default: 'primary'
  },
  href: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
});

// If there's an href prop, the button should be rendered as an 'a' element, otherwise it's a button element.
const type = computed(() => {
  if (props.href) {
    return 'a';
  } else {
    return 'button';
  }
});

const purposeClass = computed(() => {
  if (props.purpose === 'contact') {
    return 'contact';
  } else {
    return 'primary';
  }
});
</script>

<style lang="scss" scoped>
[class^="btn"] {
  background-color: transparent;
  color: var(--white);
  display: inline-block;
  font-size: var(--font-size-xs);
  padding: var(--spacing-base) var(--spacing-xl);
  border: none;
  border-radius: var(--spacing-s);
  text-decoration: none;
}

  .btn--primary {
    background-color: var(--color-primary-500);
  }

  .btn--contact {
    background-color: var(--color-accent);
  }

</style>