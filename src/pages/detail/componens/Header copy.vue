<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showabs">
      <div class="iconfont header-abs-back">&#xe7eb;</div>
    </router-link>
    <div class="header-fixed" v-show="!showabs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe7eb;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showabs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  },
  //   页面展示的时候绑定事件
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  //   页面影藏的时候解绑事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  line-height: 0.8rem;
  height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerH;
  line-height: $headerH;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.32rem;

  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
