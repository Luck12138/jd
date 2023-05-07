<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="docker">
        <div v-for="(item, index) in dockerList" :class="{'docker_item':true, 'docker_item--active':index==0}" :key="item.text">
            <router-link :to='item.to'>
            <div class="iconfont" v-html="item.icon">
            </div>
            <div class="docker_title">{{item.text}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: ' &#xe602', text: '首页', to: { name: 'Home' } },
      { icon: ' &#xe624', text: '购物车', to: { name: 'CartList' } },
      { icon: ' &#xe603', text: '订单', to: { name: 'Home' } },
      { icon: ' &#xe6b3', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: 1px solid $conntent-bgcolor;
    &_item {
    flex: 1;
    text-align: center;
    .iconfont {
        font-size: .20rem;
        margin: .07rem 0 .02rem 0;
    }
    a {
      color: $conntent-font-color;
      text-decoration: none;
    }
    &--active {
      a {
          color: #1FA4FC;
      }
    }
    }
    &_title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
    }
    color: $conntent-font-color;
}
</style>
