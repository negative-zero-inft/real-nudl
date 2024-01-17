<script lang="ts">
    import Glare from "./microelements/glare.svelte";

    export let image: string = "/NRD_irl.webp";
    export let title: string = "say";
    export let subtitle: string = "gex";
</script>

<div class="listEntry">

    <div class="img">

        <Glare/>
        <!-- svelte-ignore a11y-missing-attribute the only file i found is in ripple.css we need to inject gradient there---> 
        <img style="background: url({image}), #000000 0% / cover no-repeat;"/>
    </div>
    <div class="textContainer">

        <Glare/>
        <div class="title">{title}</div>
        <div class="subtitle">{subtitle}</div>
    </div>
</div>

<style lang="scss">

    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    
    .listEntry{

        gap: v.$spacing-l2;
        height: v.$element-size;
        border-radius: v.$radius-l1;
        overflow: hidden;
        display: flex;
        flex-direction: row;
    }
    .textContainer{

        overflow: hidden;
        display: flex;
        gap: v.$spacing-l2;
        align-items: center;
        width: 100%;
        height: v.$element-size;
        border-radius: v.$radius-l1;
        background-color: c.$top-level-solid;
        padding-left: v.$spacing-l2;
        position: relative;
    }
    .title{

        @include v.standard-text();
        color: rgba(c.$text, 1.0);
    }
    .subtitle{

        @include v.standard-text();
        color: rgba(c.$text, 0.5);
    }
    .img{

        width: v.$element-size;
        height: v.$element-size;
        position: relative;
        overflow: hidden;
        border-radius: v.$radius-l1;
        img{

            width: v.$element-size;
            height: v.$element-size;
        }
    }
</style>