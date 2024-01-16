<script lang="ts">

    import Glare from "$lib/kit/microelements/glare.svelte";
    let mouseInsideSlider: boolean;
    let ticklingSlider: boolean = false;
    
    export let sliderPercentage: number = 0; 
    export let icon: string = "bug";
    export let title: string = "";
    export let subtitle: string = "";
    export let width: string = "100px"; // string because autism

    const sliderMouseMove = (e: any) =>{

        const rect = e.currentTarget.getBoundingClientRect(); 
        mouseInsideSlider = e.clientY - rect.top < rect.height && e.clientX - rect.left < rect.width + 10 && e.clientX > rect.left - 10;
        const relativeLeft = e.clientX - rect.left;
        if(mouseInsideSlider && ticklingSlider){
            
            sliderPercentage = Math.min(Math.max(relativeLeft / rect.width * 100, 0), 100);
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="juiceContainer" style="--w: {width}" on:mousedown={(e) => {ticklingSlider = true; sliderMouseMove(e)}} on:mouseup={() => ticklingSlider = false} on:mousemove={e => sliderMouseMove(e)}>

    <Glare/>
    <div class="juice" style="overflow: hidden; --width: {sliderPercentage}%;"></div>
    <div class="decors">

        <div class="iconContainer">
            <img src={`/icons/${icon}.svg`} alt={icon}>
        </div>
        <div class="textDivider">

            <div class="title">{title}</div>
            <div class="subtitle">{subtitle}</div>
        </div>
    </div>
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    @import "/static/global.scss";

    .juiceContainer {
        background-color: c.$top-level-solid;
        height: v.$element-size;
        border-radius: v.$radius-l1; 
        overflow: hidden;
        display: flex;
        flex-direction: row;
        width: var(--width); // the size is supposed to be dictated by the container
        position: relative;
    }
    .juice {
        height: 100%;
        width: var(--width); 
        background-color: c.$accent;
        border-radius: v.$radius-l1; 
        overflow: visible; 
        position: relative;
        &::before {
            content: "";
            opacity: var(--opacity);
            background: radial-gradient(circle at var(--x)px var(--y)px, rgba(255, 255, 255, 0.4) 0%, transparent 90%);
            height: 100%;
            width: 100%;
            position: absolute;
            transition: v.$animation-speed;
        }
    }
    .decors{

        display: flex;
        flex-direction: row;
        position: absolute;
        pointer-events: none;
        align-items: center;
        gap: 1px;
    }
    .title{

        color: c.$text;
        @include standard-text();
    }
    .subtitle{

        color: c.$text-sec;
        @include standard-text();
    }
    .textDivider{

        display: flex;
        flex-direction: row;
        gap: 12px;
    }
</style>
