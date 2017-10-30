<template>
  <div class="z-plan" id="zPlan">
    <zcool-menu v-bind:menuData="menuList"></zcool-menu>
    <div class="z-wraper">
      <div class="">
        <plan-groom v-bind:planData="planData"></plan-groom>
        <page-list></page-list>
      </div>
    </div>
  </div>
</template>

<script>
import zMenu from '../components/z_menu'
import Groom from '../components/plan_groom'
import Page from '../components/page_nav'

export default {
  name: '#zPlan',
  data () {
    return {
      menuList: [],
      planData: []
    }
  },
  components: {
    'zcoolMenu': zMenu,
    'planGroom': Groom,
    'pageList': Page
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData: function () {
      this.$http.get('../../static/json/plan.json').then((res) => {
        this.menuList = res.data.result.menu
        this.planData = res.data.result.plans
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>
