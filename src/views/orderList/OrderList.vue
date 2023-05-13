<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order" v-for="(item,index) in list" :key="index">
        <div class="order__title">
          {{item.shopName}}
          <span class="order__status">{{item.isCanceled ? '已取消' : '已下单'}}</span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template v-for="(innerItem,innderIndex) in item.products" :key="innderIndex">
            <img  class="order__content__img" :src="innerItem.product.img" v-if=" innderIndex <= 3" />
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">¥{{item.totalPrice}}</div>
            <div class="order__content__count">共{{item.totalNumber}}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :pageIndex="2"/>
</template>

<script>
import Docker from '../../components/Docker.vue'
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'
const userOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getOrderList = async () => {
    const result = await get('/api/order')
    if (result?.error === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach((productItem) => {
          totalPrice += (productItem?.product?.price * productItem?.orderSales || 0)
          totalNumber += (productItem?.orderSales || 0)
        })
        order.totalPrice = totalPrice
        order.totalNumber = totalNumber
      })
    }
    data.list = result.data
  }
  getOrderList()
  const { list } = toRefs(data)
  return { list }
}
export default {
  name: 'OrderList',
  components: { Docker },
  setup () {
    const { list } = userOrderListEffect()
    console.log(list)
    return { list }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: rgb(248, 248, 248);
}
.title {
  font-size: .16rem;
  color: $conntent-font-color;
  line-height: .44rem;
  background: $bgColor;
  text-align: center;
}
.orders {

}
.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background: $bgColor;
  &__title {
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $conntent-font-color;
  }
  &__status {
    float: right;
    font-size: .14rem;
    color: $ligh-fontColor;
  }
  &__content {
    display: flex;
    &__imgs {
      flex: 1;
    }
    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__info {
      width: .7rem;
    }
    &__price {
      margin-bottom: .04rem;
      font-size: .14rem;
      color: $highlight-fontColor;
      text-align: right;
      line-height: .2rem
    }
    &__count {
      line-height: .14rem;
      font-size: .12rem;
      color: $conntent-font-color;
      text-align: right;
    }
  }
}
</style>
