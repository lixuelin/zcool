<template>
  <div class="issue-word issueWord">
    <ul>
      <li v-for="item in issueData">
        <div class="issue-word-cont">
          <div class="issue-word-cont-img">
            <div class="issue-word-cont-img-box">
              <img v-bind:src="item.img" />
            </div>
          </div>
          <div class="issue-word-cont-talk">
            <div>
              <h4><span>{{item.author}}</span><time>{{item.time}}</time></h4>
              <p>{{item.cont}}</p>
              <div class="issue-word-cont-talk-feedback" v-show="item.feedbackauthor!=''">
                <h4>{{item.feedbackauthor}}</h4>
                <p>{{item.feedbackCont}}</p>
              </div>
            </div>
            <div class="issue-word-dialog">
              <div class="issue-word-dialog-handle">
                <span class="icon-comment-alt"></span>
              </div>
              <feedback-Dialog v-show="isDialog"></feedback-Dialog>
            </div>
          </div>
        </div>
      </li>
      <li>
        <span>查看更多</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Dialog from './designer_dialog'
  export default {
    name: '.issueWord',
    data () {
      return {
        isDialog: false
      }
    },
    components: {
      'feedbackDialog': Dialog
    },
    props: ['issueData']
  }
</script>

<style>
  @import "../assets/css/plugin/issue_word.css"
</style>
