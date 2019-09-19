<template>
  <div>
    <div class="banner" @click="handlebanner">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icons">&#xe616;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade>
      <common-gallery :gallaryImgs="gallaryImgs" v-show="showgallery" @close="handleclosebanner"></common-gallery>
    </fade>
  </div>
</template>
<script>
import CommonGallery from 'common/gallery/Gallery'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showgallery: false
    }
  },
  methods: {
    handlebanner () {
      this.showgallery = true
    },
    handleclosebanner () {
      this.showgallery = false
    }
  },
  components: {
    CommonGallery,
    Fade
  }
}
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icons {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
