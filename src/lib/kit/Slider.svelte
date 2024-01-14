<!-- coming soon, enough code for today -->

<script lang="ts">
    let isMouseThere: boolean;

    let mouseX: number, mouseY: number;


</script>
<!-- you do realize that pseudo element exists? nope not until now :3 this is my first ever experience with svelte in my life xd css* :3 <3333333333 i love u even more <3  <33333333 i love you so much-->
<div class="juiceContainer">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="juice"  on:mousemove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX = e.clientX - rect.x;
        mouseY = e.clientY - rect.y;
    }}
    on:mouseenter={() => (isMouseThere = true)}
    on:mouseleave={() => (isMouseThere = false)}
    style="--opacity: {Number(isMouseThere)}; --x: {mouseX}; --y: {mouseY};">

        <div class="iconContainer">
            <!-- <3 -->
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
        width: 50%;
        background-color: p.$accent;
        border-radius: 5px;
        overflow: visible; // okay so how do we e x t r a c t  t h e  g l o w  from the buttons and put it in its own thing yeah i've tried but damn it's rather complicated
        
        // i was thinking about global class that applies on it idk hmm because i'm thinking that we should replace per-element hover and click effects
        // with one universal mouse interaction thing yes also i want to rebuild your components because you programmed them in runes yes xd
        &::before {
            content: "";
            opacity: var(--opacity);
            background: radial-gradient(circle at var(--x)px var(--y)px, brighten(p.$accent) 0%, transparent 90%);
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
    }
</style>
