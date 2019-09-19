<template>
  <div>
    <detail-banner :gallaryImgs="gallaryImgs" :sightName="sightName" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import DetailBanner from './componens/Banner'
import DetailHeader from './componens/Header'
import DetailList from './componens/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  data () {
    return {
      categoryList: [],
      gallaryImgs: [],
      sightName: '',
      bannerImg: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
