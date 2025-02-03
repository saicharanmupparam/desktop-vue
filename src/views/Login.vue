<template>
    <NavBar :isLoggedIn="false"/>
    <form @submit.prevent="onSubmit">
        <fieldset role="search">
            <input name="email" type="email" placeholder="Enter your email" autocomplete="email" :disabled="toggle"
                v-model="email" />
            <input type="submit" value="Get OTP" :disabled="toggle" />
        </fieldset>

        <fieldset role="search" v-if="toggle">
            <input type="password" name="password" placeholder="Password" v-model="password" />
            <input type="submit" value="Verify OTP" />
        </fieldset>

        <!-- Indeterminate Progress Bar -->
        <progress v-if="loading"></progress>

        <!-- Determinate Progress Bar -->
        <progress v-else value="0" max="100"></progress>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import loginService from "../services/login.service";
import type { Login } from "../interfaces";
import NavBar from "../components/NavBar.vue";

const loading = ref(false);
const email = ref("");
const password = ref(null);
const toggle = ref(false);
const router = useRouter();

function onSubmit() {
    if (!email.value) return;
    loading.value = true;
    if (email.value && password.value) {
        verifyUser({ email: email.value, token: password.value });
    } else {
        fetchData(email.value);
    }
}

async function fetchData(email: string) {
    try {
        const { data, error } = await loginService.login({ email });
        toggle.value = true;
        console.log("Sign In:", data, error);
        // loading.value = false;
    } catch (error) {
        console.error("Sign In Error:", error);
        // loading.value = false;
    }
}

async function verifyUser(form: Login) {
    try {
        const { data, error } = await loginService.verify(form);
        console.log("Verify:", data, error);
        loading.value = false;
        router.push("home");
    } catch (error) {
        console.error("Verify Error:", error);
        loading.value = false;
    }
}
</script>

<style lang="scss" scoped></style>
