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
    export let color: string = "#000000"; // idfk there are tons of unofficial ones
    export let interactible: boolean = false; // we should make the glare effect also contain the ripple effect but idk how to 
    // a) make the glare effect not make whatever is underneath inaccessible
    // b) make the ripple effect itself lolol 
    // it didn't help bru
    // it wanted me to do pointer-events: none; but that just made the glare not work
    // lnik lol
    
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
            height: 140px !important;
            width: 460px !important;
        }
        .text {
            color: #fff;
            text-align: justify;
            display: flex;
            flex-direction: column;
            gap: v.$spacing-l4;
            .subtitle {

                @include v.big-text();
                height: 16px;
                align-items: center;
                display: flex;
            } 
            .title {
                @include v.header();
                height: 16px;
                align-items: center;
                display: flex;
            }
        }
    }
</style>
