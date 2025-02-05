<template>
  <NavBar :isLoggedIn="false" />
  <form @submit.prevent="onSubmit">
    <fieldset role="search">
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        autocomplete="email"
        :disabled="toggle"
        v-model="email"
      />
      <input type="submit" value="Get OTP" :disabled="toggle" />
    </fieldset>

    <fieldset role="search" v-if="toggle">
      <input
        type="text"
        name="otp"
        placeholder="Login Code"
        v-model="password"
      />
      <input type="submit" value="Verify OTP" />
    </fieldset>

    <!-- Indeterminate Progress Bar -->
    <progress v-if="loading"></progress>

    <!-- Determinate Progress Bar -->
    <progress v-else value="0" max="100"></progress>
  </form>

  <CreateUserDialog
    :isDialog="isDialog"
    @close-handler="closeDialog"
    @create-user="createUser"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import loginService from '../services/login.service';
import type { Login, User } from '../interfaces';
import NavBar from '../components/NavBar.vue';
import CreateUserDialog from '../components/CreateUserDialog.vue';

const loading = ref(false);
const email = ref('');
const password = ref('');
const toggle = ref(false);
const isDialog = ref(false);
const router = useRouter();

async function onSubmit() {
  if (!email.value) return;
  loading.value = true;

  try {
    if (email.value && password.value) {
      await verifyUser({ email: email.value, token: password.value });
    } else {
      await fetchData(email.value);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    loading.value = false;
  }
}

async function fetchData(email: string) {
  try {
    const { data, error } = await loginService.login({ email });
    if (error) {
      console.log('AuthApiError: Signups not allowed for OTP', error);
      isDialog.value = true;
    } else {
      console.log('Sign in Try', data);
      toggle.value = true;
    }
  } catch (error) {
    console.error('Sign In Error:', error);
  } finally {
    loading.value = false;
  }
}

async function verifyUser(form: Login) {
  try {
    const { data, error } = await loginService.verify(form);
    if (data) {
      localStorage.setItem('session', JSON.stringify(data.user?.user_metadata));
      router.push('home');
    } else {
      console.error('Verify Error:', error);
    }
  } catch (error) {
    console.error('Verify Error:', error);
  } finally {
    loading.value = false;
  }
}

async function createUser(event: User) {
  loading.value = true;
  try {
    const { data, error } = await loginService.signUp(event);
    if (data) {
      closeDialog();
      toggle.value = true;
      console.log('createUser:', data);
    } else {
      console.error('SignUp Error:', error);
    }
  } catch (error) {
    console.error('SignUp Error:', error);
  } finally {
    loading.value = false;
  }
}

function closeDialog() {
  isDialog.value = false;
}
</script>

<style lang="scss" scoped></style>
