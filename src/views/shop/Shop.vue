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
  </div>
</template>

<script>
// import { ref } from 'vue'
// import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import { useRouter } from 'vue-router'

// const useNearbyListEffect = () => {
//   const nearbyList = ref([])
//   const getNearbyList = async () => {
//     const result = await get('/api/shop/hot-list')
//     if (result?.error === 0 && result?.data?.length) {
//       nearbyList.value = result.data
//     }
//   }
//   return { nearbyList, getNearbyList }
// }

const usehandlebackEffect = () => {
  const router = useRouter()
  const handleBack = () => {
    router.push({ name: 'Home' })
  }
  return { handleBack }
}

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    // const { nearbyList, getNearbyList } = useNearbyListEffect()
    // getNearbyList()
    const item = {
      id: '1',
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89元减4元运费劵'
    }
    const { handleBack } = usehandlebackEffect()
    return { item, handleBack }
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  padding: 0 .18rem;
}
.search {
  line-height: .32rem;
  display: flex;
  margin: .16rem 0 .16rem 0;
  &__back {
    font-size: .24rem;
    color:  #B6B6B6;
    width: .3rem;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #F5F5F5;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      height: .32rem;
      text-align: center;
      color:  #B7B7B7;
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
      color: #333333;
      font-size: 14px;
      &::placeholder {
        font-size: 14px;
        color: #333333;
        line-height: 16px;
      }
    }
  }
}
</style>
