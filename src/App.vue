<template>
<div>
    <div class="wrapper">
        <div class="position">
            <span class="iconfont position_icon">&#xe70b;</span>
            青岛理工大学嘉陵江路校区东区公寓1号楼1层
            <span class="iconfont position_notice">&#xe613;</span>
        </div>
    </div>
    <div class="docker">
        <span class="docker_item docker_item--active">
            <div class="iconfont">
                &#xe602;
            </div>
        <div class="docker_title">首页</div>
        </span>
        <span class="docker_item">
            <div class="iconfont">
                &#xe624;
            </div>
        <div class="docker_title">购物车</div>
        </span>
        <span class="docker_item">
        <div class="iconfont">
                &#xe603;
            </div>
        <div class="docker_title">订单</div>
        </span>
        <span class="docker_item">
            <div class="iconfont">
                &#xe6b3;
            </div>
        <div class="docker_title">我的</div>
        </span>
    </div>
 </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper {
    position: absolute;
    left: .0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem;
}
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
.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: 1px solid #F1F1F1;
    &_item {
    flex: 1;
    text-align: center;
    .iconfont {
        font-size: .20rem;
        margin: .07rem 0 .02rem 0;
    }
    &--active {
    color: #1FA4FC;
        }
    }
    &_title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
    }
    color: $conntent-font-color;
}

</style>
