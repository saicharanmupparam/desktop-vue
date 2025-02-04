<template>
    <nav>
        <ul>
            <li><strong>{{ isLoggedIn ? `Hello ${user}` : 'Login To Profile' }}</strong></li>
        </ul>
        <ul>
            <li v-if="isLoggedIn">
                <DropDown :items="dropdown" />
            </li>
            <li>
                <ThemeSwitcher />
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { DropDown as DD } from "../interfaces";
import DropDown from "./DropDown.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

defineProps<{ isLoggedIn: boolean }>();

const dropdown: DD = {
    menuName: "Account",
    listWithKeys: [
        {
            key: "profile",
            value: "Profile",
        },
        {
            key: "settings",
            value: "Settings",
        },
        {
            key: "logout",
            value: "Log Out",
        },
    ],
};

const session = ref(JSON.parse(localStorage.getItem('session') || '{}'));
const user = ref(session.value.first_name);

watch(session, (newSession) => {
    user.value = newSession.first_name;
});
</script>
