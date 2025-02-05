<template>
    <UseDraggable>
        <div :id="dialogId" popover=manual class="flex column">
        <header>
            <p>
                <strong>🗓️ {{ props.title }}!</strong>
            </p>
            <button class="icon" :popovertarget="dialogId" popovertargetaction="hide">
                <span aria-hidden="true">❌</span>
            </button>
        </header>
        <div class="flex1 o-auto">
            <slot></slot>
        </div>
        <footer>
            <slot name="footer"></slot>
            <button :popovertarget="dialogId" popovertargetaction="hide">Close</button>
        </footer>
    </div>
    </UseDraggable>
</template>

<script lang="ts" setup>
import UseDraggable from './UseDraggable.vue';


const props = defineProps(['title', 'content'])
const dialogId = (props.title as string).toLowerCase()
console.log(props.title)
</script>


<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

footer {
    display: flex;
    justify-content: flex-end;

    button:not(:first-child) {
        margin-left: 1rem;
    }
}

button.icon {
    font-size: 100%;
    transition-duration: 0.5s;
    background: none;
    border: none;
    padding: 0 5px;

    &:hover,
    &:focus {
        background: var(--pico-primary-background);
    }
}

[popover] {
    resize: both;
    border: 1px solid #000000;
    color: var(--pico-background-color);
    font-weight: 400;
    padding: 1rem;
    line-height: 1.4;
    gap: 1rem;
    max-width: 50ch;
}

[popover]:popover-open {
    display: flex;
}


/* Animating the popover in */
/*   0. BEFORE-OPEN STATE   */
@starting-style {
    [popover]:popover-open {
        translate: 0 -22rem;
    }
}

/*   IS-OPEN STATE   */
[popover]:popover-open {
    translate: 0 0;
}

/*   EXIT STATE   */
[popover] {
    transition: translate 0.7s ease-out, overlay 0.7s ease-out, display 0.7s ease-out allow-discrete;
    translate: 0 50rem;
}
</style>