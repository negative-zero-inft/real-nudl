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
    export let action: (
        el: MouseEvent & {
            currentTarget: EventTarget & HTMLButtonElement;
        },
    ) => void = () => {};

    let clicked: boolean = false;
</script>

<!-- got an action button working :3 -->
<button
    style="--color: {color}"
    on:click={(e) => action(e)}
    on:click={() => {
        clicked = true;
        setTimeout(() => (clicked = false), 1000);
    }}
>
<Glare/>
    <slot></slot>
</button>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    @import "/static/global.scss";
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
        overflow: hidden;
        background-color: var(--color);

        color: c.$text;
        @include standard-text();
        border: none;
        z-index: 1;

        slot {
            position: relative;
        }
    }
</style>
