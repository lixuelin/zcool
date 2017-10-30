<template>
  <div class="designer-groom designerGroom">
    <ul>
      <li v-for="item in designerData">
        <div class="designer-groom-box">
          <div class="designer-groom-head">
            <div class="designer-groom-head-img" v-on:click="goTo()">
              <img v-bind:src="item.head_img" />
            </div>
          </div>
          <div class="designer-groom-auther">
            <h4 v-on:click="goTo()">{{item.name}}<i class="icon-"></i></h4>
            <p class="designer-groom-auther-tag"><span>{{item.city}}</span>|<span>{{item.job}}</span></p>
            <div class="designer-groom-auther-tip">
              <div>
                <span>创作<span class="designer-groom-auther-tip-num">{{item.works}}</span></span><span  class="designer-groom-auther-tip-line">|</span><span>粉丝<span class="designer-groom-auther-tip-num">{{item.follower}}</span></span>
              </div>
              <p>{{item.tip}}</p>
            </div>
            <div class="designer-groom-follow">
              <button class="z-btn designer-groom-btn">关注</button>
            </div>
          </div>
          <div class="designer-groom-list">
            <ul>
              <li v-for="opus in item.opus" v-on:click="goToOpus()">
                <div class="designer-groom-list-img">
                  <img v-bind:src="opus" />
                </div>
              </li>
            </ul>
          </div>
          <div class="designer-groom-more" v-on:click="goTo()">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '.designerGroom',
  props: ['designerData'],
  methods: {
    goTo: function () {
      this.$router.push({
        path: '/designer_detail',
        name: 'designerDetail'
      })
    },
    goToOpus: function () {
      this.$router.push({
        path: '/top_detail',
        name: 'topDetail'
      })
    }
  }
}
</script>

<style>
@import url("../assets/css/plugin/designer_groom.css");
</style>
