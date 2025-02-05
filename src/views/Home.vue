<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import ViewDialog from '../components/ViewDialog.vue';
</script>

<template>
    <NavBar :isLoggedIn="true" />
    <div class="home">
        <div>
            <ViewDialog title="Profile">
                <div>
                    <input type="text" name="text" placeholder="Text" aria-label="Text">
                    <input type="email" name="email" placeholder="Email" aria-label="Email" autocomplete="email">
                    <input type="number" name="number" placeholder="Number" aria-label="Number">
                    <input type="password" name="password" placeholder="Password" aria-label="Password">
                    <input type="tel" name="tel" placeholder="Tel" aria-label="Tel" autocomplete="tel">
                    <input type="url" name="url" placeholder="Url" aria-label="Url">
                </div>

                <template v-slot:footer>
                    <!-- content for the footer slot -->
                    <button :aria-busy="false" aria-label="Please wait…">Save</button>
                </template>
            </ViewDialog>
            <ViewDialog title="Settings" />
            <ViewDialog title="Logout" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    height: 100%;
}
</style>
