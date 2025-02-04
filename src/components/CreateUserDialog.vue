<script setup lang="ts">
import { computed, ref } from "vue";
import DialogWithBackdrop from "./DialogWithBackdrop.vue";

const props = defineProps(["isDialog"]);

const firstname = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");
const phoneNumber = ref("");
const helpers = {
  valid: "Looks good!",
  invalid: "Please provide a valid value!",
};

const user = computed(() => {
  return {
    email: email.value,
    password: password.value,
    phone: phoneNumber.value,
    firstname: firstname.value,
    lastname: lastname.value,
  };
});

const validateEmail = (value: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

const confirmRef = computed(() => {
  return !validateEmail(email.value) ||
    !password.value ||
    !phoneNumber.value ||
    !firstname.value ||
    !lastname.value
    ? true
    : false;
});

// First Name
const firstNameRef = computed(() => {
  return !firstname.value ? true : false;
});

// Last Name
const lastNameRef = computed(() => {
  return !lastname.value ? true : false;
});

// Email
const emailHelper = computed(() => {
  return !validateEmail(email.value) ? helpers.invalid : helpers.valid;
});

const emailRef = computed(() => {
  return !validateEmail(email.value) ? true : false;
});

// Password
const passwordHelper = computed(() => {
  return !password.value ? helpers.invalid : helpers.valid;
});

const passwordRef = computed(() => {
  return !password.value ? true : false;
});

// Phone Number
const phoneNumberHelper = computed(() => {
  return !phoneNumber.value ? helpers.invalid : helpers.valid;
});

const phoneNumberRef = computed(() => {
  return !phoneNumber.value ? true : false;
});
</script>

<template>
  <DialogWithBackdrop :title="'Create an Account'" :isDialog="props.isDialog">
    <form>
      <fieldset>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          aria-label="First Name"
          :aria-invalid="firstNameRef"
          aria-describedby="firstname-helper"
          v-model="firstname"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          aria-label="Last Name"
          :aria-invalid="lastNameRef"
          aria-describedby="lastname-helper"
          v-model="lastname"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          autocomplete="email"
          :aria-invalid="emailRef"
          aria-describedby="email-helper"
          v-model="email"
        />
        <small id="email-helper">{{ emailHelper }}</small>
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          :aria-invalid="passwordRef"
          aria-describedby="password-helper"
          v-model="password"
        />
        <small id="password-helper">{{ passwordHelper }}</small>
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          aria-label="Number"
          :aria-invalid="phoneNumberRef"
          aria-describedby="phone-helper"
          v-model="phoneNumber"
        />
        <small id="phone-helper">{{ phoneNumberHelper }}</small>
      </fieldset>
    </form>

    <template v-slot:footer>
      <button @click.prevent="$emit('createUser', user)" :disabled="confirmRef">
        Confirm
      </button>
    </template>
  </DialogWithBackdrop>
</template>
