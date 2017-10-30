<template>
  <div class="plan-groom planGroom">
    <ul>
      <li v-for="item in planData">
        <span class="plan-groom-tag">{{item.tag}}</span>
        <div class="plan-groom-box">
          <div class="plan-groom-img">
            <img v-bind:src="item.img_url" />
          </div>
          <div class="plan-groom-cont">
            <h4>
              <a href="">{{item.title}}</a>
            </h4>
            <div class="plan-groom-cont-close" v-if="!item.close==0">
              <span>距离截稿还有{{item.close}}天</span>
            </div>
            <p><span>{{item.start}}</span>-<span>{{item.end}}</span></p>
          </div>
          <div class="plan-groom-other">
            <div class="plan-groom-other-time">
              <span v-if="item.issue"><span class="icon-time"></span><span>{{item.issue}}</span></span>
              <span v-if="item.going"><span>{{item.going}}</span></span>
            </div>
            <div class="plan-groom-other-msg">
              <span class="plan-groom-other-msg-arr" v-show="item.read>=''"><span class="icon-eye-open"></span>{{item.read}}</span>
              <span class="plan-groom-other-msg-arr" v-show="item.pic>=0"><span class="icon-picture"></span>{{item.pic}}</span>
              <span class="plan-groom-other-msg-arr" v-show="item.person>=0"><span class="icon-user"></span>{{item.person}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '.planGroom',
  props: ['planData']
}
</script>

<style>
@import url("../assets/css/plugin/plan_groom.css");
</style>
