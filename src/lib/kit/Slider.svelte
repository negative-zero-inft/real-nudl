<script lang="ts">
    import Glare from "$lib/kit/microelements/glare.svelte";

    let ticklingSlider: boolean = false;

    export let sliderPercentage: number = 0;
    export let icon: string = "";
    export let title: string = "";
    export let subtitle: string = "";
    export let width: string = "100%"; // string because autism oh yeah wanna know something that's 100% bullshit? i can't use the materials and variables files in the global.scss ye i see
    export let markers: boolean = false;

    const sliderMouseMove = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relativeLeft = e.clientX - rect.left;
        if (ticklingSlider) {
            sliderPercentage = Math.min(
                Math.max((relativeLeft / rect.width) * 100, 0),
                100,
            );
        }
    };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="juiceContainer"
    style="--w: {width}"
    on:mousedown={(e) => {
        ticklingSlider = true;
        sliderMouseMove(e);
    }}
    on:mouseup={() => (ticklingSlider = false)}
    on:mousemove={(e) => sliderMouseMove(e)}
>
    <Glare />
    <div
        class="juice"
        style="overflow: hidden; --width: {sliderPercentage}%;"
    ></div>
    {#if markers}
        <div class="markers">
            <div>25%</div>
            <div>50%</div>
            <div>75%</div>
        </div>
    {/if}
    <div class="decors">
        {#if icon}
            <div class="iconContainer">
                <img src={`/icons/${icon}.svg`} alt={icon} />
            </div>
        {:else}
            <span style="width: 12px;"></span>
        {/if}
        <div class="textDivider">
            <div class="title">{title}</div>
            <div class="subtitle">{subtitle}</div>
        </div>
    </div>
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    .markers {
        // yes i'll try once we finished the basic that we did on ligma
        align-self: end;
        align-items: end;
        width: 100%;
        position: absolute;
        justify-content: space-between;
        // aiusdhlioashdgfloiasdvgoiydbvcoi8sv6y7dg8olsivfhy7g 4l8r
        display: flex;
        flex-direction: row;
        color: rgba(255, 255, 255, 0.5);
    }
    .juiceContainer {
        background-color: c.$top-level-solid;
        height: v.$element-size !important;
        min-height: v.$element-size !important;
        border-radius: v.$radius-l1;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        width: var(
            --width
        ); // the size is supposed to be dictated by the container
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
            background: radial-gradient(
                circle at var(--x) px var(--y) px,
                rgba(255, 255, 255, 0.4) 0%,
                transparent 90%
            );
            height: 100%;
            width: 100%;
            position: absolute;
            transition: v.$animation-speed;
        }
    }
    .decors {
        display: flex;
        flex-direction: row;
        position: absolute;
        pointer-events: none;
        align-items: center;
        gap: 1px;
        height: v.$element-size;
    }
    .title {
        color: c.$text;
        @include v.standard-text();
    }
    .subtitle {
        color: c.$text-sec;
        @include v.standard-text();
    }
    .textDivider {
        display: flex;
        flex-direction: row;
        gap: v.$spacing-l2;
    }
    .iconContainer {
        width: v.$element-size;
        height: v.$element-size;
        align-items: center;
        justify-content: center;
        display: flex;
        img {
            user-select: none;
        }
    }
</style>
