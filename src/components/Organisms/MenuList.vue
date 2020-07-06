<template>
  <div>
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
        <img src="../../../public/images/menu1.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../../public/images/menu2.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../../public/images/menu3.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../../public/images/menu4.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../../public/images/menu5.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
      <div class="menu-item">
        <img src="../../../public/images/menu6.jpg" alt="メニュー">
        <p>写真キャプション写真キャプション</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MenuList extends Vue {
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
.grid {
  display: grid;
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
