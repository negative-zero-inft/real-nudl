<script lang="ts">
    import Button from "$kit/Button.svelte";
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

<div style="border-radius: 15px; overflow: hidden; width: 420px; height:35px;"><Slider sliderPercentage={50} icon="album" title="say" subtitle="gex"/></div>
<Popup />
<Input />
<Button
    action={() => {
        popsup();
    }}>free vbucks</Button>
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
