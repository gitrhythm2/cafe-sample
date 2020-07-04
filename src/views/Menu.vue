<template>
  <div>
    <div id="menu-visual" class="bg-image">
      <page-header></page-header>

      <div class="container">
        <h2 class="page-title">Menu</h2>
        <p>
          生産者から直接仕入れた新鮮な食材を使い、その食材に合ったお料理を提供しております。
          季節限定メニューもございますので、その日の「お品書き」をご確認ください。
        </p>
      </div>
    </div>

    <!-- https://vuejsexamples.com/a-simple-and-responsive-example-of-css-grid-with-vuejs-and-last-fm-apis/ -->
    <!-- https://codepen.io/ketanmistry/pen/LmXwaq -->
    <!-- <main class="container grid"
      v-for="menu in menuItems" :key=menu>
      <div class="menu-item">
        <img :src="menu" width="254" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
    </main> -->
    <main class="container grid">
      <div class="menu-item">
        <img src="../../public/images/menu1.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../public/images/menu2.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../public/images/menu3.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../public/images/menu4.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../public/images/menu5.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../public/images/menu6.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
    </main>

    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'

@Component({
  components: {
    PageHeader,
    PageFooter
  }
})
export default class Menu extends Vue {
  // basePath = '../images/'

  // @Prop()
  // menus?: string[]

  // mounted () {
  //   this.menus = [
  //     this.basePath + 'menu1.jpg',
  //     this.basePath + 'menu2.jpg',
  //     this.basePath + 'menu3.jpg',
  //     this.basePath + 'menu4.jpg',
  //     this.basePath + 'menu5.jpg',
  //     this.basePath + 'menu6.jpg'
  //   ]
  // }

  // get menuItems () {
  //   return this.menus
  // }
}
</script>

<style scoped lang="scss">
#menu-visual {
  height: 100vh;
  background-image: url("../../public/images/menu-bg.jpg");
  .page-title {
    margin-top: 20rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
    width: 40%;
    margin: 0 auto;
    color: #000;
  }
}

.grid {
  display: grid;
  margin-top: 6rem;
  margin-bottom: 6rem;

  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  img {
    width: 100%;
  }
  p {
    margin-bottom: 1rem;
  }
}
</style>
