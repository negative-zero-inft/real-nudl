<script lang="ts">
    import Button from "./Button.svelte";
</script>

<div>
    <slot>
        <Button>say</Button>
        <Button>gex</Button>
        <Button>or</Button>
        <Button>else</Button>
        <Button showGradient={false}>no</Button>
    </slot>
</div>

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
