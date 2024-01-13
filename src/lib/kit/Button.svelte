<div><slot>Test</slot></div>

<style lang="scss">
    @use "$lib/colors.scss" as p;
    div {
        display: flex;
        width: 35px;
        height: 35px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        border-radius: 5px;

        background: p.$bg;
        color: p.$text;
        transition: 0.3s;

        &:hover {
            background-color: p.$accent;
        }
    }
</style>
