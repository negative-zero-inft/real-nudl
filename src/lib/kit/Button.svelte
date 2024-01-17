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
    import Glare from "./microelements/glare.svelte";

    export let color: string = "#1C1C1C"; // make it use colors defined in materials.scss
    export let disabled: boolean = false; // for later
    export let width: string = "max-content";
    export let action: (
        el: MouseEvent & {
            currentTarget: EventTarget & HTMLButtonElement;
        },
    ) => void = () => {};

    let clicked: boolean = false;
</script>

<!-- got an action button working :3 -->
<button
    style="--color: {color}; --w: {width}"
    on:click={(e) => action(e)}
    on:click={() => {
        clicked = true;
        setTimeout(() => (clicked = false), 1000);
    }}>

    {#if !disabled}
        <Glare/>
    {/if}
    <slot></slot>
</button>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    
    button {
        position: relative;
        display: flex;
        min-width: v.$element-size;
        width: var(--w);
        height: v.$element-size;
        min-height: v.$element-size;
        padding: v.$spacing-l2;
        justify-content: center;
        align-items: center;
        gap: v.$spacing-l1;
        border-radius: v.$radius-l1;
        overflow: hidden;
        background-color: var(--color);
        cursor: pointer;
        color: c.$text;
        @include v.standard-text();
        border: none;
        z-index: 1;

        slot {
            position: relative;
        }
    }
</style>
