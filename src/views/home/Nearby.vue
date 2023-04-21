<template>
    <div class="nearby">
            <h3 class="nearby__title">附近店铺</h3>
            <router-link to="/shop" v-for="item in nearbyList" :key='item._id'>
                <ShopInfo :item='item' :hideBorder="false"/>
            </router-link>
        </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.error === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}
export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby {
    &__title {
        margin: .16rem 0 .02rem 0;
        font-size: 18px;
        color: $conntent-font-color;
    }
    a {
        text-decoration: none;
    }
    &__item {
        display: flex;
        padding-top: .12rem;
        &__img {
            margin-right: .16rem;
            width: .56rem;
            height: .56rem;
        }
    }
    &__content {
        flex: 1;
        padding-bottom: .12rem;
        border-bottom: 1px solid $conntent-bgcolor;
        &__title {
            line-height: .22rem;
            font-size: .16rem;
        }
        &__tags {
            margin-top: .08rem;
            line-height: .18rem;
            font-size: .13rem;
            color: $conntent-font-color;
        }
        &__tag {
            margin-right: .16rem;
        }
        &__highlight {
            margin: .08rem 0 0 0;
            color: #E93B3B;
            line-height: .18rem;
            font-size: .13rem;
        }
    }
}
</style>
