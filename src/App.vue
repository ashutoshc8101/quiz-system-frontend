<template lang="html">
  <div class="">
    <app-header></app-header>
      <div class="container" style="margin-top: 40px;">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  components : {
    appHeader : Header
  }
}
</script>

<style lang="css">
</style>
