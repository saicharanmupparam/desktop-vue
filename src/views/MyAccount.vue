<template>
    Account details Works

    <br />
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.username }} - {{ user.firstname }} {{ user.lastname }}
            {{ user.created_at }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { supabase } from '../utils/supabase';
import type { User } from '../interfaces';

const users = ref<User[]>([]);

async function getTodos() {
    let { data: vue_users } = await supabase
        .from('vue_users')
        .select('*')
        .returns<User[]>();
    users.value = vue_users as User[];
    console.log(users, 'vue_users');
}

onMounted(() => {
    getTodos();
});
</script>
