<template>
    <div class="top">
    <div class="top__header">
      <div class="iconfont top__header__back" @click="handlebackclick">&#xe7e0;</div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
      <div class="top__receiver__info">
        <span class="top__receiver__name">瑶妹（先生）</span>
        <span class="top__receiver__name">18911024266</span>
      </div>
      <div class="iconfont top__receiver__icon">&#xe7e0;</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'TopArea',
  setup () {
    const router = useRouter()
    const handlebackclick = () => {
      router.back()
    }
    return { handlebackclick }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
       font-size: .2rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;
    &__title {
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: $conntent-font-color;
      line-height: .22rem;
    }
    &__address {
      padding: 0 .4rem 0 .16rem;
      font-size: .16rem;
      color: $conntent-font-color;
      line-height: .2rem;
    }
    &__info {
      padding: .06rem 0 .16rem .16rem;
    }
    &__name {
      font-size: .12rem;
      color: #666666;
      line-height: .18rem;
      margin-right: .06rem;
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: #666;
      font-size: .2rem;
    }
  }
}
</style>
