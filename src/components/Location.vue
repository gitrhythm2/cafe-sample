<template>
  <div>
    <section id="location" class="container">
      <div class="location-info">
        <h3 class="sub-title">カフェ 東京タワー店</h3>
        <p>
          住所：東京都港区芝公園４丁目２−８<br>
          電話：00-0000-0000<br>
          営業時間：11:00〜21:00<br>
          休日：水曜日
        </p>
        <div class="sns">
          <a href="https://twitter.com/gitrhythm">
            <img src="../../public/images/brandlogos/Twitter_Social_Icon_Circle_Color.png" alt="Twitter Icon">
          </a>
          <a href="https://www.instagram.com/gitrhythm/">
            <img src="../../public/images/brandlogos/IG_Glyph_Fill.png" alt="Instagram Icon">
          </a>
          <a href="https://github.com/gitrhythm2/cafe-sample">
            <img src="../../public/images/brandlogos/GitHub-Mark-64px.png" alt="GitHub Icon">
          </a>
          <a href="https://www.youtube.com/channel/UC9pY8PDxlAXcvM2tDGhjSgg">
            <img src="../../public/images/brandlogos/logo youtube.png" alt="Youtube Icon">
          </a>
          <a href="https://www.flickr.com/photos/gitrhythm">
            <img class="flickr-logo" src="../../public/images/brandlogos/flickr.png" alt="Flickr Icon">
          </a>
        </div>
      </div>
      <div class="location-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754723095!2d139.7432388508942!3d35.65858048010252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1593599982240!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Location extends Vue {
}
</script>

<style scoped lang="scss">
@import "../assets/css/_variables";

#location {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.location-info {
  width: 30;
  .sub-title {
    font-size: 2.2rem;
    padding: 0 .8rem 1rem;
    border-bottom: 2px solid #0bd;
  }
  p {
    padding: 1rem .8rem;
  }
}
.location-map {
  width: 66%;
  iframe {
    width: 100%;
  }
}
.sns {
  margin-top: 2rem;
  padding-left: .5rem;
  img {
    width: 32px;
    margin-right: 2rem;
  }
  .flickr-logo {
    width: 48px;
  }
}
</style>
