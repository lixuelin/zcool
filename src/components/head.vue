<template>
  <div class="z-head" id="zHead">
    <div class="container">
      <div class="col-lg-2">
        <div class="z-head-logo">
          <a href=""><img src="../assets/images/zcool_logo.png" /></a>
        </div>
      </div>
      <nav class="col-lg-6">
        <ul class="z-head-nav">
        	<li class="current">
        	  <router-link to="/">首页</router-link>
        	</li>
        	<li>
        	  <router-link to="/find">发现</router-link>
        	  <div class="z-head-nav-list z-head-nav-tags">
        	    <ul>
        	      <li v-for="(item,index) in findList">
        	        <router-link to="/find">{{item}}</router-link>
        	        <i></i>
        	      </li>
        	    </ul>
        	    <div class="z-head-nav-choice">
        	      <router-link to="/find">精选作品></router-link>
        	      <router-link to="/find">精选文字></router-link>
        	      <router-link to="/find">精选收藏></router-link>
        	    </div>
        	  </div>
        	</li>
        	<li>
        	  <router-link to="/job">职位</router-link>
        	  <div class="z-head-nav-list">
        	    <ul>
                <li>
                  <router-link to="/job">职位</router-link>
                </li>
                <li>
                  <router-link to="/job">公司</router-link>
                </li>
                <li>
                  <router-link to="/job">+发布职位</router-link>
                </li>
              </ul>
        	  </div>
        	</li>
        	<li>
            <router-link to="/plan">活动</router-link>
            <div class="z-head-nav-list ">
              <ul>
                <li>
                  <router-link to="/plan">设计大赛</router-link>
                </li>
                <li>
                  <router-link to="/plan">专题策划</router-link>
                </li>
                <li>
                  <router-link to="/plan">线上活动</router-link>
                </li>
                <li>
                  <router-link to="/plan">线下活动</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/matter">素材</router-link>
            <div class="z-head-nav-list">
              <ul>
                <li>
                  <router-link to="/matter">图片</router-link>
                </li>
                <li>
                  <router-link to="/matter">视频</router-link>
                </li>
                <li>
                  <router-link to="/matter">字体</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/class">课程</router-link>
          </li>
          <li class="z-head-nav-more">
            <a>···</a>
            <div class="z-head-nav-list">
              <ul>
                <li>
                  <router-link to="/top">榜单</router-link>
                </li>
                <li>
                  <router-link to="/designer">设计师</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <div class="col-lg-4">
        <div class="col-lg-6">
          <ul class="z-head-set">
            <li>
              <span class="icon-search"></span>
            </li>
            <li>
              <span class="icon-cloud-upload"></span>
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <ul class="z-head-login">
            <li>
              <span>登录</span>
            </li>
            <li class="z-head-login-line">
              <span></span>
            </li>
            <li>
              <span>注册</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '#zHead',
  data () {
    return {
      findList: ['平面', 'UI', '网页', '插画', '动漫', '摄影', '空间', '工业/产品', '三维', '影视', '手工业', '纯艺术', '服装', '其他']
    }
  }
}
</script>

<style scoped="scoped">
@import url("../assets/css/common.css");
@import url("../assets/css/bootstrap/Font-Awesome-3.2.1/css/font-awesome.css");
</style>
