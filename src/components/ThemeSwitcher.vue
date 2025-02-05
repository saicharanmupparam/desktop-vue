<template>
    <a href="#" @click="toggleTheme">
        <img :src="themeImage" alt="Toggle Theme" class="theme-transition">
    </a>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import lightModeSvg from '../assets/light-mode.svg';
import nightModeSvg from '../assets/night-mode.svg';

const theme = ref('light');

onMounted(() => {
    const savedTheme = document.documentElement.getAttribute('data-theme');
    theme.value = savedTheme || (new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme.value);
});

const themeImage = computed(() => theme.value === 'light' ? lightModeSvg : nightModeSvg);

function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme.value);
}
</script>

<style scoped lang="scss">
a {
    cursor: pointer;
    display: flex;
    align-items: center;
}

a::before {
    height: 1.125rem;
    margin-inline: var(--pico-nav-element-spacing-horizontal);
    border-left: var(--pico-border-width) solid var(--pico-form-element-border-color);
    content: "";
}

.theme-transition {
    transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
}

[data-theme="dark"] .theme-transition {
    filter: invert(1);
    transform: rotate(360deg);
}

[data-theme="light"] .theme-transition {
    transform: rotate(0deg);
}
</style>
