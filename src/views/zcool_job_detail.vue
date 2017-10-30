<template>
  <div class="job-detail" id="jobDetail">
    <zcool-menu v-bind:menuData="menuList" v-bind:class="menuClass"></zcool-menu>
    <div class="z-wraper">
      <div class="job-detail-box">
        <article class="job-detail-article">
          <div class="job-detail-article-box">
            <div class="job-detail-article-head">
              <div class="job-detail-article-share">
                <span>分享到 <span class="icon-angle-down"></span></span>
              </div>
              <span class="job-detail-article-who">{{jobData.company}}招聘</span>
              <h1 class="job-detail-article-job">{{jobData.title}} <span>北京/成都</span></h1>
              <div>
                <span class="job-detail-article-pay">{{jobData.pay}}</span><span class="job-detail-article-years">经验 {{jobData.years}}/{{jobData.school}}</span>
              </div>
              <p class="job-detail-article-about">{{jobData.detail}}</p>
            </div>
            <div class="job-detail-article-body">
              <div class="job-detail-article-body-cont">
                <h4>职位描述</h4>
                <ul class="job-detail-article-list">
                  <li v-for="item in jobDetail">- {{item}}</li>
                </ul>
                <p>职位要求：</p>
                <ul class="job-detail-article-list">
                  <li v-for="item in jobAsk">- {{item}}</li>
                </ul>
              </div>
              <div class="job-detail-article-body-cont">
                <h4>所属部门</h4>
                <p>设计部</p>
              </div>
              <div class="job-detail-article-body-cont">
                <h4>工作地点</h4>
                <p>北京市海淀区西二旗软件园辉煌国际 <a href="">查看地图</a></p>
              </div>
            </div>
          </div>
          <div class="job-detail-article-box">
            <div class="job-detail-article-resume">
              <p>登录后可以投递简历</p>
              <div class="job-detail-article-resume-login">
                <button class="z-btn">登录</button>
              </div>
            </div>
          </div>
          <div class="job-detail-article-box">
            <div class="job-detail-article-resume">
              <p>相似职位推荐</p>
              <p>
                <a href="">换一换</a>
              </p>
            </div>
          </div>
          <groom-list v-bind:jobData="jobList"></groom-list>
        </article>
        <aside class="job-detail-aside job-detail-company">
          <div class="job-detail-aside-box">
            <div class="job-detail-company-head">
              <div class="job-detail-company-img">
                <img src="../../static/images/job_images/zcool_job_07.png" />
              </div>
              <p class="job-detail-company-name">减艺（北京）国际文化传播有限公司</p>
              <div class="job-detail-company-btn">
                <button class="z-btn">查看主页</button>
              </div>
            </div>
          </div>
          <div class="job-detail-aside-box">
            <div class="job-detail-aside-box-head">
              <h4>基本信息</h4>
            </div>
            <div class="job-detail-company-msg">
              <ul>
                <li>
                  <span class="job-detail-company-msg-icon"><span class="icon-desktop"></span></span>
                  <p>{{company.www}}</p>
                </li>
                <li>
                  <span class="job-detail-company-msg-icon"><span class="icon-tags"></span></span>
                  <p>{{company.class}}</p>
                </li>
                <li>
                  <span class="job-detail-company-msg-icon"><span class="icon-group"></span></span>
                  <p>{{company.person}}</p>
                </li>
                <li>
                  <span class="job-detail-company-msg-icon"><span class="icon-money"></span></span>
                  <p>{{company.pay}}</p>
                </li>
                <li>
                  <span class="job-detail-company-msg-icon"><span class="icon-building"></span></span>
                  <p>{{company.add}}</p>
                </li>
              </ul>
            </div>
            <div class="job-detail-company-tag">
              <span v-for="item in company.tag">{{item}}</span>
            </div>
          </div>
          <div class="job-detail-aside-box">
            <div class="job-detail-aside-box-head">
              <h4>其他职位</h4>
            </div>
            <div class="job-detail-company-other">
              <ul>
                <li v-for="item in jobList">
                  <h4>{{item.title}}</h4>
                  <div class="job-detail-company-other-ask">
                    <span class="job-detail-company-other-pay">{{item.pay}}</span>/<span>经验{{item.years}}{{item.school}}</span>
                  </div>
                  <p>{{item.time}}</p>
                </li>
                <li>
                  <div class="job-detail-company-btn">
                    <button class="z-btn">查看全部</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '../components/z_menu'
  import Groom from '../components/job_groom'
  export default {
    name: '#jobDetail',
    data () {
      return {
        jobData: {},
        menuClass: 'job-detail-menu',
        menuList: [],
        jobDetail: [],
        jobAsk: [],
        jobList: [],
        company: {}
      }
    },
    components: {
      'zcoolMenu': Menu,
      'groomList': Groom
    },
    mounted () {
      this.getData()
      this.getJob()
    },
    methods: {
      getData: function () {
        this.jobData = this.$route.params
        this.$http.get('../static/json/job_detail.json').then((res) => {
          this.menuList = res.data.result.menu
          this.jobDetail = res.data.result.jobDetail
          this.jobAsk = res.data.result.jobAsk
          this.company = res.data.result.detail
        }, (err) => {
          console.log(err)
        })
      },
      getJob: function () {
        this.$http.get('../static/json/job.json').then((res) => {
          this.jobList = res.data.result.tjJob
          this.jobList.length = 5
        }, (err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style>
@import url("../assets/css/job_detail.css");
</style>
