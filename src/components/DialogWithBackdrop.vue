<template>
  <dialog :open="props.isDialog">
    <article>
      <header>
        <button aria-label="Close" rel="prev" @click="$emit('closeHandler')"></button>
        <p>
          <strong>{{props.title}}:</strong>
        </p>
      </header>

      <slot></slot>

      <footer>
        <button class="secondary" @click="$emit('closeHandler')">Cancel</button>
        <slot name="footer"></slot>
      </footer>
    </article>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps(["isDialog", "title"]);
</script>

<style lang="scss" scoped>
@use "@picocss/pico/scss/pico";
</style>
