<script lang="ts">
    import Button from "$kit/Button.svelte";
    import Inline from "$kit/Inline.svelte";
    import Banner from "$kit/Banner.svelte";
    import Popup from "$kit/Popup.svelte";
    import { slide } from "svelte/transition";

    let popup: boolean = false;
    function popsup() {
        popup = true;
        setTimeout(() => (popup = false), 3000);
    }
</script>

<Button>I love cats</Button>
<Inline>
    <Button>I love cats</Button>
    <Button color="#8e1085" action={() => alert("It is very colorful")}
        >Look! A colorful button!</Button
    >
    <Button
        showGradient={false}
        action={() => alert("NOOOOOOOOOOOOOOOOOOOOOOOOO 😭")}
        >No more shiny!</Button
    >
</Inline>
<Inline></Inline>
<Banner></Banner>
<Popup></Popup>

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
