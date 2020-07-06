<template>
  <div>
    <div id="news-page" class="bg-image">
      <page-header></page-header>

      <div class="container">
        <h2 class="page-title">News</h2>
      </div>
    </div>

    <main class="container">
      <article>
        <news-article></news-article>
      </article>
      <aside>
        <news-aside></news-aside>
      </aside>
    </main>

    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageHeader from '../components/Organisms/PageHeader.vue'
import PageFooter from '../components/Organisms/PageFooter.vue'
import NewsArticle from '../components/Organisms/NewsArticle.vue'
import NewsAside from '../components/Organisms/NewsAside.vue'

@Component({
  components: {
    PageHeader,
    NewsArticle,
    NewsAside,
    PageFooter
  }
})
export default class News extends Vue {
}
</script>

<style scoped lang="scss">
#news-page {
  height: 25rem;
  background-image: url("../../public/images/news-bg.jpg");
  .page-title {
    text-align: center;
  }
}

article, aside {
  padding-top: 1.6rem;
}

main {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  article {
    width: 73%;
  }
  aside {
    width: 23%;
  }
}
</style>
