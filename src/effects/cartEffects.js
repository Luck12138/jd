import { computed } from 'vue'
import { useStore } from 'vuex'

export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || []
    return productList
  })

  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })

  const price = computed(() => {
    const productList = cartList[shopId]?.productList || []
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.check) {
          count += product.count * product.price
        }
      }
    }
    return count.toFixed(2)
  })
  return { changeItemInfo, cartList, productList, shopName, price }
}
