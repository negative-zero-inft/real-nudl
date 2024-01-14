<script lang="ts">
    let isMouseThere: boolean;

    let mouseX: number, mouseY: number;
    let mouseInsideSlider: boolean;
    let sliderPercentage: number; 
    let ticklingSlider: boolean = false;
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="juiceContainer" on:mousedown={() => ticklingSlider = true} on:mouseup={() => ticklingSlider = false} on:mousemove={(e) =>{

        const rect = e.currentTarget.getBoundingClientRect(); 
        mouseX = e.clientX - rect.x;
        mouseY = e.clientY - rect.y;
        mouseInsideSlider = e.clientY - rect.top < rect.height && e.clientX - rect.left < rect.width;
        const relativeLeft = e.clientX - rect.left;
        if(mouseInsideSlider && ticklingSlider){
            
            sliderPercentage = relativeLeft / rect.width * 100;
        }
    }}>
    <div class="juice"  on:mousemove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX = e.clientX - rect.x;
        mouseY = e.clientY - rect.y;
    }}
    on:mouseenter={() => (isMouseThere = true)}
    on:mouseleave={() => (isMouseThere = false)}
    style="--opacity: {Number(isMouseThere)}; --x: {mouseX}; --y: {mouseY}; --width: {sliderPercentage}%;">

        <div class="iconContainer">
            <img src="/icons/bug.svg" alt="bug">
        </div>
    </div>
</div>
<style lang="scss"> 
    @use "$lib/colors.scss" as p;
    .juiceContainer {
        background-color: p.$bg1;
        height: 35px;
        border-radius: 5px; 
        overflow: hidden;
        width: 100%; // the size is supposed to be dictated by the container lol xd
    }
    .juice {
        height: 100%;
        width: var(--width); 
        background-color: p.$accent;
        border-radius: 5px;
        overflow: visible; 
        position: relative;
        &::before {
            content: "";
            opacity: var(--opacity);
            background: radial-gradient(circle at var(--x)px var(--y)px, rgba(255, 255, 255, 0.4) 0%, transparent 90%);
            height: 100%;
            width: 100%;
            position: absolute;
            transition: 0.3s;
        }
    }
    .iconContainer{

        width: 35px;
        height: 35px;
        align-items: center;
        justify-content: center;
        display: flex;

        img {
            user-select: none;
        }
    }
</style>
