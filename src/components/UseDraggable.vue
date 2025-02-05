<script setup lang="ts">
import { useDraggable } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef<HTMLElement>('el')

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { style } = useDraggable(el, {
    preventDefault: true,
    initialValue: { x: 150, y: 150 },
})
</script>

<template>
    <div ref="el" :style="style" style="position: fixed">
        <slot></slot>
    </div>
</template>