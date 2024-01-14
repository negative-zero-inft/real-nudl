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
    export let title: string = "New game from NRD Research Inc";
    export let subtitle: string = "Half Pussy 3";
    export let imgSrc: string = "/sussykitty.png";
    export let backgroundColor: string = "#CC5B14";
</script>

<div style="background: {backgroundColor}" class="banner">
    <div class="text" style="background: {backgroundColor}">
        <h1
            class="title"
            style="font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;"
        >
            {title}
        </h1>
        <p class="subtitle">{subtitle}</p>
    </div>
    <span
        class="bannerImage"
        style="background: linear-gradient(270deg, rgba(204, 91, 20, 0.00) 0%, #CC5B14 60.09%), url('{imgSrc}'); width: 600px; height: 260px; border-radius: 15px;   "
    >
    </span>
</div>

<style lang="scss">
    .banner {
        margin: 0;
        width: max-content;
        display: flex;
        padding-left: 24px;

        display: flex;
        height: 92px;
        padding: 24px;
        align-items: center;
        gap: 24px;
        align-self: stretch;
        align-items: flex-start;
        justify-content: space-between;
        padding-right: 0;
        gap: 24px;
        align-items: center;

        border-radius: 15px;

        .bannerImage {
            height: 140px !important;
            width: 460px !important;
        }
        .text {
            color: #fff;
            text-align: justify;
            display: flex;
            flex-direction: column;
            gap: 12px;
            p {
                font-size: 24px;
                letter-spacing: 0.72px;
                margin-top: 0px;
                margin-bottom: 0px;
            }
            h1 {
                margin-top: 0px;
                margin-bottom: 0px;
            }
        }
    }
</style>
