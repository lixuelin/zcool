<template>
  <div class="z-groom groomList">
    <ul class="clearfix">
      <li v-for="(item,index) in listGrooms">
        <div>
          <div class="z-groom-img" @click="gotoDetail(item)">
            <span class="z-groom-img-tip" v-show="item.tip">{{item.tip}}</span>
            <img :src="item.img_url" />
          </div>
          <div class="z-groom-head">
            <h4 @click="gotoDetail(item)"><a>{{item.title}}</a></h4>
            <span class="z-groom-tag">{{item.tag}}</span>
            <p>
              <span class="z-groom-arr" v-if="item.read"><span class="icon-eye-open"></span>{{item.read}}</span>
              <span class="z-groom-arr" v-if="item.msg"><span class="icon-comment-alt"></span>{{item.msg}}</span>
              <span class="z-groom-arr" v-if="item.laud"><span class="icon-thumbs-up"></span>{{item.laud}}</span>
              <span class="z-groom-arr" v-if="item.pic"><span class="icon-picture"></span>{{item.pic}}</span>
              <span class="z-groom-arr" v-if="item.star"><span class="icon-star-empty"></span>{{item.star}}</span>
            </p>
          </div>
          <div class="z-groom-cont">
            <div class="z-groom-cont-img" @click="gotoDesigner(item)" @mouseover="showAuthor(index)" @mouseout="hideAuthor">
              <img v-bind:src="item.img_url" />
            </div>
            <div class="z-groom-cont-name" @click="gotoDesigner(item)" @mouseover="showAuthor(index)" @mouseout="hideAuthor">
              <span>{{item.author}}</span>
            </div>
            <div class="z-groom-time">
              <time>{{item.time}}</time>
            </div>
          </div>
          <div class="z-groom-author" v-show="index == cur">
            <zcool-author :authorData="item"></zcool-author>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Author from '../components/z_author'
export default {
  name: '.groomList',
  data () {
    return {
      isAuthor: false,
      cur: ''
    }
  },
  components: {
    'zcoolAuthor': Author
  },
  props: ['listGrooms'],
  methods: {
    gotoDetail: function (items) {
      this.$router.push({
        path: '/top_detail',
        name: 'topDetail',
        params: items
      })
    },
    gotoDesigner: function (items) {
      this.$router.push({
        path: '/designer_detail',
        name: 'designerDetail',
        params: items
      })
    },
    showAuthor: function (index) {
      this.cur = index
    },
    hideAuthor: function () {
      this.cur = 99999
    }
  }
}
</script>

<style>
@import url("../assets/css/plugin/list_groom.css");
</style>
