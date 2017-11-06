<template lang="html">
  <div id="zCity" class="zcool-city">
    <div class="zcool-city-cont">
      <div class="zcool-city-cont-head">
        <h4>切换城市</h4>
        <span class="zcool-city-cont-close" @click="closeCity">X</span>
      </div>
      <div class="zcool-city-cont-body">
        <div>
          <p>您当前选择的城市是:  <span class="z-btn">{{curCity}}</span></p>
        </div>
        <div>
          <p>点击进入或者选择其他城市：</p>
          <ul>
            <li v-for="city in citys" v-if="city!=curCity" @click="checkCity(city)">
              <span>{{city}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '#zCity',
  data () {
    return {
      cityData: {},
      citys: ['全国', '北京', '上海', '广州', '杭州', '深圳', '其他城市']
    }
  },
  props: ['curCity', 'showCity'],
  methods: {
    closeCity () {
      this.showCity = true
    },
    checkCity (city) {
      this.cityData.city = city
      this.cityData.showCity = false
      this.$emit('changeCity', this.cityData)
    }
  }
}
</script>

<style lang="css">
@import '../assets/css/plugin/z_city.css'
</style>
