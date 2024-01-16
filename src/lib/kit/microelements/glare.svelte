<!--    
HEY YOU! YES, YOU, THE DEV WHO WANTS TO USE THIS ELEMENT

this element will overflow unless the parent component has the position: relative; property
i have absolutely no clue why that happens
- NRD
-->

<script lang="ts">

    import C from "color";
    let isMouseThere: boolean = false;
    let mouseX: number;
    let mouseY: number;
    let brightColor = C("rgba(100, 100, 100, 0.25)").alpha(0.25).lighten(1.5).string();
    let clicked: boolean = false;
    let bgc: string;

    const mouseMove = (e: any) => {

        const rect = e.currentTarget.getBoundingClientRect();
        mouseX = e.clientX - rect.x;
        mouseY = e.clientY - rect.y;
        if(!clicked) bgc = `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${brightColor} 0%, transparent 90%)`
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="glare"
    style="--bgc: {bgc}; opacity: {Number(isMouseThere)};"
    on:mouseenter={() => isMouseThere = true}
    on:mouseleave={() => isMouseThere = false}
    on:mousemove={mouseMove}

    on:mousedown={() => {

        bgc = "#ffffff40"
        clicked = true;
    }}
    on:mouseup={() =>{

        bgc = `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${brightColor} 0%, transparent 90%)`
        clicked = false;
    }}
/>
<!-- we'll use the mousedown/up things when implementing the ripple animation -->

<style lang="scss">

    @use "$lib/variables.scss" as v;
    div{

        z-index: 69420; // number chosen whilst being high on coffee (don't ask)
        transition: v.$animation-speed;
        width: 120%;
        height: 120%;
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        background: var(--bgc);
    }
</style>