<template>
  <div class="top-groom topGroom">
    <ul>
      <li v-for="(item,index) in groomData" >
        <div class="top-groom-cont">
          <div class="top-groom-cont-ranking">
            <span class="top-groom-cont-ranking-num">{{index+1}}</span>
            <span>分数</span>
            <span class="top-groom-cont-ranking-score">{{item.score}}</span>
          </div>
          <div class="top-groom-cont-opus">
            <div class="top-groom-cont-opus-img" v-on:click="gotoDetail(item)">
              <img v-bind:src="item.img_url" />
            </div>
          </div>
          <div class="top-groom-cont-anthour">
            <h4 v-on:click="gotoDetail(item)">{{item.title}}</h4>
            <span class="top-groom-cont-anthour-tag">{{item.tag}}</span>
            <div class="top-groom-cont-anthour-foot">
              <div class="top-groom-cont-anthour-img" v-on:click="gotoAuthor(item)">
                <img v-bind:src="item.head_img" />
              </div>
              <div class="top-groom-cont-anthour-name" v-on:click="gotoAuthor(item)">
                <span>{{item.name}}</span>
              </div>
              <time>{{item.time}}</time>
            </div>
          </div>
          <div class="top-groom-cont-skip">
            <span @click="showDetail(item)">查看详情<span :class="{'icon-angle-down': isHide,'icon-angle-up': !isHide}"></span></span>
          </div>
        </div>
        <div class="top-groom-have" v-show="item.showDetail">
          <div class="top-groom-have-prev">
            <span>上周数据详情</span>
          </div>
          <div class="top-groom-have-cont">
            <div class="top-groom-have-cont-row">
              <span class="top-groom-have-cont-detail">
                <span>上周排名</span>
                <p>{{item.prevWeek}}</p>
              </span>
              <span class="top-groom-have-cont-line">|</span>
              <span class="top-groom-have-cont-detail">
                <span>本周排名</span>
                <p>{{item.currentWeek}}</p>
              </span>
              <span class="top-groom-have-cont-line">|</span>
              <span class="top-groom-have-cont-detail">
                <span>上榜周期</span>
                <p>{{item.topWeek}}</p>
              </span>
            </div>
            <div class="">
              <span class="top-groom-have-cont-detail">
                <span>人气</span>
                <p>{{item.person}}</p>
              </span>
              <span class="top-groom-have-cont-line">|</span>
              <span class="top-groom-have-cont-detail">
                <span>推荐次数</span>
                <p>{{item.tjTime}}</p>
              </span>
              <span class="top-groom-have-cont-line">|</span>
              <span class="top-groom-have-cont-detail">
                <span>收藏次数</span>
                <p>{{item.shareTime}}</p>
              </span>
              <span class="top-groom-have-cont-line">|</span>
              <span class="top-groom-have-cont-detail">
                <span>评论次数</span>
                <p>{{item.disscusTime}}</p>
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '.topGroom',
  data () {
    return {
      data: {},
      isHide: false
    }
  },
  props: ['groomData'],
  mounted () {
    this.setData()
  },
  methods: {
    setData: function (item) {
      this.data = item
    },
    gotoDetail: function (items) {
      console.log(items)
      this.$router.push({
        path: '/top_detail',
        name: 'topDetail',
        params: items
      })
    },
    gotoAuthor: function (items) {
      this.$router.push({
        path: '/designer_detail',
        name: 'designerDetail',
        params: items
      })
    },
    showDetail: function (item) {
      item.showDetail = !item.showDetail
      this.isHide = !this.isHide
    }
  }
}
</script>

<style>
@import url("../assets/css/plugin/top_groom.css");
</style>