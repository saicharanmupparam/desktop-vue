<template>
  <details class="dropdown" :open="detailsOpen" @click="toggleDropdown">
    <summary role="button">
      {{ items.menuName }}
    </summary>
    <ul dir="rtl">
      <template v-if="items.listWithKeys">
        <div v-for="item in items.listWithKeys">
          <li>
            <button
              class="outline"
              :key="item.key"
              @click="toggleDropdown"
              :popovertarget="item.key"
            >
              {{ item.value }}
            </button>
          </li>
        </div>
      </template>
      <template v-else>
        <div v-for="(item, index) in items.list">
          <li>
            <button
              class="outline"
              :key="index"
              @click="toggleDropdown"
              :popovertarget="item"
            >
              {{ item }}
            </button>
          </li>
        </div>
      </template>
    </ul>
  </details>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { DropDown } from "../interfaces";

defineProps<{ items: DropDown }>();

const detailsOpen = ref(false);

function toggleDropdown() {
  return (detailsOpen.value = !detailsOpen.value);
}
</script>

<style lang="scss">
@use "@picocss/pico/scss/pico";

nav li button {
  border: none;
}

details.dropdown summary + ul[dir="rtl"] {
  right: -15px;
}
</style>
