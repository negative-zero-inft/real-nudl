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
                                                                             x
 */
    export let title: string = "New game from NRD Research Inc";
    export let subtitle: string = "Half Pussy 3";
    export let imgSrc: string = "/sussykitty.png";
    export let backgroundColor: string = "#CC5B14";
</script>

<div style="background: {backgroundColor}" class="banner">
    <div class="text" style="background: {backgroundColor}">
        <h1 class="title">{title}</h1>
        <p class="subtitle">{subtitle}</p>
    </div>
    <span
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

        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;
        align-items: center;

        border-radius: 15px;

        .text {
            margin: 10px;
            color: #fff;
            text-align: justify;
            p {
                font-size: 24px;
                letter-spacing: 0.72px;
            }
        }
    }
</style>
