<script lang="ts">
    import Button from "$kit/Button.svelte";
    import Inline from "$kit/Inline.svelte";
    import Banner from "$kit/Banner.svelte";
    import Popup from "$kit/Popup.svelte";
    import Slider from "$kit/Slider.svelte"
    import { slide } from "svelte/transition";
    import Input from "$kit/Input.svelte";
    let popup: boolean = false;
    function popsup() {
        popup = true;
        setTimeout(() => (popup = false), 3000);
    }
</script>

<Banner></Banner>
<Button>I love cats</Button>
<Inline>
    <Button>I love cats</Button>
    <Button color="#8e1085" action={() => alert("It is very colorful")}
        >Look! A colorful button!</Button
    >
    <Button
        showGradient={false}
        action={() => alert("NOOOOOOOOOOOOOOOOOOOOOOOOO 😭")}
        >No more shiny!</Button>
    <Button>Longest button ever!!!!</Button>
</Inline>
<Inline></Inline>

<div style="border-radius: 15px; overflow: hidden; width: 420px; height:35px;"><Slider sliderPercentage={50} icon="album" title="say" subtitle="gex"/></div>
<Inline>
    <Input/>
    <Button></Button>
</Inline> i want to burn my pc down :3
<Popup />
<Input />
<Button
    action={() => {
        popsup();
    }}>click here for free vbucks!!!!</Button
>
{#if popup}
    <div class="lol" transition:slide={{ axis: "x" }}>
        <Popup title="You fell for it" description="kill yourself."></Popup>
    </div>
{/if}

<style>
    .lol {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
</style>
