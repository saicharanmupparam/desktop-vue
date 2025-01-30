<template>
    <div class="home h-100 d-flex flex-column">

        <div class="content flex-sm-1-1-0">
            <Dialog />
        </div>

        <footer class="menu-bar">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" density="default" v-bind="props" icon="mdi-menu"></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                        <v-list-item-title>
                            <v-btn :icon="`mdi-${item.title}`" variant="text"></v-btn>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <div class="menus flex-sm-1-1-0"> Menu Items </div>
            <v-btn class="bg-primary" variant="outlined" type="button" @click="logout">Logout</v-btn>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Dialog from '../components/Dialog.vue'

const router = useRouter();
const items = [
    { title: 'mdiNotes' },
    { title: 'mdiAccount' },
    { title: '' },
    { title: '' },
]

function logout() {
    router.push('/')
}
</script>

<style lang="scss" scoped>
.content {
    border: 1px solid;
    border-radius: 5px;
}

footer.menu-bar {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
</style>