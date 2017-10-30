<template>
  <div class="top-detail" id="topDetail">
    <div class="top-detail-box">
      <div class="z-wraper">
        <div class="top-detail-ad">
          <img src="../../static/images/top_detail/zcool_top_detai_03.png" />
        </div>
      </div>
    </div>
    <div class="top-detail-article">
      <div class="top-detail-article-top">
        <div class="z-wraper top-detail-article-head">
          <div class="top-detail-article-left">
            <div class="top-detail-article-msg">
              <h1>{{articleData.title}}<span class="top-detail-article-msg-hot"></span><span class="icon-list"></span></h1>
              <time>{{articleData.time}}前发布</time>
              <div class="top-detail-article-msg-box">
                <div class="top-detail-article-msg-nav">
                  <ul>
                    <li>
                      <a href="">原创</a>
                    </li>
                    <li class="top-detail-article-msg-nav-line">
                      <span>/</span>
                    </li>
                    <li>
                      <a href="">插画</a>
                    </li>
                    <li class="top-detail-article-msg-nav-line">
                      <span>/</span>
                    </li>
                    <li>
                      <a href="">其他插画</a>
                    </li>
                    <li>
                      <span>◎</span>
                    </li>
                  </ul>
                </div>
                <div class="top-detail-article-msg-num">
                  <div class="top-detail-article-msg-num-cont">
                    <span class="top-detail-article-msg-num-count"><span class="icon-eye-open"></span> {{articleData.read}}</span>
                    <span class="top-detail-article-msg-num-count"><span class="icon-comment-alt"></span> {{articleData.msg}}</span>
                    <span class="top-detail-article-msg-num-count"><span class="icon-thumbs-up"></span> {{articleData.laud}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="top-detail-article-right">
            <zcool-author v-bind:authorData="articleData"></zcool-author>
          </div>
        </div>
      </div>
      <div class="top-detail-article-cont">
        <div class="z-wraper">
          <div class="top-detail-article-cont-detail" v-html="articleData.detail_cont"></div>
          <div class="top-detail-article-cont-laud">
            <div class="top-detail-article-cont-laud-count">
              <span class="icon-thumbs-up"></span>
              <span>42489</span>
            </div>
          </div>
          <page-list></page-list>
        </div>
        <div class="top-detail-article-cont-tag">
          <div class="z-wraper top-detail-article-cont-tag-box">
            <div class="top-detail-article-cont-tag-class">
              <ul class="top-detail-article-cont-tag-list">
                <li>
                  <span>标签：</span>
                </li>
                <li v-for="item in tagsList">
                  <span>{{item}}</span>
                </li>
              </ul>
            </div>
            <div class="top-detail-article-cont-tag-share">
              <ul class="top-detail-article-cont-tag-list">
                <li>
                  <span class="icon-share"></span><span>分享</span>
                </li>
                <li>
                  <span class=" icon-star-empty"></span><span>收藏</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="z-wraper">
      <div class="top-detail-info">
        <aside class="top-detail-info-aside">
          <div class="top-detail-info-aside-box">
            <div class="top-detail-info-aside-box-head" v-if="false">
              <h4>作品信息</h4>
            </div>
            <div class="top-detail-info-aside-box-body">
              <zcool-author :class="otherClass" v-bind:authorData="articleData"></zcool-author>
            </div>
          </div>
          <div class="top-detail-info-aside-box">
            <div class="top-detail-info-aside-box-head">
              <h4>作品信息</h4>
            </div>
            <div class="top-detail-info-aside-box-body">
              <ul class="top-detail-info-aside-box-list">
                <li>
                  <span>创作时间</span>
                </li>
                <li>
                  <span>创作工具</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <article class="top-detail-info-article">
          <div class="top-detail-info-article-menu">
            <span class="top-detail-info-article-menu-detail">TA的主页</span>
            <zcool-menu v-bind:menuData="menuList"></zcool-menu>
            <div class="top-detail-info-article-menu-data">
              <ul>
              	<li v-for="item in otherOpus">
              	  <div class="top-detail-info-article-menu-data-img">
              	    <img v-bind:src="item" />
              	  </div>
              	</li>
              </ul>
            </div>
          </div>
          <div class="top-detail-info-article-issue">
            <div class="top-detail-info-article-issue-dialog">
              <issue-dialog></issue-dialog>
            </div>
            <div class="top-detail-info-article-issue-list">
              <p class="top-detail-info-article-issue-list-count">全部评论 <span>23428</span></p>
              <issue-word v-bind:issueData="issueData"></issue-word>
            </div>
          </div>
          <div class="top-detail-info-article-other">
            <div class="top-detail-info-article-groom">
              <groom-other v-bind:listGrooms="groomDatas"></groom-other>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import Page from '../components/page_nav'
  import Author from '../components/z_author'
  import Menu from '../components/z_menu'
  import Dialog from '../components/designer_dialog'
  import Issue from '../components/issue_word'
  import listGroom from '../components/list_groom'
  export default {
    name: '#topDetail',
    data () {
      return {
        articleData: {},
        tagsList: [],
        menuList: [],
        otherClass: 'top-detail-info-aside-author',
        otherOpus: [],
        issueData: [],
        groomDatas: []
      }
    },
    components: {
      'zcoolAuthor': Author,
      'pageList': Page,
      'zcoolMenu': Menu,
      'issueDialog': Dialog,
      'issueWord': Issue,
      'groomOther': listGroom
    },
    mounted () {
      this.getCont()
    },
    methods: {
      getCont: function () {
        this.articleData = this.$route.params
        console.log(this.articleData)
        this.$http.get('../static/json/designer_detail.json').then((res) => {
          this.articleData.detail_cont = res.data.result.groom[0].article
          this.issueData = res.data.result.issue
        }, (err) => {
          console.log(err)
        })
        this.$http.get('../static/json/top_detail.json').then((res) => {
          this.menuList = res.data.result.menu
          this.tagsList = res.data.result.tag
          this.otherOpus = res.data.result.opus
        }, (err) => {
          console.log(err)
        })
        this.$http.get('../static/json/index.json').then((res) => {
          this.groomDatas = res.data.result.groom
          this.groomDatas.length = 4
        }, (err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style>
  @import url("../assets/css/top_detail.css");
</style>
