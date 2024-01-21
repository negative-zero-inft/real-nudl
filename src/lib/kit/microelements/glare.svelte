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
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="glare"
    style="--bgc: {bgc};  opacity: {Number(isMouseThere)};"
    on:mouseenter={() => isMouseThere = true}
    on:mouseleave={() => isMouseThere = false}
    on:mousemove={mouseMove}
    use:ripple>
</div>

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
        background: var(--bgc);
        --ripple-color: radial-gradient(circle at 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 22.37%, rgba(255, 255, 255, 0.25) 63.47%, rgba(255, 255, 255, 0.00) 100%);
    }
</style>