<template>
  <div id="zTop" class="z-top">
    <div class="z-wraper">
      <div class="z-top-ad">
        <img src="../../static/images/top_images/zcool_top_03.png" />
      </div>
      <div class="z-top-main">
        <aside class="z-top-aside">
          <div class="z-top-aside-box">
            <div class="z-top-aside-cont ">
              <div class="z-top-aside-cont-head">
                <h4>当前榜单周期</h4>
                <span>30</span>
              </div>
            </div>
          </div>
          <div class="z-top-aside-box">
            <div class="z-top-aside-cont">
              <div class="z-top-aside-cont-head z-top-aside-line">
                <h4>作品榜单</h4>
              </div>
              <div class="z-top-aside-cont-body z-top-aside-line">
                <ul>
                  <li class="current">
                    <span>总榜</span>
                  </li>
                  <li>
                    <span>平面</span>
                  </li>
                  <li>
                    <span>UI</span>
                  </li>
                  <li>
                    <span>网页</span>
                  </li>
                  <li>
                    <span>插画</span>
                  </li>
                  <li>
                    <span>摄影</span>
                  </li>
                  <li>
                    <span>影视</span>
                  </li>
                  <li>
                    <span>动漫</span>
                  </li>
                </ul>
              </div>
              <div class="z-top-aside-cont-foot">
                <a href="">更多分类</a>
              </div>
            </div>
          </div>
          <div class="z-top-aside-box">
            <div class="z-top-aside-cont">
              <div class="z-top-aside-cont-head z-top-aside-line">
                <h4>文章榜单</h4>
              </div>
              <div class="z-top-aside-cont-body">
                <ul>
                  <li>
                    <span>总榜</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="z-top-aside-box">
            <div class="z-top-aside-cont">
              <div class="z-top-aside-cont-head z-top-aside-line">
                <h4>站酷总榜单规则说明</h4>
              </div>
              <div class="z-top-aside-cont-body">
                <div class="z-top-aside-cont-body-detail">
                  <p>站酷会根据每周全站作品的数据情况，按照每项数据所占权重分别计算得分，采用百分制算法，对总得分数进行排名。其中，使用的数据包括但不仅包括阅读、推荐、收藏、分享、站酷编辑的推荐级别。</p>
                  <p>更新时间：每周二11:00。</p>
                  <p>特别声明</p>
                  <p>站酷秉承公正公开原则，坚决抵制刷榜行为，刷榜行为包括但不仅包括使用程序、号召团队或个人专为刷榜目的而产生的数据。一旦发现刷榜行为，站酷将永久取消该作品上榜资格，涉及2次以上刷榜行为的设计师将永久取消上榜资格。 </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <article class="z-top-article">
          <div class="z-top-article-head z-top-aside-line">
            <h4>作品总榜 <span>每周二11：00更新</span></h4>
            <div class="z-top-article-head-date">
              <span>第30期</span>
              <time><span>2017-10-09</span>~<span>2017-10-15</span><span class="icon-angle-down"></span></time>
            </div>
          </div>
          <div class="z-top-article-body">
            <groom-list v-bind:groomData="groomList"></groom-list>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Groom from '../components/top_groom'
export default {
  name: '#zTop',
  data () {
    return {
      groomList: []
    }
  },
  components: {
    'groomList': Groom
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData: function () {
      this.$http.get('../static/json/top.json').then((res) => {
        this.groomList = res.data.result
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
@import url("../assets/css/top.css");
</style>
