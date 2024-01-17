<!--    
HEY YOU! YES, YOU, THE DEV WHO WANTS TO USE THIS ELEMENT

this element will overflow unless the parent component has the position: relative; property
i have absolutely no clue why that happens
- NRD
-->

<script lang="ts">
    import { ripple } from "$lib/deps/ripple";
    import "$lib/deps/ripple/ripple.css";

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
    use:ripple
    on:mouseenter={() => isMouseThere = true}
    on:mouseleave={() => isMouseThere = false}
    on:mousemove={mouseMove}

    on:mousedown={() => {

        bgc = `#00000000`
        clicked = true;
    }}
    on:mouseup={() =>{

        bgc = `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${brightColor} 0%, transparent 90%)`
        clicked = false;
    }}>
</div>
<div class="ripple" style="--mouseX: {mouseX}; --mouseY: {mouseY};"/> 
<!--->
<!-- we'll use the mousedown/up things when implementing the ripple animation https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/ https://codepen.io/ainalem/pen/LqvBWO https://codepen.io/ayoisaiah/pen/GWwabJ use these examples to recreate-->
<!-- maybe that code pen.io is more useful wdym and with that use pseudo element because css likes to mess with us -->
<style lang="scss">

    @use "$lib/variables.scss" as v;
    div{

        z-index: 69420; // number chosen whilst being high on coffee (don't ask) xdddd
        transition: v.$animation-speed;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        background: var(--bgc); // btw don't use rem, it's hard to work with in ou oke :3 <3 r setup lol <3
    }
    .ripple{
        --ripple-color: radial-gradient(circle at 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 22.37%, rgba(255, 255, 255, 0.25) 63.47%, rgba(255, 255, 255, 0.00) 100%);
        border-radius: 50%;
        filter: blur(6px);
        width: 100%;
        height: 100%;
        transform: scale(0);
        opacity: 0%; 
        pointer-events: none;
        transition: cubic-bezier(1, 0, 0, 0);
    }
</style>