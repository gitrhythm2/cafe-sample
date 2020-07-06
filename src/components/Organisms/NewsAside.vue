<template>
  <div>
    <h3 class="sub-title">カテゴリー</h3>
    <ul class="sub-menu">
      <li><a href="">お店の紹介</a></li>
      <li><a href="">期間限定メニュー</a></li>
      <li><a href="">イベント</a></li>
      <li><a href="">お客様との会話</a></li>
    </ul>
    <h3 class="sub-title">このお店について</h3>
    <p>
      体に優しい自然食を提供するLe café d'Hiro。無添加の食材を利用したメニューが特徴です。
      おいしいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒やされてください。
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NewsAside extends Vue {
}
</script>

<style scoped lang="scss">
@import "../../assets/css/_variables";

.sub-title {
  font-size: 2.2rem;
  padding: .8rem .8rem 1rem;
  border-bottom: 2px solid $theme-color;
}
.sub-menu {
  margin-bottom: 6rem;
  li {
    padding: 1rem .5rem;
    list-style: none;
    border-bottom: 1px solid #ddd;
    a {
      display: block;
    }
  }
}
p {
  padding: 1rem .5rem;
}
</style>
