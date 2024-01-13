<script lang="ts">
    import Button from "./Button.svelte";
</script>

<div>
    <Button>say</Button>
    <Button>gex</Button>
    <Button>or</Button>
    <Button>else</Button>
</div>
it's rather complicated if it's about svelte compoment being used here

<style lang="scss">
    div {
        display: flex;
        align-items: flex-start;
        gap: 6px;
        white-space: nowrap;
        border-radius: 15px;
        width: max-content;
        overflow: hidden !important;
    }
</style>
