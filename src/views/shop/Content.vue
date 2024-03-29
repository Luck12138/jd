<template>
  <div class="content">
    <div class="category">
      <div v-for="item in categories"
      :class="{'category__item':true, 'category__item--active': currentTab === item.tab }"
      :key="item.name"
      @click="() => handleTabClick(item.tab)">
        {{item.name}}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item.id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.title}}</h4>
          <p class="product__item__sales">{{item.sales}}</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{item.price}}
             <span class="product__item__origin"><span class="product__item__yen">&yen;</span>{{item.origin}}</span>
            </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus iconfont" @click="()=>{changeCartItem(shopId, item.id, item, -1,shopName)}">&#xe677;</span>
          {{getProductCartCount(shopId, item.id)}}
          <span class="product__number__plus iconfont" @click="()=>{changeCartItem(shopId, item.id, item, 1,shopName)}">&#xe845;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { useCommonCartEffect } from '../../effects/cartEffects.js'
import { useStore } from 'vuex'

const categories = [{ name: '全部商品', tab: 'all' }, { name: '秒杀', tab: 'seckill' }, { name: '新鲜水果', tab: 'fruit' }]

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

const userCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.error === 0 && result?.data) {
      content.list = result.data
    }
  }
  watchEffect(() => {
    getContentData()
  })

  const { list } = toRefs(content)
  return { list }
}

const useCartEffect = () => {
  const store = useStore()
  const { changeItemInfo, cartList } = useCommonCartEffect()
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }

  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }
  const getProductCartCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0
  }
  return { changeItemInfo, cartList, changeCartItem, getProductCartCount }
}

export default {
  name: 'ShopContent',
  props: ['shopName'],
  setup () {
    const route = useRoute()

    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = userCurrentListEffect(currentTab)
    const { changeItemInfo, cartList, changeCartItem, getProductCartCount } = useCartEffect()
    return { categories, list, currentTab, handleTabClick, shopId, changeItemInfo, cartList, changeCartItem, getProductCartCount }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category {
  overflow-y: scroll;
  width: .76rem;
  height: 100%;
  background: $search-bgColor;
  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: $conntent-font-color;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: $conntent-bgcolor solid .01rem;
    &__img {
      width: .68rem;
      height: .68rem;
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
    &__sales {
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
      color: $conntent-font-color;
    }
    &__price {
      margin: 0;
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
      position:relative;
      top: .02rem;
      color: $medium-fontColor;
      margin-right: .05rem;
    }
    &__plus {
      position:relative;
      top: .02rem;
      color: $button-color;
      margin-left: .05rem;
    }
  }
}
</style>
