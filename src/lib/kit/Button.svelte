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

    let mouseX = 0;
    let mouseY = 0;

    export let showGradient: boolean = true;
    export let color: string = "rgba(38, 38, 38, 0.75)";
    export let action: (
        el: MouseEvent & {
            currentTarget: EventTarget & HTMLButtonElement;
        },
    ) => void = () => {};
    let brightColor = C(color).alpha(0.75).lighten(1.5).string();
    let isMouseThere: boolean = false;
    let clicked: boolean = false;

    $: gradient = showGradient
        ? `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${brightColor} 0%, transparent 90%)` // and pseudo element isn't supported in inline css....
        : color;

    $: clickGradient = `radial-gradient(circlew at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 22.37%, rgba(255, 255, 255, 0.25) 63.47%, rgba(255, 255, 255, 0.00) 100%);`;
</script>

<!-- got an action button working :3 -->
<button
    style="--background: {gradient}; --brightColor: {brightColor}; --color: {color}; --opacity: {Number(
        isMouseThere && showGradient,
    )}; --Copacity: {Number(
        clicked && showGradient,
    )}; --Cbackground: {clickGradient};"
    on:mousemove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX = e.clientX - rect.x;
        mouseY = e.clientY - rect.y;
    }}
    on:mouseenter={() => (isMouseThere = true)}
    on:mouseleave={() => (isMouseThere = false)}
    on:click={(e) => action(e)}
    on:click={() => {
        clicked = true;
        setTimeout(() => (clicked = false), 1000);
    }}
>
    <slot>Test</slot>
</button>

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
        overflow: hidden;
        background: var(--color);

        color: p.$text;
        border: none;
        z-index: 1;

        slot {
            position: relative;
        }

        &::before {
            content: "";
            opacity: var(--opacity);
            background: var(--background);
            height: 100%;
            width: 100%;
            position: absolute;
            transition: 0.3s;
        }

        &:active {
            background: var(--Cbackground);
            transition: 0.1s;
        }
    }
</style>
