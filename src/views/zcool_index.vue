<template>
  <div id="zIndex" class="z-index">
    <div class="z-index-top">
      <div class="z-wraper">
        <banner-list v-bind:bannerList="bannerList"></banner-list>
        <div class="z-index-tj">
          <ul class="clearfix">
            <li v-for="item in hotList">
              <a href="">
                <img v-bind:src="item" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <zcool-menu v-bind:menuData="menuList"></zcool-menu>
    <div class="z-wraper">
      <groom-list v-bind:listGrooms="groomDatas"></groom-list>
      <page-list :len="len"></page-list>
      <div class="z-index-ad">
        <img src="../../static/images/index_images/zcool_foot_banner.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/banner'
import zMenu from '../components/z_menu'
import Groom from '../components/list_groom'
import Page from '../components/page_nav'
export default {
  name: '#zIndex',
  data () {
    return {
      bannerList: [],
      hotList: [],
      menuList: [],
      groomDatas: [],
      len: ['1', '2', '3', '4', '...', '97', '98', '99']
    }
  },
  components: {
    'banner-list': Banner,
    'zcool-menu': zMenu,
    'groom-list': Groom,
    'page-list': Page
  },
  mounted () {
    this.getGroom()
  },
  methods: {
    getGroom: function () {
      this.$http.get('../static/json/index.json').then((res) => {
        this.bannerList = res.data.result.bannerList
        this.hotList = res.data.result.hot
        this.menuList = res.data.result.menu
        this.groomDatas = res.data.result.groom
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
 @import url("../assets/css/index.css");
</style>
