<script lang="ts">
    import Button from "$kit/Button.svelte";
    import Banner from "$kit/Banner.svelte";
    import Popup from "$kit/Popup.svelte";
    import Slider from "$kit/Slider.svelte";
    import Input from "$kit/Input.svelte";
    import Multiselect from "$kit/Multiselect.svelte";
    import Avatar from "$kit/microelements/avatar.svelte";
    import "$lib/global.scss";
    import Label from "$kit/Label.svelte";
    import Time from "$kit/Time.svelte";

    let isAlreadyTimeoutRunning: number = NaN;
    let popup: boolean = false;

    let value: string;
    let expanded: boolean;

    function popsup() {
        popup = true;
        if (!isNaN(isAlreadyTimeoutRunning)) {
            clearTimeout(isAlreadyTimeoutRunning);
        }
        isAlreadyTimeoutRunning = setTimeout(() => {
            if (popup) {
                popup = false;
            }
        }, 3000);
    }
</script>

<Banner interactible />
<Popup title="say" subtitle="gex" staticElm={true} />
<Button text="I love cats"></Button>
<Button color="rgba(38, 38, 38, 0.75)" icon="3d" text="asoiuhdasuidh"></Button>
<div
    style="border-radius: 15px; overflow: hidden; width: 25%; height:35px; min-height:35px;"
>
    <Slider sliderPercentage={50} icon="album" title="say" subtitle="gex" />
</div>
<div
    style="border-radius: 15px; overflow: hidden; width: 25%; height:35px; min-height:35px;"
>
    <Slider sliderPercentage={100} title="how gay is your microwave" />
</div>
<Input bind:value />
<Button
    action={() => {
        popsup();
    }}
    text="free vbucks"
></Button>
<Button width="35px" avatar="sussykitty.png"></Button>
<Button avatar="sussykitty.png" text="meow"></Button>
<Multiselect></Multiselect>
<Button icon="bell">ding ding ding ding</Button>
<Popup
    title="You have been banned"
    subtitle="You said &quot{value}&quot"
    bind:popup
/>
<Label />
<Label title="expandable" expandable bind:expanded />
{#if expanded}
    aijndasoidjnlk
{/if}
<Time />
