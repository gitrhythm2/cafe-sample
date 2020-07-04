<template>
  <div>
    <div id="top-visual" class="bg-image">
      <page-header></page-header>

      <main class="main container">
        <h2 class="page-title">We'll Make Your Day</h2>
        <p>
          セーヌ左岸サン=ジェルマンに佇む当店のオープンテラス。<br>
          ここからの街の息遣いをご堪能ください。<br>
          ウジェーヌ・アジェが愛した古きパリの香りを、気の済むまで・・・
        </p>
        <div class="note">
          <p>
            注意)<br>
            本サイトはサンプルであり、このカフェは実在しません。
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageHeader from '../components/PageHeader.vue'

@Component({
  components: {
    PageHeader
  }
})
export default class Top extends Vue {
}
</script>

<style scoped lang="scss">
#top-visual {
  min-height: 100vh;
  background-image: url("../../public/images/top-bg.jpg");
}

.main {
  text-align: right;
  .page-title {
    margin-top: 12%;
    margin-bottom: 5rem;
    text-transform: none;
  }
  p {
    color: #000;
  }
  .note {
    width: 50%;
    margin: 0 4rem 0 auto;
    margin-top: 6rem;
    text-align: right;
    p {
      font-style: italic;
      text-align: left;
      color: red;
    }
  }
}
</style>
