<script lang="ts">
    export let src: string = "/sussykitty.png";
</script>

<img {src} alt="avatar" draggable="false" />

<style>
    img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        user-select: none;
        padding: 10px 0;
    }
    /* it should turn into square and resizable tho*/
</style>
