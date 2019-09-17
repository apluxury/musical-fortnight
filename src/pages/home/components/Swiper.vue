<template>
  <div class="swiperbox">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1605/ce/1a49b3c1cc81a9f7.jpg_890x330_d73469ef.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/7494fa53d36663f12d6b3ecbe4ed5ca2.jpg_890x330_a37f96fa.jpg'
      }

      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiperbox >>>.swiper-pagination-bullet-active {
  background-color: #fff !important;
}

.swiperbox {
  overflow: hidden;
  width: 100%;
  // 设置宽高比 给图片预留高度
  padding-buttom: 31.25%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
