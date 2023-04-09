<template>
    <div class="position">
            <span class="iconfont position_icon">&#xe70b;</span>
            青岛理工大学嘉陵江路校区东区公寓1号楼1层
            <span class="iconfont position_notice">&#xe613;</span>
        </div>
        <div class="search">
            <span class="iconfont">&#xe64c;</span>
            <span class="search__text">山姆会员商店优惠商品</span>
        </div>
        <div class="banner">
            <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
        </div>
        <div class="icons">
            <div class="icons__item"
                v-for='(item,index) in iconsList' :key="index">
                <img class="icons__item__img" :src="item.imgUrl" />
                <p class="icons__item__desc">{{item.desc}}</p>
            </div>
        </div>
        <div class="gap">
        </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [{
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
      desc: '超市便利'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
      desc: '菜市场'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
      desc: '水果店'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
      desc: '鲜花绿植'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
      desc: '医药健康'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
      desc: '家居时尚'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
      desc: '烘焙蛋糕'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
      desc: '签到'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
      desc: '大牌免运'
    },
    {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
      desc: '红包套餐'
    }]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
    position: relative;
    padding: .16rem .24rem .16rem 0;
    font-size: .16rem;
    line-height: .22rem;
    @include ellipsis;
    .position_icon {
        position: relative;
        top: .02rem;
        font-size: .2rem;
    }
    .position_notice {
        position: absolute;
        right: 0;
        top: .18rem;
        font-size: .2rem;
    }
    color: $conntent-font-color;
}
.search {
    line-height: .32rem;
    background:  #F5F5F5;
    color: #B7B7B7;
    border-radius: .16rem;
    margin-bottom: .12rem;
    .iconfont {
        position: relative;
        top: .02rem;
        display: inline-block;
        font-size: .16rem;
        padding: 0 .1rem 0 .16rem;
    }
    &__text {
        display: inline-block;
        font-size: .14rem;
    }
}
.banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    &__img {
        width: 100%;
    }
}
.icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;
    &__item {
        width: 20%;
        &__img {
            display: block;
            width: .4rem;
            height: .4rem;
            margin: 0 auto;
        }
        &__desc {
            margin: .06rem 0 .16rem 0;
            text-align: center;
            color: $conntent-font-color;
        }
    }
}
.gap {
    margin: 0 -.18rem;
    height: .1rem;
    background: $conntent-bgcolor;
}
</style>
