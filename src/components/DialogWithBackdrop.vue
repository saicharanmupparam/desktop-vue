<template>
    <button @click="openDialog">Open Dialog</button>
    <dialog ref="myDialog" @click.self="closeDialog">
        <article>
            <header>
                <button aria-label="Close" rel="prev" @click="closeDialog">✖</button>
                <p>
                    <strong>🗓️ Thank You for Registering!</strong>
                </p>
            </header>
            <p>
                We're excited to have you join us for our upcoming event. Please arrive at the museum on time to
                check in and get started.
            </p>
            <ul>
                <li>Date: Saturday, April 15</li>
                <li>Time: 10:00am - 12:00pm</li>
            </ul>
        </article>
    </dialog>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const myDialog = ref();

const openDialog = () => {
    myDialog.value!.show();
};

const closeDialog = () => {
    myDialog.value!.close();
};
</script>