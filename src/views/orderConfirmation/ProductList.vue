<template>
    <div class="products">
    <div class="products__title">{{shopName}}</div>
    <div class="products__wrapper">
      <div class="products__list">
        <template v-for="item in productList" :key="item.id">
        <div class="products__item"  v-if="item.count > 0">
          <img class="products__item__img" :src="item.imgUrl" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{item.title}}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen;</span>
                {{item.price}}x{{item.count}}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen;</span>
                {{(item.price * item.count).toFixed(2)}}
              </span>
            </p>
          </div>
        </div>
        </template>
      </div>
      </div>
  </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/cartEffects.js'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'ProductList',
  setup () {
    const router = useRouter()
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName } = useCommonCartEffect(shopId)
    const handlebackclick = () => {
      router.back()
    }
    return { productList, shopName, handlebackclick }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.products {
  margin: .16rem .18rem .55rem .18rem;
  background: $bgColor;
  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: $conntent-font-color;
  }
  &__wrapper {
    overflow-y: scroll;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
    margin: 0 .18rem;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem .16rem .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $conntent-font-color;
      @include ellipsis
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .20rem;
      font-size: .14rem;
      color: $highlight-fontColor;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: #000;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
</style>
