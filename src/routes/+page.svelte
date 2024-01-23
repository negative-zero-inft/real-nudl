<script lang="ts">
    import Button from "$kit/Button.svelte";
    import Banner from "$kit/Banner.svelte";
    import Popup from "$kit/Popup.svelte";
    import Slider from "$kit/Slider.svelte";
    import Input from "$kit/Input.svelte";
    import BigEntry from "$kit/BigEntry.svelte";
    import ListEntry from "$kit/ListEntry.svelte";
    import Avatar from "$kit/microelements/avatar.svelte";
    import "$lib/global.scss";
    import Label from "$kit/Label.svelte";
    import Time from "$kit/Time.svelte";

    let isAlreadyTimeoutRunning: number = NaN;
    let popup: boolean = false;

    let value: string;
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

<div class="sidebar">
    <div
        style="display: flex; gap: 6px; border-radius: 15px; flex-direction: column; width: 100%; overflow: hidden;"
    >
        {#each new Array(30) as _}
            <Button color="rgba(38, 38, 38, 0.75)" width="100%" icon="x"
                >KILL YOURSELF</Button
            >
        {/each}
    </div>
</div>
<div class="mainView">
    <Banner interactible />
    <Popup title="say" subtitle="gex" staticElm={true} />
    <Button>I love cats</Button>
    <Button color="rgba(38, 38, 38, 0.75)" icon="3d">asoiuhdasuidh</Button>
    <div
        style="border-radius: 15px; overflow: hidden; width: 25%; height:35px; min-height:35px;"
    >
        <Slider sliderPercentage={50} icon="album" title="say" subtitle="gex" />
    </div>
    <div
        style="border-radius: 15px; overflow: hidden; width: 25%; height:35px; min-height:35px;"
    >
        <Slider
            sliderPercentage={100}
            markers
            title="how gay is your microwave"
        />
    </div>
    <Input bind:value />
    <Button
        action={() => {
            popsup();
        }}>free vbucks</Button
    >
    <Button width="35px">
        <Avatar src="/sussykitty.png" />
    </Button>
    <Popup
        title="You have been banned"
        subtitle="You said &quot{value}&quot"
        bind:popup
    />
    <Label></Label>
    <Time />
</div>
