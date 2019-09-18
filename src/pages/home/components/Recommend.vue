<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/50/5020c11e7dde947390.water.jpg_200x200_a7b59471.jpg',
        title: '武义清水湾沁温泉',
        desc: '清水湾座落在武义，温泉之乡，所以选择来入住，感受一下，果不出意料'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/50/5020c11e7dde947390.water.jpg_200x200_a7b59471.jpg',
        title: '武义清水湾沁温泉',
        desc: '清水湾座落在武义，温泉之乡，所以选择来入住，感受一下，果不出意料'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/50/5020c11e7dde947390.water.jpg_200x200_a7b59471.jpg',
        title: '武义清水湾沁温泉',
        desc: '清水湾座落在武义，温泉之乡，所以选择来入住，感受一下，果不出意料'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-btn {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
