<template>
  <header class="post-info">
    <h2 class="post-title">店内のご紹介</h2>
    <div class="post-date">3/30<span>2019</span></div>
    <div class="post-category">カテゴリー：お店の紹介</div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PostHeader extends Vue {
}
</script>

<style scoped lang="scss">
@import "../../assets/css/_variables";

.post-info {
  position: relative;
  margin-bottom: 4rem;
  .post-title {
    font-size: 3rem;
    margin-top: .6rem;
    margin-bottom: 0;
  }
  .post-title, .post-category {
    margin-left: 11rem;
  }
  .post-date {
    font-size: 2.3rem;
    position: absolute;
    top: 0;
    width: 9rem;
    height: 9rem;
    padding-top: .8rem;
    text-align: center;
    color: silver;
    border-radius: 50%;
    background: $theme-color;
    span {
      font-size: 1.6rem;
      display: block;
      width: 60%;
      margin: 0 auto;
      padding-top: .4rem;
      border-top: 1px solid rgba(255, 255, 255, .5);
    }
  }
}
</style>
