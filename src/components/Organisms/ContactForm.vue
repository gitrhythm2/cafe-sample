<template>
  <div>
    <form action="#">
      <div>
        <label for="name">お名前</label>
        <input type="text" id="name" name="name">
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" name="email">
      </div>
      <div>
        <label for="message">メッセージ</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button type="submit" class="submit-button">送信</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContactForm extends Vue {
}
</script>

<style scoped lang="scss">
@import "../../assets/css/_variables";

form {
  width: 80rem;
  padding: 2rem;
  border-radius: 10px;
  background: rgba(200, 200, 200, .3);
  div {
    margin-bottom: 1.4rem;
  }
  label {
    font-size: 1.7rem;
    font-weight: normal;
    display: block;
  }
  input[type="text"], input[type="email"], textarea {
    font-weight: normal;
    padding: 1rem 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: rgba(255, 255, 255, .5);
    &:focus {
      border: 1px solid $theme-color;
    }
  }
  input[type="text"], input[type="email"] {
    width: 100%;
    max-width: 24rem;
  }
  textarea {
    width: 100%;
    max-width: 48rem;
    height: 9.6rem;
  }
  .submit-button {
    font-size: 2rem;
    font-weight: normal;
    margin-top: 2rem;
    padding: 1rem 3.2rem;
    color: #ddd;
    border-radius: 5px;
    background: $theme-color;
    &:hover {
      background: $hover-color;
    }
  }
}
</style>
