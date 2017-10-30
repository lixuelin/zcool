<template>
  <div id="zFoot" class="z-foot">
    <div class="z-wraper">
      <div class="z-foot-nav">
        <ul>
          <li>
            <a href=""><span class="icon-mobile-phone"></span>移动版</a>
          </li>
          <li v-for="item in navData">
            <a href="">{{item.title}}</a>
          </li>
        </ul>
        <div class="z-foot-nav-talk">
          <span class="icon-twitter"></span>
          <span class="icon-weibo"></span>
        </div>
      </div>
      <div class="z-foot-icp">
        <div class="z-foot-icp-cont">
          <span>京ICP备11017824号-4</span><span class="z-foot-icp-line"></span><span>京ICP证130164号</span><span class="z-foot-icp-line"></span><span>北京市公安局朝阳分局备案编号：11010502000501</span>
        </div>
        <div class="z-foot-icp-cont clearfix">
          <span>网络文化经营许可证 京网文[2016]6173-844号</span><span class="z-foot-icp-line"></span><span>广播电视节目制作经营许可证（京）字第06990号</span>
          <span class="pull-right">Copyright 2006-2017 ZCOOL站酷</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '#zFoot',
  data () {
    return {
      navData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData: function () {
      this.$http.get('../../../static/json/common.json').then((res) => {
        this.navData = res.data.result.foot.nav
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>
