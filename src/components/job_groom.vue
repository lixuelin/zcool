<template>
  <div class="job-groom jobGroom">
    <ul>
    	<li v-for="item in jobData">
    	  <div class="job-groom-hot">
    	    <span class="job-groom-hot-bg" v-if="item.hot"></span>
    	    <span class="job-groom-hot-name">{{item.hot}}</span>
    	  </div>
    	  <div class="job-groom-cont">
    	    <div class="job-groom-cont-job">
    	      <h4 v-on:click="gotoDetail(item)">{{item.title}}（{{item.city}}）<span class="job-groom-cont-job-time">{{item.time}}</span></h4>
    	      <p><span class="job-groom-cont-job-pay">{{item.pay}}</span><span>经验{{item.years}}/{{item.school}}</span></p>
    	    </div>
    	    <div class="job-groom-cont-company">
    	      <div class="job-groom-cont-company-img">
    	        <img v-bind:src="item.company_img" />
    	      </div>
    	      <h4>{{item.company}}</h4>
    	      <span>{{item.tip}}</span>
    	    </div>
    	  </div>
    	  <div class="job-groom-other">
    	    <div class="job-groom-other-detail">
    	      <p>{{item.detail}}</p>
    	    </div>
    	    <div class="job-groom-other-tag">
    	      <span v-for="tag in item.tags">{{tag}}</span>
    	    </div>
    	  </div>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'jobGroom',
  props: ['jobData'],
  methods: {
    gotoDetail: function (item) {
      console.log(item)
      this.$router.push({
        path: '/job_detail',
        name: 'jobDetail',
        params: item
      })
    }
  }
}
</script>

<style>
@import url("../assets/css/plugin/job_groom.css");
</style>
