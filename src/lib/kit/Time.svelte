<script lang="ts">
    export let time: string = "00:00";
    export let time2: string = "21:37";
    setInterval(() => {
        const date = new Date();
        time = date.toLocaleTimeString("en-GB", {
            minute: "2-digit",
            second: "2-digit",
            timeZone: "Europe/Bucharest",
        });
        // time2 = date.toLocaleTimeString("en-GB", {
        //     hour: "2-digit",
        //     minute: "2-digit",
        //     timeZone: "Europe/Warsaw",
        // });
    }, 1000);
</script>

<div>
    <span>{time}</span>
    /
    <span>{time2}</span>
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;

    div {
        display: flex;
        height: v.$element-size;
        padding: v.$spacing-l2;
        justify-content: center;
        align-items: center;
        gap: v.$spacing-l1;

        border-radius: v.$radius-l1;
        background: c.$top-level-acrylic;
    }
</style>
