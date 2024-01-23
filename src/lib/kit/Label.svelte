<script lang="ts">
    import Glare from "./microelements/glare.svelte";
    export let name = "Pinned";
    export let expandable: boolean = false;
</script>

<div>
    {name}
    <span></span>
    {#if expandable}
        <Glare />
    {/if}
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    div {
        display: flex;
        height: v.$label-height !important;
        min-height: v.$label-height;
        padding-left: v.$spacing-l2;
        padding-right: v.$spacing-l2;
        justify-content: flex-start;
        min-width: 200px;
        align-items: center;
        gap: v.$spacing-l2;
        align-self: stretch;
        @include v.small-title();
        border-radius: v.$radius-l2;
        background: c.$placeholder;
        span {
            height: 2px;
            flex: 1 0 0;
            width: 100%;
            background-color: c.$immutable;
        }
    }
</style>
