<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" v-model="username" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" v-model="password" placeholder="请输入密码" autocomplete="new-password"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="确认密码" />
    </div>
    <div class="wrapper__register__button" @click="handleRegister">注册</div>
    <div class="wrapper__login__link" @click="handleLoginClick">已有账号去登陆</div>
  </div>
   <Toast v-if="show" :message="toastMessage"/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'

const usehandleRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.error === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { handleRegister, username, password }
}

const usehandleLoginClickEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleRegister, username, password } = usehandleRegisterEffect(showToast)
    const { handleLoginClick } = usehandleLoginClickEffect()
    return { handleRegister, handleLoginClick, show, toastMessage, username, password }
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
    border: .01rem solid rgba(0,0,0,0.10);
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
    background: $button-color;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    height: .48rem;
    margin: .32rem .4rem .16rem .4rem;
    font-size: .16rem;
    color: $bgColor;
    letter-spacing: 0;
    text-align: center;
    line-height: .48rem;
  }
  &__login__link {
    color: $content-notice-fontcolor;
    font-size: .14rem;
    letter-spacing: 0;
    text-align: center;
  }
}
</style>
