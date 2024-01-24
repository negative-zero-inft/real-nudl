<script>
    import Button from "$kit/Button.svelte";
    import "../lib/global.scss";

    const sidebar = [
        { url: "/", icon: "Home" },
        { url: "/about", icon: "nuclear" },
    ];
</script>

<!-- not centered :3 <3 -->
<div class="sidebar" style="--sidebar-width: 241px;">
    <div class="content">
        <div
            style="display: flex; gap: 6px; border-radius: 15px; flex-direction: column; width: 100%; overflow: hidden; height: fit-content !important;"
        >
            {#each sidebar as a}
                <Button
                    icon={a.icon}
                    width="100%"
                    action={() => (window.location.href = a.url)}
                ></Button>
            {/each}
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
            <Button icon="wheeze" text="oo wee oo" width="100%"></Button>
        </div>
    </div>
</div>
<div class="mainView"><div class="content"><slot /></div></div>
