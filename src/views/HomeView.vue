<template>
  <main class="flow">
    <h1>We Do Awesome Things</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    
    <form>
      <label for="code">Enter your secret code</label>
      <input type="code" id="code" name="code">
      <button type="submit">Book</button>
    </form>
    
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
      <button type="button">Call now</button>
    </div>

    <h2>We Do Really Awesome Things</h2>
    <p>Lorem ipsum dolor sit amet, <a href="#">link</a> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <div>
      <!-- Loop through the services array from the endpoint  -->
      <div
        v-for="service in services"
        :key="service.id"
      >
        <img
          :src="service.image"
          :alt="service.image"
          width="60"
        >
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>

    <blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <cite>Roy Barber - Dotcentric</cite>
    </blockquote>

    <h2>Contact About Awesomeness</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <form>
      <label for="name">Your name</label>
      <input type="name" id="name" name="name" placeholder="Please enter your name">

      <label for="number">Your Telephone Number</label>
      <input type="number" id="number" name="number" placeholder="Please enter your telephone number">

      <label for="email">Your Email</label>
      <input type="email" id="email" name="email" placeholder="Please enter your email">

      <label for="message">Your Message</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">Submit</button>
    </form>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const services = ref([]);

onMounted(() => {
  fetchServices();
});

async function fetchServices() {
  try {
    const response = await fetch("https://api.npoint.io/e51e2b5fbccedada86aa");
    services.value = await response.json();
  } catch (error) {
    console.error("Error fetching services:", error);
  }
}


</script>