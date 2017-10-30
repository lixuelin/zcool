<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
import Head from './components/head'
import Foot from './components/foot'
export default {
  name: 'app',
  components: {
    'headerView': Head,
    'footerView': Foot
  }
}
</script>

<style>
</style>
