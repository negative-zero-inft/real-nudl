<script lang="ts">
    import Button from "$kit/Button.svelte";
    import Banner from "$kit/Banner.svelte";
    import Popup from "$kit/Popup.svelte";
    import Slider from "$kit/Slider.svelte";
    import { slide } from "svelte/transition";
    import Input from "$kit/Input.svelte";
    import BigEntry from "$kit/BigEntry.svelte";
    import ListEntry from "$kit/ListEntry.svelte";
    import Avatar from "$kit/microelements/avatar.svelte";
    import "$lib/global.scss";

    let popup: boolean = false;
    function popsup() {
        popup = true;
        setTimeout(() => (popup = false), 3000);
    }
</script>

<div class="sidebar">
    <div
        style="display: flex; gap: 6px; border-radius: 15px; overflow: hidden; flex-direction: column;"
    >
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
        <Button color="rgba(38, 38, 38, 0.75)">I love cats</Button>
    </div>
</div>
<div class="mainView">
    <Button>I love cats</Button>
    <Banner interactible/>
    <Popup title="say" subtitle="gex" />
    <Button>I love cats</Button>
    <Button color="rgba(38, 38, 38, 0.75)">asoiuhdasuidh</Button>
    <div
        style="border-radius: 15px; overflow: hidden; width: 25%; height:35px;"
    >
        <Slider sliderPercentage={50} icon="album" title="say" subtitle="gex" />
    </div>
    <Input />
    <Button
        action={() => {
            popsup();
        }}>free vbucks</Button
    >
    <BigEntry />
    <ListEntry/>
    <Avatar src="/sussykitty.png" />
    <Button width="35px"> 
        <Avatar src="/sussykitty.png" />
    </Button>
    {#if popup}
        <div class="lol" transition:slide={{ axis: "x" }}>
            <Popup title="You fell for it" subtitle="kill yourself."></Popup>
        </div>
    {/if}
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;

    .lol {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
</style>
