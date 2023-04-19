<template>
  <div class="wrapper">
      <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper__img">
      <div class="wrapper__input">
        <input type="text" class="wrapper__input__content"  v-model="username" placeholder="请输入用户名"/>
      </div>
      <div class="wrapper__input">
        <input type="password" class="wrapper__input__content" v-model="password" placeholder="请输入密码" autocomplete="new-password"/>
      </div>
      <div class="wrapper__login-button" @click="handleLogin">登陆</div>
      <div class="wrapper__register-link" @click="handleRegisterLink">立即注册</div>
      <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.error === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}

const usehandleRegisterLinkEffect = () => {
  const router = useRouter()
  const handleRegisterLink = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterLink }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterLink } = usehandleRegisterLinkEffect()
    return { username, password, handleLogin, handleRegisterLink, show, toastMessage }
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
    height: .66rem;
    width: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    border-radius: .06rem;
    padding: 0 .16rem;
    &__content {
      line-height: .48rem;
      outline: none;
      width: 100%;
      border: none;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
        letter-spacing: 0;
        line-height: .24rem;
      }
    }
  }
  &__login-button {
    height: .48rem;
    margin: .32rem .4rem .16rem .4rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: .48rem;
  }
  &__register-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
