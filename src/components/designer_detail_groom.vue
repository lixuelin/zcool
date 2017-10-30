<template>
  <div class="designer-detail-groom designerDetailGroom">
    <ul>
      <li v-for="item in groomData">
        <div class="designer-detail-groom-cont">
          <div class="designer-detail-groom-img">
            <img v-bind:src="item.opus_img" />
          </div>
          <div class="designer-detail-groom-opus">
            <h4>{{item.title}}</h4>
            <p><span>{{item.tag}}</span>-<span>{{item.class}}</span></p>
            <span class=""></span>
            <div class="designer-detail-groom-opus-num">
              <span class="designer-detail-groom-opus-num-msg"><span class="icon-eye-open"></span>{{item.read}}</span>
              <span class="designer-detail-groom-opus-num-msg"><span class="icon-comment-alt"></span>{{item.msg}}</span>
              <span class="designer-detail-groom-opus-num-msg"><span class="icon-thumbs-up"></span>{{item.laud}}</span>
            </div>
          </div>
          <div class="designer-detail-groom-foot">
            <span>{{item.issue}}天前</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '.designerDetailGroom',
    props: ['groomData']
  }
</script>

<style>
@import url("../assets/css/plugin/designer_detail_groom.css");
</style>
