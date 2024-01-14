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
        align-items: baseline;
        gap: 6px;
        white-space: nowrap;
        border-radius: 15px;
        width: max-content;
        min-height: 32px;
        padding: none; 
        overflow: hidden !important;
        height: 35px; // please don't kill me
    }
</style>
