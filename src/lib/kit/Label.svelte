<script lang="ts">
    import Glare from "./microelements/glare.svelte";
    export let title = "Pinned";
    export let expandable: boolean = false;
    export let expanded: boolean = false;
    const click = () => {
        expanded = !expanded;
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={click}>
    {title}
    <span></span>
    {#if expandable}
        <Glare />
        {#if expanded}
            <img src="icons/dir/down.svg" alt="expand" />
        {:else}
            <img src="icons/dir/right.svg" alt="expand" />
        {/if}
    {/if}
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    div {
        position: relative;
        overflow: hidden;
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
