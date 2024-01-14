<script lang="ts">
    export let title: string = "placeholder";
    export let description: string = "aleks, jer jab tak silen anax";
</script>

<div class="popup">
    <div class="text">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    <button on:click={() => alert("You fell for it lol")}>
        <img src="/icons/x.svg" alt="X" title="Close" />
    </button>
</div>

<style lang="scss">
    .popup {
        display: flex;
        width: 580px;
        padding: 18px 12px 18px 18px;
        align-items: center;
        gap: 12px;
        border-radius: 15px;

        background: var(
            --flatscreen-top-level-top-level,
            rgba(38, 38, 38, 0.75)
        );
        backdrop-filter: blur(40px);

        .text {
            h1 {
                margin: 0;
            }
            p {
                margin: 0;
            }
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 18px;
            flex: 1 0 0;
        }
        button {
            border: none;
            background: none;
        }
        img {
            &:hover {
                // awful way to apply red to svg inside img tag
                filter: brightness(0) saturate(100%) invert(13%) sepia(94%)
                    saturate(2997%) hue-rotate(350deg) brightness(113%)
                    contrast(95%);
            }
        }
    }
</style>
