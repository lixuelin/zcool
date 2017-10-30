<template>
  <div class="z-menu zMenu">
    <ul>
      <li v-for="(item,index) in menuData" v-bind:class="{current:index==0}">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '.zMenu',
  props: ['menuData']
}
</script>

<style>
@import url("../assets/css/plugin/z_menu.css");
</style>
