<template>
  <div class="z-page page">
    <ul>
      <li class="z-page-prev">
        <span><i class="icon-angle-left"></i></span>
      </li>
      <li :class="{current: index==0}" v-for="(num,index) in len">
        <a href="">{{num}}</a>
      </li>
      <li class="z-page-next">
        <span><i class="icon-angle-right"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '.page',
  props: ['len']
}
</script>

<style scoped="scoped">
@import url("../assets/css/page.css");
</style>
