<script lang="ts">
    export let name = "Pinned";
</script>

<div>
    <h1>{name}</h1>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="158"
        height="2"
        viewBox="0 0 158 2"
        fill="none"
    >
        <path d="M0 1.29968H158" stroke="white" stroke-opacity="0.25" />
    </svg>
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    div {
        display: flex;
        height: v.$element-size;
        padding: v.$spacing-l1 v.$spacing-l2 v.$spacing-l1 v.$spacing-l3;
        justify-content: flex-start;
        width: fit-content;
        align-items: center;
        gap: v.$spacing-l2;
        align-self: stretch;

        border-radius: v.$radius-l2;
        background: c.$placeholder;
    }
</style>
