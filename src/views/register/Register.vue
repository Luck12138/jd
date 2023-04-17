<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="确认密码" />
    </div>
    <div class="wrapper__register__button" @click="handleRegister">注册</div>
    <div class="wrapper__login__link" @click="handleLoginClick">已有账号去登陆</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const router = useRouter()
    const handleRegister = () => {
      localStorage.isLogin = true
      router.push({ name: 'Login' })
    }
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return { handleRegister, handleLoginClick }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    border-radius: .06rem;
    color: #777;
    padding: 0 .16rem;
    &__content {
      line-height: .48rem;
      width: 100%;
      border:none;
      background: none;
      outline: none;
      font-size: .16rem;
      &::placeholder {
        color: $content-notice-fontcolor;
        letter-spacing: 0;
        line-height: .24rem;
      }
    }
  }
  &__register__button {
    background: #0091FF;
    box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
    border-radius: 4px;
    border-radius: 4px;
    height: .48rem;
    margin: .32rem .4rem .16rem .4rem;
    font-size: .16rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: .48rem;
  }
  &__login__link {
    color: $content-notice-fontcolor;
    font-size: 14px;
    letter-spacing: 0;
    text-align: center;
  }
}
</style>
