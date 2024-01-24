<!-- <3 -->
<!-- lemme make a mockup of how it'll look like when you actually click it -->
<!-- i don't have this much experience when it comes to select -->
<script lang="ts">
    import Glare from "./microelements/glare.svelte";

    export let options: string[] = ["sex", "jer jab anax", "sui", "h"];
</script>

<!-- i think the whole page is fucked up (has to be fit in a single page size) i was trying to solve that yesterday but css is css <3 lemne try with different page tho-->
<div>
    <Glare />
    <select name="idk">
        {#each options as o}
            <option>{o}</option>
        {/each}
    </select>
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;

    div {
        position: relative;
        overflow: hidden;
        border-radius: v.$radius-l1;
        height: v.$element-size;
    }
    select {
        width: 100%;
        height: v.$element-size;
        display: flex;
        color: white;
        padding: v.$spacing-l2;
        justify-content: space-between;
        align-items: center;
        @include v.standard-text();
        border-radius: 5px;
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
