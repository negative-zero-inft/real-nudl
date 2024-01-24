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
    export let icon: string = "";
    export let text: string = "";
    export let action: (
        el: MouseEvent & {
            currentTarget: EventTarget & HTMLButtonElement;
        },
    ) => void = () => {};
    export let avatar: string = "";

    let clicked: boolean = false;
</script>

<!-- got an action button working :3 maybe better keep this session in the bg, im currently reading some wiki articles :3 <3-->
<button
    style="--color: {color}; width: {width}; --padding: {icon || avatar
        ? 0
        : 12}px; --padding-right: {text && !avatar
        ? 12
        : 0 || (text && avatar)
          ? 10
          : 0}px;"
    on:click={(e) => action(e)}
    on:click={() => {
        clicked = true;
        setTimeout(() => (clicked = false), 1000);
    }}
>
    {#if !disabled}
        <Glare />
    {/if}
    {#if icon}
        <div class="iconContainer">
            <img src={`icons/${icon}.svg`} alt={icon} />
        </div>
    {/if}
    {#if avatar}
        <div class="iconContainer">
            <img class="avatar" src={avatar} alt={avatar} />
        </div>
    {/if}
    {text}
</button>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;

    .avatar {
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }
    .iconContainer {
        width: v.$element-size;
        height: v.$element-size;
        align-items: center;
        justify-content: center;
        display: flex;
        img {
            user-select: none;
        }
    }
    button {
        position: relative;
        display: flex;
        min-width: v.$element-size;
        height: v.$element-size;
        min-height: v.$element-size;
        padding-right: var(--padding-right);
        padding-left: var(--padding);
        justify-content: center;
        align-items: center;
        gap: 1px;
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
