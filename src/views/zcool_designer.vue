<template>
  <div class="z-designer" id="zDesigner">
    <zcool-menu v-bind:menuData="menuList"></zcool-menu>
    <div class="z-designer-choose">
      <div class="z-wraper">
        <div class="z-designer-choose-select">
          <div class="z-designer-choose-term">
            <ul>
              <li>
                <span>筛选：</span>
              </li>
              <li>
                <span>推荐设计师<i class="icon-angle-down"></i></span>
              </li>
              <li>
                <span>不限职业<i class="icon-angle-down"></i></span>
              </li>
              <li>
                <span>不限城市<i class="icon-angle-down"></i></span>
              </li>
            </ul>
          </div>
          <div class="z-designer-choose-sort">
            <ul>
              <li>
                <span>排序：</span>
              </li>
              <li>
                <span>人气最多<i class="icon-angle-down"></i></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="z-wraper">
      <div class="z-designer-main">
        <p class="z-designer-main-head">共<span>2342</span>位设计师</p>
        <groom-list v-bind:designerData="designerList"></groom-list>
        <page-list></page-list>
      </div>
    </div>
  </div>
</template>

<script>
import zMenu from '../components/z_menu'
import Groom from '../components/designer_groom'
import Page from '../components/page_nav'
export default {
  name: '#zDesigner',
  data () {
    return {
      menuList: [],
      designerList: []
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
      this.$http.get('../static/json/designer.json').then((res) => {
        this.menuList = res.data.result.menu
        this.designerList = res.data.result.designers
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
@import url("../assets/css/designer.css");
</style>
