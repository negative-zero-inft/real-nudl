<script lang="ts">

    import C from "color";
    let isMouseThere: boolean = false;
    let mouseX: number;
    let mouseY: number;
    let brightColor = C("rgba(100, 100, 100, 0.25)").alpha(0.25).lighten(1.5).string();
    let clicked: boolean = false;

    const mouseMove = (e: any) => {

        const rect = e.currentTarget.getBoundingClientRect();
        mouseX = e.clientX - rect.x;
        mouseY = e.clientY - rect.y;
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    style="opacity: {Number(isMouseThere)}; background: radial-gradient(circle at {mouseX}px {mouseY}px, {brightColor} 0%, transparent 90%)"
    on:mouseenter={() => isMouseThere = true}
    on:mouseleave={() => isMouseThere = false}
    on:mousemove={mouseMove}

    on:mousedown={() => {

        clicked = true;
    }}
    on:mouseup={() =>{

        clicked = false;
    }}
/>
<!-- we'll use the mousedown/up things when implementing the ripple animation -->

<style lang="scss">

    @use "$lib/variables.scss" as v;
    div{

        transition: v.$animation-speed;
        width: 120%;
        height: 120%;
        position: absolute;
        left: 0;
        top: 0;
        border: none;
    }
</style>