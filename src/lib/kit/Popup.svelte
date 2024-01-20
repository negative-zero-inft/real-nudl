<script lang="ts">
    // holy shit is this chris pratt or maybe
    export let title: string = "Placeholder";
    export let subtitle: string = "placejolder";

</script>

<div class="popup">
    <div class="text">
        <div class="title">{title}</div>
        <div class="subtitle">{subtitle}</div>
    </div>
    <button>
        <img src="/icons/x.svg" alt="X" title="Close"/>
    </button>
</div>

<style lang="scss">

    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    .popup {

        overflow: hidden;
        position: relative;
        display: flex;
        align-self: stretch;
        padding: v.$spacing-l3 v.$spacing-l2 v.$spacing-l3 v.$spacing-l3;
        align-items: center;
        gap: v.$spacing-l2;
        border-radius: v.$radius-l2;
        background-color: c.$top-level-solid;
        backdrop-filter: blur(v.$blur);

        button {
            border: none;
            background: none;
        }
        img {
            &:hover {
                // awful way to apply red to svg inside img tag 
                // ralu wtf ;-;
                filter: brightness(0) saturate(100%) invert(13%) sepia(94%)
                    saturate(2997%) hue-rotate(350deg) brightness(113%)
                    contrast(95%);
            }
        }
    }
    .text{

        .title{

            @include v.header();
            height: 16px;
            align-items: center;
            display: flex;
        }

        .subtitle{

            @include v.standard-text();
            height: 9px;
            align-items: center;
            display: flex;
        }
        width: 100%;
        display: flex;
        gap: v.$spacing-l3;
        justify-content: center;
        flex-direction: column;
    }
</style>
