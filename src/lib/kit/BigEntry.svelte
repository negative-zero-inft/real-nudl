<script lang="ts">
</script>

<div>
    <slot name="img" />
    <slot name="text" />
</div>

<style lang="scss">
    
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.375rem;
    }
</style>
