<template>
  <header class="header container">
    <h1 class="logo"><a href="/">Le café d'Hiro</a></h1>
    <nav class="header-nav">
      <ul>
        <li><a href="menu">Menu</a></li>
        <li><a href="news">News</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageHeader extends Vue {
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-top: 2rem;
  .logo {
    font-family: "Life Savers", Open Sans;
    font-size: 3.5rem;
    font-weight: normal;
    font-style: italic;
    text-shadow: 1px 1px 3px #999;
  }
  ul {
    font-size: 1.8rem;
    display: flex;
    text-transform: uppercase;
    li {
      margin-left: 1.6rem;
    }
  }
}
</style>
