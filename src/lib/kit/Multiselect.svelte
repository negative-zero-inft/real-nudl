<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- lemme make a mockup of how it'll look like when you actually click it -->
<!-- i don't have this much experience when it comes to select -->
<script lang="ts">
    import Glare from "./microelements/glare.svelte";

    export let options: string[] = ["sex", "jer jab anax", "sui", "h"];

    let active: boolean = false;
    let activeOption: string = "Please select an option";
</script>

<!-- we should build our own selector thingamajig hiiiiiii :3333 <333333333 -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="btn">
    <div class="GC" on:click={() => (active = !active)}>
        {activeOption}
        <img
            src="icons/dir/down.svg"
            alt="expand"
            style="position: absolute; right: 12px;"
        />
        <Glare />
    </div>
    <div
        class="options"
        style="opacity: {Number(active)}; pointer-events: {active
            ? 'auto'
            : 'none'};"
    >
        <div class="OC">
            <div class="sendhelp">
                {#each options as o}
                    <div
                        class="option"
                        on:click={() => {
                            active = false;
                            activeOption = o;
                        }}
                    >
                        <!-- jer jab tura anax <3 -->
                        <Glare />
                        {o}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;

    .sendhelp {
        gap: v.$spacing-l1;
        border-radius: v.$radius-l2;
        overflow: hidden;
        width: fit-content;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .option {
        position: relative;
        overflow: hidden;
        width: 250px;
        height: v.$element-size;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: c.$top-level-acrylic;
        border-radius: v.$radius-l1;
    }
    .OC {
        border: 1px solid var(--outline, rgba(255, 255, 255, 0.4));
        box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
        gap: v.$spacing-l1;
        border-radius: v.$radius-l3;
        overflow: hidden;
        width: fit-content;
        background: c.$acrylic-bg;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 12px;
        backdrop-filter: blur(v.$blur);
    }
    .options {
        z-index: 69420;
        position: absolute;
        left: 0;
        right: 0;
        top: 47px;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: v.$radius-l3;
        transition: v.$animation-speed;
    }
    .GC {
        flex-direction: row;
        border-radius: v.$radius-l1;
        overflow: hidden;
        height: v.$element-size;
        width: 100%;
        position: relative;
        display: flex;
        padding-left: v.$spacing-l2;
        align-items: center;
    }
    .btn {
        z-index: 69421;
        position: relative;
        border-radius: v.$radius-l1;
        height: v.$element-size;
        width: 100%;
        display: flex;
        color: white;
        justify-content: space-between;
        @include v.standard-text();
        background: var(
            --flatscreen-top-level-top-level,
            rgba(38, 38, 38, 0.75)
        ); // what
        backdrop-filter: blur(40px);
        border: none;
        align-items: center;
        &:focus,
        &:active {
            outline: none;
        }
    }
</style>
