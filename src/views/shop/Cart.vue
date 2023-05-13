<template>
 <div class="mask" v-if="showCart && total > 0 " @click="handleCartShowChange"></div>
  <div class="cart">
    <div class="product" v-if="showCart && total > 0 ">
      <div class="product__header">
        <div class="product__header__all"
        @click="() => setCartItemChecked(shopId)"><span class="product__header__icon iconfont"
        v-html=" allChecked ? '&#xe652;': '&#xe66c;' "></span>全选</div>
        <div class="product__header__clear"><span @click="() => clearCartProducts(shopId)">清空购物车</span></div>
      </div>
        <div class="product__item" v-for="item in productList" :key="item.id">
          <div class="product__item__checked iconfont" v-html="item.check ? '&#xe652;': '&#xe66c;'"
          @click="() => changeCartItemChecked(shopId, item.id)"></div>
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.title}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin"><span class="product__item__yen">&yen;</span>{{item.origin}}</span>
              </p>
          </div>
          <div class="product__number">
            <span class="product__number__minus iconfont" @click="()=>{changeItemInfo(shopId, item.id, item, -1)}">&#xe677;</span>
            {{item.count || 0 }}
            <span class="product__number__plus iconfont" @click="()=>{changeItemInfo(shopId, item.id, item, 1)}">&#xe845;</span>
          </div>
        </div>
    </div>
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" class="check__icon__img" @click="handleCartShowChange"/>
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn" v-show="price > 0 ">
        <router-link :to="{path: `/OrderConfirmation/${shopId}`}">去结算</router-link></div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useCommonCartEffect } from '../../effects/cartEffects.js'

const useCartEffect = (shopId) => {
  const { changeItemInfo, productList, price } = useCommonCartEffect(shopId)
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    const productList = cartList[shopId]?.productList || []
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })

  const allChecked = computed(() => {
    const productList = cartList[shopId]?.productList || []
    let result = true
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.count > 0 && !product.check) {
          result = false
        }
      }
    }
    return result
  })
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', {
      shopId, productId
    })
  }

  const clearCartProducts = (shopId) => {
    store.commit('clearCartProducts', { shopId })
  }
  const setCartItemChecked = (shopId) => {
    store.commit('setCartItemChecked', { shopId })
  }
  return { total, price, productList, changeItemInfo, changeCartItemChecked, clearCartProducts, allChecked, setCartItemChecked }
}

const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return { handleCartShowChange, showCart }
}
export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { handleCartShowChange, showCart } = toggleCartEffect()
    const { total, price, productList, changeItemInfo, changeCartItemChecked, clearCartProducts, allChecked, setCartItemChecked } = useCartEffect(shopId)
    return { total, price, productList, shopId, changeItemInfo, changeCartItemChecked, clearCartProducts, allChecked, setCartItemChecked, showCart, handleCartShowChange }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,0.50);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $conntent-bgcolor;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $highlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: $bgColor;
      transform: scale(.5);
      transform-origin:  left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontColor;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: $highlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: #4FB0F9;
    text-align: center;
    font-size: .14rem;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  background: $bgColor;
  &__header {
    display: flex;
    vertical-align: top;
    line-height: .52rem;
    border-bottom:.01rem solid $conntent-bgcolor;
    font-size: .14rem;
    color: #333;
    &__all {
      width: .64rem;
      margin-left: .18rem;
    }
    &__icon {
      display: inline;
      margin-right: .1rem;
      vertical-align: top;
      color: #0091FF;
      font-size: .2rem;
    }
    &__clear {
      flex: 1;
      text-align: right;
      margin-right: .16rem;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: $conntent-bgcolor solid .01rem;
    &__checked {
      line-height: .5rem;
      margin-right: .16rem;
      color: #0091FF;
      font-size: .2rem;
    }
    &__img {
      width: .48rem;
      height: .48rem;
      margin-right: .16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $conntent-font-color;
      @include ellipsis
    }
    &__price {
      margin: .06rem 0 0 ;
      line-height: .20rem;
      font-size: .14rem;
      color: $highlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      line-height: .2rem;
      font-size: .12rem;
      color: $ligh-fontColor;
      text-decoration: line-through;
      margin-left: .06rem;
    }
  }
  &__number {
    position: absolute;
    right: 0;
    bottom: .12rem;
    &__minus {
      position: relative;
      top: .02rem;
      color: $medium-fontColor;
      margin-right: .05rem;
    }
    &__plus {
      position: relative;
      top: .02rem;
      color: $button-color;
      margin-left: .05rem;
    }
  }
}
</style>
