<template>
  <div class="order">
    <div class="order__price">实付金额 &yen;<b>{{price}}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
  <div class="mask">
    <div class="mask__content">
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div class="mask__content__btn mask__content__btn--first" @click="handleCancelOrder">取消订单</div>
        <div class="mask__content__btn mask__content__btn--last"  @click="handleConfirmOrder">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/cartEffects.js'
import { useRoute } from 'vue-router'

export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { price } = useCommonCartEffect(shopId)
    const handleCancelOrder = () => {
      alert('cancel')
    }
    const handleConfirmOrder = () => {
      alert('confirm')
    }
    return { price, handleCancelOrder, handleConfirmOrder }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: .49rem;
  line-height: .49rem;
  background: $bgColor;
  &__price {
    flex: 1;
    font-size: .14rem;
    text-indent: .24rem;
    color: $conntent-font-color;
  }
  &__btn {
    width: .98rem;
    background: #4FB0F9;
    color: $bgColor;
    text-align: center;
    font-size: .14rem;
  }
}
.mask {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background:  rgba(0,0,0,0.50);
  &__content {
    position: absolute;
    width: 3rem;
    height: 1.57rem;
    background: $bgColor;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: .04rem;
    text-align: center;
    &__title {
      font-size: .18rem;
      color: $conntent-font-color;
      line-height: .26rem;
      margin: .24rem 0 .08rem 0;
    }
    &__desc {
      font-size: .14rem;
      color: #666666;
      line-height: .2rem;
    }
    &__btns {
      display: flex;
      margin: .24rem .58rem;
    }
    &__btn {
      flex: 1;
      width: .8rem;
      height: .32rem;
      border: .01rem solid #4FB0F9;
      border-radius: .16rem;
      line-height: .32rem;
      font-size: .14rem;
      &--first {
        margin-right: .12rem;
        color: #0091FF;
      }
      &--last {
        margin-left: .12rem;
        color: $bgColor;
        background: #4FB0F9;
      }
    }
  }
}
</style>
