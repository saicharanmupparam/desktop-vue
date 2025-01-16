<template>
    <v-form v-model="form" @submit.prevent="onSubmit">
        <v-container class="bg-surface-light">
            <v-row class="ga-1 align-center" no-gutters>
                <v-text-field clearable variant="solo-filled" class="mb-2" label="Username" :disabled="loading"
                    :rules="[required]" v-model="email"></v-text-field>
                <v-text-field clearable variant="solo-filled" class="mb-2" label="Password" :disabled="loading"
                    :rules="[required]" v-model="password"></v-text-field>
                <v-btn class="bg-primary" variant="outlined" type="submit">Login</v-btn>
            </v-row>
            <v-progress-linear class="bg-primary" :indeterminate="loading"></v-progress-linear>
        </v-container>
    </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import loginService from '../services/login.service';
import type { Login } from '../interfaces';

const form = ref(false);
const loading = ref(false);
const email = ref('')
const password = ref(null)

function onSubmit() {
    if (!email.value) return;
    loading.value = true;
    if (email.value && password.value) {
        verifyUser({ email: email.value, token: password.value })
    } else {
        fetchData(email.value)
    }
}

async function fetchData(email: string) {
    try {
        const { data, error } = await loginService.login({ email });
        console.log('Sign In:', data, error);
        loading.value = false;
    } catch (error) {
        console.error('Sign In Error:', error);
        loading.value = false;
    }
}

async function verifyUser(form: Login) {
    try {
        const { data, error } = await loginService.verify(form);
        console.log('Verify:', data, error);
        loading.value = false;
    } catch (error) {
        console.error('Verify Error:', error);
        loading.value = false;
    }
}

function required(v: string) {
    return !!v || 'Field is required';
}

</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
    .v-row {
        >* {
            width: 100%;
        }
    }
}
</style>
