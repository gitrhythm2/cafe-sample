<template>
  <div>
    <post-header></post-header>
    <img src="../../../public/images/space.jpg" alt="店内の様子">
    <p>
      控えめなトーンの店内では、ヴィンテージのマランツ・JBLと共に２万枚のレコードコレクションが皆様をお待ちしております。
      リクエストもお気軽にどうぞ。
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PostHeader from '../Molecules/PostHeader.vue'

@Component({
  components: {
    PostHeader
  }
})
export default class NewsArticle extends Vue {
}
</script>

<style scoped lang="scss">
img {
  max-width: 100%;
  margin-bottom: 2rem;
}
</style>
