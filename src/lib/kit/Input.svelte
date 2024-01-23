<script lang="ts">
    export let width: string = "200px"; // string because i'm high
    export let value: string = "";
</script>

<input type="text" placeholder="Placeholder" style="--w: {width}" bind:value />

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;

    input {
        display: flex;
        padding-left: v.$spacing-l2;
        justify-content: center;
        align-content: center;
        gap: v.$spacing-l2;
        border: none;
        border-radius: v.$radius-l1;
        background: c.$input-box;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25) inset;
        color: c.$text;
        @include v.standard-text();
        height: v.$element-size;
        width: var(--w);
        &::enabled {
            border: none !important;
        }

        &:focus {
            outline: none !important;
        }
    }
</style>
