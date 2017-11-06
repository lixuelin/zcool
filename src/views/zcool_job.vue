<template>
  <div id="zJob" class="z-job">
    <div class="z-job-top">
      <div class="z-wraper z-job-top-cont">
        <div class="z-job-city">
          <span class="z-job-city-current">{{curCity}}</span>
          <span class="z-job-city-choose" @click="showCity=true">切换城市<span class="icon-angle-right"></span></span>
        </div>
        <job-city ref="setCity" :curCity="curCity" @changeCity="checkCity" v-show="showCity"></job-city>
        <div class="z-job-nav">
          <ul>
            <li class="current">
              <span>首页</span>
            </li>
            <li>
              <span>企业</span>
            </li>
            <li>
              <span>我发布的职位</span>
            </li>
          </ul>
        </div>
        <div class="z-job-resume">
          <span>我的简历</span>
        </div>
      </div>
    </div>
    <div class="z-job-main">
      <div class="z-wraper z-job-main-cont">
        <aside class="z-job-aside">
          <div class="z-job-aside-box">
            <div class="z-job-aside-ps">
              <job-list v-bind:listData="psData"></job-list>
            </div>
            <div class="z-job-aside-job">
              <job-list v-bind:listData="jobData"></job-list>
            </div>
          </div>
          <div class="z-job-aside-box">
            <div class="z-job-aside-head z-job-aside-read">
              <h4>职位订阅</h4>
              <span class="icon-arrow-right"></span>
            </div>
          </div>
          <div class="z-job-aside-box">
            <div class="z-job-aside-head">
              <h4>联系我们</h4>
              <div class="z-job-aside-contact">
                <ul>
                  <li>
                    <i class="icon-phone"></i>
                    <p>
                      <span>010-56638300</span>
                    </p>
                    <p>
                      <span>周一至周五 10:00-18:30</span>
                    </p>
                  </li>
                  <li>
                    <i class="icon-weibo"></i>
                    <p>
                      <span>在线客服QQ：800036486</span>
                    </p>
                    <p>
                      <span>周一至周五 10:00-18:30</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="z-job-aside-box">
            <div class="z-job-aside-join">
              <p>招聘顾问：站酷招聘小妹</p>
              <div>
                <img src="../../static/images/job_images/zcool_job_13.png" />
              </div>
              <p>优质职位/设计师每日一推</p>
            </div>
          </div>
        </aside>
        <article class="z-job-article">
          <div class="z-job-search">
            <input type="text" placeholder="搜索职位或公司" /><button type="button" class="z-btn z-job-search-btn">搜索</button>
          </div>
          <div class="z-job-words">
            <span>热门搜索：</span><span v-for="item in words">{{item}}</span>
          </div>
          <div class="z-job-ad">
            <img src="../../static/images/job_images/zcool_job_03.png" />
          </div>
          <div class="z-job-menu">
            <ul>
              <li class="current">
                <span>推荐</span>
              </li>
              <li>
                <span>最新</span>
              </li>
            </ul>
            <span class="z-job-menu-add"><span class="icon-plus-sign"></span><span class="z-job-menu-add-text">发布职位</span></span>
          </div>
          <div class="z-job-list">
            <job-item v-bind:jobData="jobGroom"></job-item>
            <div class="">
              <button type="button" class="z-btn z-job-btn">加载更多</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import List from '../components/job_list'
import Groom from '../components/job_groom'
import City from '../components/z_city'
export default {
  name: '#zJob',
  data () {
    return {
      curCity: '北京',
      showCity: false,
      psData: {},
      jobData: {},
      words: [],
      jobGroom: []
    }
  },
  components: {
    'jobList': List,
    'jobItem': Groom,
    'jobCity': City
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('../static/json/job.json').then((res) => {
        this.psData = res.data.result.ps
        this.jobData = res.data.result.job
        this.words = res.data.result.words
        this.jobGroom = res.data.result.tjJob
      }, (err) => {
        console.log(err)
      })
    },
    checkCity (data) {
      console.log(data)
      this.curCity = data.city
      this.showCity = data.showCity
    }
  }
}
</script>

<style>
@import url("../assets/css/job.css");
</style>
