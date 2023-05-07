<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont"
      @click="handleBack"
      >&#xe7e0;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe64c;</span>
        <input class="search__content__input" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <ShopInfo :item='item' :hideBorder="true"/>
    <Content :shopName="item.name"/>
    <Cart/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import Content from './Content.vue'
import Cart from './Cart.vue'

const usegetItemDataEffect = () => {
  const route = useRoute()
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.error === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

const usehandlebackEffect = () => {
  const router = useRouter()
  const handleBack = () => {
    router.push({ name: 'Home' })
  }
  return { handleBack }
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup () {
    const { item, getItemData } = usegetItemDataEffect()
    getItemData()
    const { handleBack } = usehandlebackEffect()
    return { item, handleBack }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  line-height: .32rem;
  display: flex;
  margin: .16rem 0 .04rem 0;
  &__back {
    font-size: .24rem;
    color:  #B6B6B6;
    width: .3rem;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      height: .32rem;
      text-align: center;
      color: $content-fontColor;
      padding-top: .015rem;
    }
    &__input {
      display: block;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      width: 100%;
      color: $conntent-font-color;
      font-size: 14px;
      &::placeholder {
        font-size: 14px;
        color: $conntent-font-color;
        line-height: 16px;
      }
    }
  }
}
</style>
