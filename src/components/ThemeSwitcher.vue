<template>
    <a href="#" class="toggle-theme" @click="toggleTheme()">{{ getToggle() }}</a>
</template>

<script setup lang="ts">
function getToggle() {
    const rootEl = document.documentElement;
    if (rootEl.getAttribute('data-theme')?.includes('light')) {
        return '🌞';
    }

    return '🌜';
}

function toggleTheme() {
    const rootEl = document.documentElement;
    const themeButton = document.querySelector('.toggle-theme')!;

    if (rootEl.getAttribute('data-theme')?.includes('light')) {
        rootEl.setAttribute('data-theme', 'dark')
        themeButton.textContent = '🌜';
    } else {
        rootEl.setAttribute('data-theme', 'light')
        themeButton.textContent = '🌞';
    }
}
</script>

<style lang="scss">
.toggle-theme {
    cursor: pointer;
    border: 1px solid;
    border-radius: 10px;

    &:hover {
        --pico-text-decoration: none
    }
}
</style>