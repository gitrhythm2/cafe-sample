<template>
  <footer class="footer">
    <small>&copy; 2020 Hiroyuki Hosokawa</small>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageFooter extends Vue {
}
</script>

<style scoped lang="scss">
@import "../../assets/css/_variables";

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  color: silver;
  background: $theme-color;
  small {
    font-size: 100%;
  }
}
</style>
