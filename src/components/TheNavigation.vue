<template>
  <nav class="c-nav-primary">
    <input data-function="swipe" id="swipe" type="checkbox">
    <label data-function="swipe" for="swipe">
      <svg class="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="line line1" d="M5 9H27V11H5V9Z" fill="black"/>
        <path class="line line2" d="M5 15H27V17H5V15Z" fill="black"/>
        <path class="line line3" d="M27 21H5V23H27V21Z" fill="black"/>
      </svg>
    </label>

    <div class="wrapper">
      <RouterLink to="/">
        <TheLogo />
      </RouterLink>

      <div class="sidebar">
        <ul>
          <li><RouterLink to="/about-us">About Us</RouterLink></li>
          <li><RouterLink to="/about-you">About You</RouterLink></li>
          <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
          <li><CustomButton href="#contact" purpose="contact" class="wide">Contact</CustomButton></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import TheLogo from '@/components/TheLogo.vue'
  import CustomButton from './CustomButton.vue';
</script>

<style lang="scss" scoped>
  .c-nav-primary input[data-function*="swipe"]:checked + label .line1 {
    transform: rotate(45deg) translate(6px, -10px);
  }

  .c-nav-primary input[data-function*="swipe"]:checked + label .line2 {
    opacity: 0;
  }

  .c-nav-primary input[data-function*="swipe"]:checked + label .line3 {
    transform: rotate(-45deg) translate(-16px, 0px);
  }

  .c-nav-primary {
    margin-bottom: var(--spacing-xl);
  }

  .c-nav-primary [data-state="active"],
  .c-nav-primary [aria-current="page"] {
    font-weight: 500;
  }

    .c-nav-primary input[data-function*="swipe"] {
      display: none;
    }

    .c-nav-primary label[data-function*="swipe"] {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    .c-nav-primary input[data-function*="swipe"]:checked ~ label[data-function*="swipe"] {
      transform: translate3d(-260px,0,0);
    }

    .c-nav-primary input[data-function*="swipe"]:checked ~ .content {
      transform: translate3d(-260px,0,0);
    }

    .c-nav-primary input[data-function*="swipe"]:checked ~ div .sidebar {
      transform: translate3d(0,0,0);
    }

    .c-nav-primary input[data-function*="swipe"]:not(:checked) ~ div .sidebar {
      display: none;
    }

    .c-nav-primary .wrapper {
      display: flex;
      align-items: center;
      width: 100%;
    }

      .c-nav-primary .sidebar {
        transform: translate3d(260px,0px,0px);
        position: absolute;
        width: 260px;
        color: var(--white);
        top: 0;
        right: 0;
        height: 100%;
        transition: all .3s;
      }
    
      .c-nav-primary ul {
        background-color: var(--color-primary-500);
        list-style-type: none;
        display: block;
        padding-block: var(--spacing-base);
        padding-inline: var(--spacing-xl);
        text-align: center;
        height: 100%;
        width: 100%;
      }

      .c-nav-primary a:not([class^="btn"]) {
        color: var(--white);
        display: block;
        font-size: var(--font-size-s);
        padding-block: var(--spacing-base);
        text-decoration: none;
      }

  .wide {
    width: 100%;
  }


  @media (min-width: 645px) {
    .c-nav-primary label[data-function*="swipe"] {
      display: none;
    }

    .c-nav-primary input[data-function*="swipe"]:not(:checked) ~ div .sidebar {
      display: block;
    }

    .c-nav-primary .sidebar {
      transform: inherit;
      position: static;
      width: 100%;
      background-color: transparent;
      height: inherit;
      transition: all 0.3s;
    }
    
    .c-nav-primary ul {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(--spacing-l);
    }

    .c-nav-primary a:not([class^="btn"]) {
      color: var(--color-primary-500);
    }
    .c-nav-primary a:hover {
      text-decoration: underline;
    }
  }
</style>
