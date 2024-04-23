<template>
  <div class="o-wrapper flow">
    <form @submit.prevent="submitForm" class="flow">
      <div class="form-group">
        <label for="name">Your name</label>
        <input
          :class="{ 'error-input': formErrors.name }"
          ref="nameInput"
          type="name"
          id="name"
          name="name"
          placeholder="Please enter your name"
          v-model="formData.name"
        >
        <div v-if="formErrors.name" class="error">{{ formErrors.name }}</div>
      </div>

      <div class="form-group">
        <label for="number">Your Telephone Number</label>
        <input
          :class="{ 'error-input': formErrors.number }"
          ref="numberInput"
          type="tel"
          id="number"
          name="number"
          placeholder="Please enter your telephone number"
          v-model="formData.number"
        >
        <div v-if="formErrors.number" class="error">{{ formErrors.number }}</div>
      </div>

      <div class="form-group">
        <label for="email">Your Email</label>
        <input
          :class="{ 'error-input': formErrors.email }"
          ref="emailInput"
          type="email"
          id="email"
          name="email"
          placeholder="Please enter your email"
          v-model="formData.email"
        >
        <div v-if="formErrors.email" class="error">{{ formErrors.email }}</div>
      </div>


      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea
          :class="{ 'error-input': formErrors.message }"
          ref="messageInput"
          id="message"
          name="message"
          placeholder="Please enter a message"
          v-model="formData.message"
        ></textarea>
        <div v-if="formErrors.message" class="error">{{ formErrors.message }}</div>
      </div>

      <CustomButton type="submit">Submit</CustomButton>
    </form>
  </div>
</template>

<script setup>
import CustomButton from './CustomButton.vue';
import { ref } from 'vue'

const nameInput = ref(null);
const numberInput = ref(null);
const emailInput = ref(null);
const messageInput = ref(null);

const formData = ref({
  name: '',
  number: '',
  email: '',
  message: ''
});

const formErrors = ref({
  name: '',
  number: '',
  email: '',
  message: ''
});

function submitForm() {
  validateForm();

  if (isFormValid()) {
    // Process the form submission
    console.log("Form submitted successfully:", formData.value);
  } else {
    console.log("Form has errors. Please fix them.");
    focusOnErrorInput();
  }
}

function validateForm() {
  formErrors.value = {}; // Clear previous errors

  if (!formData.value.name) {
    formErrors.value.name = "Error: Please enter a name";
  }
  if (!formData.value.number) {
    formErrors.value.number = "Error: Please enter a telephone number";
  }
  if (!formData.value.email) {
    formErrors.value.email = "Error: Please enter a valid email";
  }
  if (!formData.value.message) {
    formErrors.value.message = "Error: Please enter a message";
  }
}

function isFormValid() {
  return Object.values(formErrors.value).every(error => !error);
}

function focusOnErrorInput() {
  // Find the first input field with an error and focus on it
  const errorInput = Object.keys(formErrors.value).find(field => formErrors.value[field]);
  if (errorInput) {
    // Focus on the input field using its reference
    switch (errorInput) {
      case 'name':
        nameInput.value.focus();
        break;
      case 'number':
        numberInput.value.focus();
        break;
      case 'email':
        emailInput.value.focus();
        break;
      case 'message':
        messageInput.value.focus();
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  margin-inline: auto;
  max-width: 580px;
}

  label {
    color: var(--color-primary-700);
    display: block;
    font-size: var(--font-size-xs);
    margin-bottom: var(--spacing-s);
  }

  input,
  textarea {
    border-width: 2px;
    border-style: solid;
    border-color:  var(--grey-100);
    border-radius: 6px;
    font-size: var(--font-size-xs);
    padding: var(--spacing-base);
    padding-inline-end: var(--spacing-xl);
    width: 100%;
    
    &::placeholder {
      color: var(--grey-300);
    }

    &:focus-visible {
      border-color: var(--color-primary-500);
    }
  }


  .form-group {
    position: relative;

    &::after {
      content: "*";
      color: var(--error);
      display: flex;
      place-content: center;
      position: absolute;
      height: 32px;
      width: 32px;
      top: 50px;
      right: 12px;
    }
  }



  .error {
    color: var(--error);
    font-size: var(--font-size-xxs);
    margin-top: var(--spacing-s);
  }

  .error-input {
    border-color: var(--error);
  }
</style>