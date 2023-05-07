import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 1: {
      //   111: {
      //     id: 1,
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     title: '番茄 250g/份',
      //     sales: '月售10件',
      //     price: 33.6,
      //     origin: 39.6,
      //     count: 2
      //   }
      // },
      // 2: {
      //   111: {
      //     id: 1,
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     title: '番茄 250g/份',
      //     sales: '月售10件',
      //     price: 33.6,
      //     origin: 39.6,
      //     count: 1
      //   }
      // }
    }
  },
  mutations: {
    changeItemInfo (state, payload) {
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + payload.num
      if (product.count < 0) { product.count = 0 }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
