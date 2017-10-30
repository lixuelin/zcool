<template>
  <div class="designer-detail" id="desigerDetail">
    <div class="designer-detail-head">
      <div class="designer-detail-head-bg">
        <div class="z-wraper">
          <div class="designer-detail-head-cont">
            <div class="designer-detail-head-cont-left">
              <p>
                <span>人气</span>
                <span class="designer-detail-head-num">238923</span>
              </p>
              <span class="designer-detail-head-line"></span>
              <p>
                <span>积分</span>
                <span class="designer-detail-head-num">238923</span>
              </p>
            </div>
            <div class="designer-detail-head-cont-right">
              <p>
                <span>粉丝</span>
                <span class="designer-detail-head-num">238923</span>
              </p>
              <span class="designer-detail-head-line"></span>
              <p>
                <span>关注</span>
                <span class="designer-detail-head-num">238923</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="designer-detail-main">
      <div class="designer-detail-author">
        <div class="designer-detail-author-img">
          <img :src="authorData.img_url" />
        </div>
        <h4><span>{{authorData.author}}</span></h4>
        <p class="designer-detail-author-city"><span>并州</span>|<span>平面设计师</span></p>
        <p class="designer-detail-author-tip">字体设计网课-咨询微信bin</p>
        <div>
          <button type="button" class="z-btn z-designer-btn">关注</button><button type="button" class="z-btn z-designer-btn">私信</button>
        </div>
      </div>
      <zcool-menu v-bind:menuData="menuList"></zcool-menu>
    </div>
    <div class="z-wraper">
       <div class="designer-detail-opus">
        <p class="designer-detail-opus-all">共上传<span>234</span>组创作</p>
        <groom-list v-bind:groomData="groomList"></groom-list>
        <page-list></page-list>
      </div>
      <div class="designer-detail-issue">
        <aside class="designer-detail-issue-aside">
          <div class="designer-detail-issue-box">
            <h4>所属团队</h4>
            <div class="designer-detail-issue-cont">
              <ul class="designer-detail-issue-team">
                <li><img src="../../static/images/designer_detail/zcool_designer_detail_56.png" /></li>
                <li><img src="../../static/images/designer_detail/zcool_designer_detail_58.png" /></li>
                <li><img src="../../static/images/designer_detail/zcool_designer_detail_60.png" /></li>
              </ul>
            </div>
          </div>
          <div class="designer-detail-issue-box">
            <h4>TA开设的课程</h4>
            <div class="designer-detail-issue-cont">
              <p>字体设计基础课程</p>
              <div>
                <img src="../../static/images/designer_detail/zcool_designer_detail_69.png" />
              </div>
            </div>
          </div>
          <div class="designer-detail-issue-box">
            <h4>个人链接</h4>
            <div class="designer-detail-issue-cont">
              <div class="designer-detail-issue-use">
                <img src="../../static/images/designer_detail/zcool_designer_detail_75.png" />
              </div>
            </div>
          </div>
          <div class="designer-detail-issue-box">
            <h4>访客</h4>
            <div class="designer-detail-issue-cont">
              <ul class="designer-detail-issue-team">
                <li v-for="item in visitorList">
                  <img v-bind:src="item.img" />
                  <div>
                    <p>{{item.name}}</p>
                    <span>{{item.time}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <article class="designer-detail-issue-article">
          <div class="designer-detail-issue-input">
            <text-dialog></text-dialog>
          </div>
          <div class="designer-detail-issue-words">
            <p>全部留言 <span>2398</span></p>
            <issue-list v-bind:issueData="issueList"></issue-list>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import zMenu from '../components/z_menu'
import Page from '../components/page_nav'
import Groom from '../components/designer_detail_groom'
import Issue from '../components/issue_word'
import Dialog from '../components/designer_dialog'

export default {
  name: '#designerDetail',
  data () {
    return {
      authorData: {},
      menuList: [],
      groomList: [],
      visitorList: [],
      issueList: []
    }
  },
  components: {
    'zcoolMenu': zMenu,
    'pageList': Page,
    'groomList': Groom,
    'issueList': Issue,
    'textDialog': Dialog
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData: function () {
      this.authorData = this.$route.params
      this.$http.get('../static/json/designer_detail.json').then((res) => {
        this.menuList = res.data.result.menu
        this.groomList = res.data.result.groom
        this.visitorList = res.data.result.visitor
        this.issueList = res.data.result.issue
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
@import url("../assets/css/designer_detail.css");
</style>
