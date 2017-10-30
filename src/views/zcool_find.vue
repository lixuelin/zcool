<template>
  <div id="zFind" class="z-find">
    <div class="z-find-top">
      <div class="z-find-ad">
        <div class="z-wraper">
          <img src="../../static/images/find_images/zcool_see_head_banner.png" />
        </div>
      </div>
      <div class="z-find-tagsEdit">
        <div class="z-wraper">
          <div class="z-find-tags">
            <ul>
            	<li><span>全部</span></li>
            	<li v-for="item in tagsData">
            	  <span>{{item}}</span>
            	</li>
            	<li><span>自定义</span></li>
            </ul>
          </div>
        </div>
        <zcool-menu v-bind:menuData="menuList"></zcool-menu>
      </div>
    </div>
    <div class="z-wraper">
      <groom-list v-bind:listGrooms="newsData"></groom-list>
      <page-list></page-list>
      <div class="z-find-share">
        <div class="z-find-share-head">
          <span>相关收藏</span>
          <a href="">查看全部<i class="icon-angle-right"></i></a>
        </div>
        <groom-list class="z-find-share-list" v-bind:listGrooms="shareData"></groom-list>
      </div>
      <div class="z-find-bottom">
        <div class="z-find-bottom-ad">
          <img src="../../static/images/find_images/zcool_see_foot_banner.png" />
        </div>
      </div>
      <groom-list v-bind:listGrooms="moreData"></groom-list>
    </div>
  </div>
</template>

<script>
import zMenu from '../components/z_menu'
import Groom from '../components/list_groom'
import Page from '../components/page_nav'
export default {
  name: '#zFind',
  data () {
    return {
      menuList: [],
      tagsData: [],
      newsData: [],
      shareData: [],
      moreData: []
    }
  },
  components: {
    'zcoolMenu': zMenu,
    'groomList': Groom,
    'pageList': Page
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData: function () {
      this.$http.get('../static/json/find.json').then((res) => {
        this.menuList = res.data.result.menu
        this.tagsData = res.data.result.tags
        this.newsData = res.data.result.groom
        this.shareData = res.data.result.share
        this.moreData = res.data.result.more
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
@import url("../assets/css/find.css");
</style>
