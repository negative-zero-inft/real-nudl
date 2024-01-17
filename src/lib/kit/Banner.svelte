<script lang="ts">
    /*
   xxx        x   xxxxxxxxx    xx       xx               x         xx    x     x
     xx      xx                 xx     xx                xxx      xx    xx     x
       xx   xx                   xx   xx                   xx    xx    xx      x
        xxxx                      x  xx                     xx  xx    xx       x
          xx                       xxx                       xxxx    xx        x
         xx        xxxxxxxx        xxx                        xx    xx         x
        xx                        xx xx                      xx     xxx        x
       x                         xx   xx                    xx     xx xx       x
      xx                        xx      xx                xx       x   xx      x
     xx                         x        xx              xx       xx    xx     xx
                  xxxxxxxxxx                             x       xx      xx     xxxxxxxxxxxx
                                                                 x


              xx
             xx                    xx           x
            xx                    xx           xx                        x
           xx                     x           xx           xx          xx
          xx                     xx          xx              xx       xx
          x                      x          xx                xx     xx
        xxx                    xx          xx                  xxx  xx
       x  xx                  xx          xx                     xxxx
     xx    xx                xx          xxxxx                    xx
    xx      xx              xx          xx   xx                  xx xx
   xx        xx            xx          xx     xx               xxx   xx
  x           xx          xx          xx       xx             xx      xx
 x             x         xx           x         xx           xx        xxx
xx              x       x            x           xxx        xx           xx
x               xx    xxx           x              xx      xx             xx
                      x            x                x     xx                xx
 */

    import Glare from "$lib/kit/microelements/glare.svelte";
    export let title: string = "Title";
    export let subtitle: string = "Subtitle";
    export let imgSrc: string = "/ZenOS banner.png";
    export let color: string = "#000000";
    export let interactible: boolean = false;
</script>

<div style="background: {color};" class="banner">

    {#if interactible}
        <Glare/>
    {/if}
    <div class="text" style="background: {color}">
        <div class="title">{title}</div>
        <div class="subtitle">{subtitle}</div>
    </div>
    <span
        class="bannerImage"
        style="background: linear-gradient(270deg, {color}00 0%, {color} 60.09%), url('{imgSrc}'), {color} 100% / cover no-repeat;"
    >
    </span>
</div>

<style lang="scss">
    @use "$lib/materials.scss" as c;
    @use "$lib/variables.scss" as v;
    @import "/static/global.scss";
    .banner {
        position: relative;
        align-self: stretch;
        overflow: hidden;
        margin: 0;
        display: flex;
        padding-left: v.$spacing-l4;
        display: flex;
        height: 92px;
        padding: v.$spacing-l4;
        align-items: center;
        gap: v.$spacing-l4;
        align-items: flex-start;
        justify-content: space-between;
        padding-right: 0;
        align-items: center;
        border-radius: v.$radius-l2;

        .bannerImage {
            width: 28.75rem;
            height: 8.75rem;
        }
        .text {
            color: #fff;
            text-align: justify;
            display: flex;
            flex-direction: column;
            gap: v.$spacing-l4;
            .subtitle {

                @include big-text();
                height: 16px;
                align-items: center;
                display: flex;
            }
            .title {
                @include header();
                height: 16px;
                align-items: center;
                display: flex;
            }
        }
    }
</style>
