<template>
  <div class="swiper-container">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-bind:class="index==0?'current':''" v-for="(item,index) in bannerList">
        <img v-bind:src="item">
      </li>
    </ul>
    <div class="swiper-button-prev"><span class="icon-angle-left"></span></div>
    <div class="swiper-button-next"><span class="icon-angle-right"></span></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props: ['bannerList'],
  mounted () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 2000
      },
      onTouchEnd: function () {
        swiper.startAutoplay()
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style>
@import url("../assets/css/plugin/banner_edit.css");
</style>
