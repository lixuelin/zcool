<template>
  <div class="zcool-author zAuthor">
    <div class="z-author">
      <div class="z-author-img">
        <div class="z-author-img-box" @click="gotoDesigner(authorData)">
          <img :src="authorData.img_url" />
        </div>
      </div>
      <div class="z-author-cont">
        <h4 @click="gotoDesigner(authorData)"><span>{{authorData.author}}</span></h4>
        <p><span>北京市</span><span class="z-author-cont-line">|</span><span>插画师</span></p>
        <div class="z-author-cont-btns">
          <button type="button" class="z-btn current">关注</button><button type="button" class="z-btn">私信</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '.zAuthor',
    props: ['authorData'],
    methods: {
      gotoDesigner: function (items) {
        this.$router.push({
          path: '/designer_detail',
          name: 'designerDetail',
          params: items
        })
      }
    }
  }
</script>

<style>
  @import url("../assets/css/plugin/z_author.css");
</style>
