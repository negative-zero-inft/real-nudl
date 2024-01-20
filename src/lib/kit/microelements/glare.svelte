<!--    
HEY YOU! YES, YOU, THE DEV WHO WANTS TO USE THIS ELEMENT

this element will overflow unless the parent component has the position: relative; property
i have absolutely no clue why that happens
- NRD
-->

<script lang="ts">
    import { ripple } from "$lib/deps/ripple";
    import "$lib/deps/ripple/ripple.css";

    let isMouseThere: boolean = false;
    let mouseX: number;
    let mouseY: number;
    let bgc: string;
    let rectWidth: number;
    let rippleBgc: string;

    const mouseMove = (e: any) => {

        const rect = e.currentTarget.getBoundingClientRect();
        rectWidth = rect.width;
        mouseX = e.clientX - rect.x;
        mouseY = e.clientY - rect.y;
        bgc = `radial-gradient(${rectWidth * 1.2}px at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.00) 100%)`
        rippleBgc = `radial-gradient(${rectWidth * 1.2}px at 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 22.37%, rgba(255, 255, 255, 0.25) 63.47%, rgba(255, 255, 255, 0.00) 100%);`
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="glare"
    style="--bgc: {bgc}; --ripple-duration: {rectWidth / 3000}s; opacity: {Number(isMouseThere)}; --ripple-bgc: {rippleBgc}"
    on:mouseenter={() => isMouseThere = true}
    on:mouseleave={() => isMouseThere = false}
    on:mousemove={mouseMove}
    use:ripple>
</div>
<!--->
<!-- we'll use the mousedown/up things when implementing the ripple animation https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/ https://codepen.io/ainalem/pen/LqvBWO https://codepen.io/ayoisaiah/pen/GWwabJ use these examples to recreate-->
<!-- maybe that code pen.io is more useful wdym and with that use pseudo element because css likes to mess with us -->
<style lang="scss">

    @use "$lib/variables.scss" as v;
    div{

        z-index: 69420; // number chosen whilst being high on coffee (don't ask) xdddd
        transition: 0.5s;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        border: none;
        background: var(--bgc); // btw don't use rem, it's hard to work with in ou oke :3 <3 r setup lol <3
        --ripple-color: radial-gradient(circle at 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 22.37%, rgba(255, 255, 255, 0.25) 63.47%, rgba(255, 255, 255, 0.00) 100%);
    }
</style>