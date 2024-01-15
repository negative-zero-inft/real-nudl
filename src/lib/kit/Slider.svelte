<script lang="ts">

    import Glare from "$lib/kit/microelements/glare.svelte";
    let mouseInsideSlider: boolean;
    let sliderPercentage: number; 
    let ticklingSlider: boolean = false;

    const sliderMouseMove = (e: any) =>{

        const rect = e.currentTarget.getBoundingClientRect(); 
        mouseInsideSlider = e.clientY - rect.top < rect.height && e.clientX - rect.left < rect.width + 10 && e.clientX > rect.left - 10;
        const relativeLeft = e.clientX - rect.left;
        if(mouseInsideSlider && ticklingSlider){
            
            sliderPercentage = Math.min(Math.max(relativeLeft / rect.width * 100, 0), 100);
            console.log(sliderPercentage);
        }
    }
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="juiceContainer" on:mousedown={() => ticklingSlider = true} on:mouseup={() => ticklingSlider = false} on:mousemove={e => sliderMouseMove(e)}>
    <div class="juice" style="overflow: hidden; --width: {sliderPercentage}%;"><Glare/></div>
    <div class="iconContainer">
        <img src="/icons/bug.svg" alt="bug">
    </div>
</div>
<style lang="scss"> 
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    .juiceContainer {
        background-color: c.$top-level-solid;
        height: v.$element-size;
        border-radius: v.$radius-l1; 
        overflow: hidden;
        display: flex;
        flex-direction: row;
        width: 100%; // the size is supposed to be dictated by the container lol xd
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
    .iconContainer{

        width: v.$element-size;
        height: v.$element-size;
        align-items: center;
        justify-content: center;
        display: flex;
        position: absolute;
        img {
            user-select: none;
        }
        pointer-events: none;
    }
</style>
