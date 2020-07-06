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
    <menu-list class="menu-list"></menu-list>

    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PageHeader from '../components/Organisms/PageHeader.vue'
import MenuList from '../components/Organisms/MenuList.vue'
import PageFooter from '../components/Organisms/PageFooter.vue'

@Component({
  components: {
    PageHeader,
    MenuList,
    PageFooter
  }
})
export default class Menu extends Vue {
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

.menu-list {
  margin-top: 6rem;
  margin-bottom: 6rem;
}
</style>
