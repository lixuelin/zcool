<template>
  <div class="z-list zList">
    <h4 class="z-list-title">{{listData.title}}</h4>
    <ul>
    	<li v-for="item in listData.list">
    	  <span>{{item}}</span>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '.zList',
  props: ['listData']
}
</script>

<style>
@import url("../assets/css/plugin/job_list.css");
</style>
