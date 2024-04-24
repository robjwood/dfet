<template>
  <div class="o-wrapper flow">
    <form
      @submit.prevent="submitForm"
      v-if="!isFormSubmittedSuccessfully"
      class="flow"
      novalidate
    >
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
          rows="5"
          v-model="formData.message"
        ></textarea>
        <small class="help-text">Please enter as much detail as possible</small>        <div v-if="formErrors.message" class="error">{{ formErrors.message }}</div>
      </div>
      <div class="wrapper-submit">
        <CustomButton type="submit">Submit</CustomButton>
      </div>
    </form>
    <div
      v-if="isFormSubmittedSuccessfully"
      class="confirmation"
    >
      <p>Thanks for submitting your details.</p>
    </div>
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

  const isFormSubmittedSuccessfully = ref(false);

  function submitForm() {
    validateForm();

    if (isFormValid()) {
      // Process the form submission
      console.log("Form submitted successfully:", formData.value);
      isFormSubmittedSuccessfully.value = true; // Set the confirmation message flag
    } else {
      console.log("Form has errors. Please fix them.");
      focusOnErrorInput();
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  function validateForm() {
    formErrors.value = {}; // Clear previous errors

    if (!formData.value.name) {
      formErrors.value.name = "Error: Please enter a name";
    }
    if (!formData.value.number) {
      formErrors.value.number = "Error: Please enter a telephone number";
    }
    if (!formData.value.email) {
      formErrors.value.email = "Error: Please enter an email";
    } else if (!emailPattern.test(formData.value.email)) { // Check if email format is correct
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
      background-image: url("/images/required.png");
      background-repeat: no-repeat;
      background-position: right var(--spacing-s) top 12px;
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
      text-align: initial;
    }


    .error {
      color: var(--error);
      font-size: var(--font-size-xxs);
      margin-top: var(--spacing-s);
    }

    .error-input {
      background-image: url("/images/error.png");
      background-repeat: no-repeat;
      background-position: right var(--spacing-s) top 12px;
      border-color: var(--error);
    }

  .help-text {
    color: var(--color-primary-300);
    font-size: var(--font-size-xxs);
    font-weight: 300;
  }

  .wrapper-submit {
    text-align: right;
  }

  .btn--primary {
    width: 100%;

    @media (min-width: 645px) {
      width: auto;
    }
  }

  .confirmation {
    background-color: #e1f3e1;
    border: 1px solid #526a52;
    border-radius: var(--spacing-s);
    color: var(--black);
    margin-block-start: var(--spacing-xl);
    padding-block: var(--spacing-2xl);
    padding-inline: var(--spacing-l);

    @media (min-width: 645px) {
      margin-inline: var(--spacing-l);
    }
  }
  </style>