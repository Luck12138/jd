import { createStore } from 'vuex'

const setLocalStorage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

// const getLocalStorage = () => {
//   return JSON.parse(localStorage.cartList) || {}
// }

export default createStore({
  state: {
    cartList: {}
    // cartList: getLocalStorage()
  },
  mutations: {
    changeItemInfo (state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || { shopName: '', productList: {} }
      let product = shopInfo.productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
        product.check = 0
      }
      product.count = product.count + payload.num
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalStorage(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalStorage(state)
    },
    clearCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList.productList[shopId] = {}
      setLocalStorage(state)
    },
    setCartItemChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (const key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalStorage(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || { shopName: '', productList: {} }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalStorage(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
