<template>
  <div>
    <div id="contact-page" class="bg-image">
      <page-header></page-header>

      <div class="container">
        <h2 class="page-title">Contact</h2>
        <contact-form></contact-form>
      </div>
    </div>
    <location></location>

    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageHeader from '../components/Organisms/PageHeader.vue'
import PageFooter from '../components/Organisms/PageFooter.vue'
import ContactForm from '../components/Organisms/ContactForm.vue'
import Location from '../components/Organisms/Location.vue'

@Component({
  components: {
    PageHeader,
    ContactForm,
    Location,
    PageFooter
  }
})
export default class Contact extends Vue {
}
</script>

<style scoped lang="scss">
#contact-page {
  height: 100vh;
  margin-bottom: 5rem;
  background-image: url("../../public/images/contact-bg.jpg");
  .page-title {
    margin-top: 3rem;
    text-align: left;
  }
}
</style>
