<template>
  <div class="wrapper">
    <div class="title">我的全部购物车(2)</div>
    <div class="product">
      <h4 class="product__shop">沃尔玛</h4>
        <!-- <template v-for="item in productList" :key="item.id"> -->
        <div class="product__item">
          <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" />
          <div class="product__item__detail">
            <h4 class="product__item__title">番茄 250g/份</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>33.3*2
              <span class="product__item__origin">&yen;</span>66.6
            </p>
          </div>
        </div>
        <div class="product__item">
          <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" />
          <div class="product__item__detail">
            <h4 class="product__item__title">番茄 250g/份</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>33.3x2
              <span class="product__item__origin">&yen;</span>66.6
            </p>
          </div>
        </div>
      <!-- </template> -->
    </div>
  </div>
  <Docker :pageIndex = 1 />
</template>

<script>
import Docker from '../home/Docker.vue'
export default {
  name: 'CartList',
  components: { Docker }
}
</script>
<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
    overflow-y: auto;
    position: absolute;
    left: .0;
    top: .0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem .1rem .18rem;
    background: rgb(248, 248,248);
.title {
  line-height: .44rem;
  font-size: .16rem;
  background: $bgColor;
  color: $conntent-font-color;
  text-align: center;
 }
.product {
  width: 3.39rem;
  height: 2.22rem;
  margin-top: .16rem ;
  background: $bgColor;
  @include ellipsis;
  &__shop {
    margin: 0;
    padding: .16rem 0 .04rem .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $conntent-font-color;
  }
  &__item {
  position: relative;
  display: flex;
  padding: .12rem 0;
  margin: 0 .16rem;
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
    display: flex;
    margin: .06rem 0 0 ;
    line-height: .20rem;
    font-size: .14rem;
    color: $highlight-fontColor;
  }
  &__yen {
    font-size: .12rem;
  }
  &__origin {
    flex: 1;
    line-height: .20rem;
    font-size: .14rem;
    text-align: center;
    color: $conntent-font-color;
  }
}
}
}
</style>
