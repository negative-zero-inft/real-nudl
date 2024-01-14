<!-- coming soon, enough code for today -->
<div class="juiceContainer">
    <div class="juice">

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
        overflow: visible; // <33333
    }
    .iconContainer{

        width: 35px;
        height: 35px;
        align-items: center;
        justify-content: center;
        display: flex;
    }
</style>
