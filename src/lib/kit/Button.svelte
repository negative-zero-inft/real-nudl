<script lang="ts">
    /*
                                         @@@@@
   @@@          @@                     @@@   @@@@
 @@@ @        @@@@@  @@@@@@@@@@@     @@         @@
@@   @@@@@@@@@@   @@@@         @@@  @@           @
@            @     @             @@@@           @@
@                  @               @@    @@@@@@@@
@                  @@               @   @@
@ @@      @@       @                @@  @
@ @@      @@       @                 @  @
@                 @@                    @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
↑ NRD-approved cute kitty :3

THE BUTTON - If it works, don't touch it
 */
    import C from "color";
    import type { MouseEventHandler } from "svelte/elements";

    let mouseX = 0;
    let mouseY = 0;

    export let showGradient: boolean = true;
    export let color: string = "rgba(38, 38, 38, 0.75)";
    export let action: (
        el: MouseEvent & {
            currentTarget: EventTarget & HTMLButtonElement;
        },
    ) => void = () => {};
    let brightColor = C(color).alpha(0.25).lighten(1).hex();

    let isMouseThere: boolean = false;

    $: gradient =
        showGradient && isMouseThere
            ? `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${brightColor} 0%, ${color})`
            : color;
</script>

<!-- got an action button working :3 -->
<div>
    <button
        style="background: {gradient}"
        on:mousemove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX = e.clientX - rect.x;
            mouseY = e.clientY - rect.y;
        }}
        on:mouseenter={() => (isMouseThere = true)}
        on:mouseleave={() => (isMouseThere = false)}
        on:click={(e) => action(e)}
    >
        <slot>Test</slot>
    </button>
</div>

<style lang="scss">
    @use "$lib/colors.scss" as p;
    button {
        position: relative;
        display: flex;
        min-width: 35px;
        height: 35px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        border-radius: 5px;
        cursor: pointer;
        overflow: hidden; /* Ensure the pseudo-element doesn't overflow */

        color: p.$text;
        border: none;
        z-index: 1;

        slot {
            position: relative;
        }
    }
</style>
