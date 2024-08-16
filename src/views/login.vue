<template>
    <div class="page-wrapper">
        <DInput v-model="username" class="input-box" placeholder="请输入用户名" />
        <DInput v-model="password" class="input-box" placeholder="请输入密码" />
        <DButton class="btn-box" @click="submit">登录</DButton>
        <DButton type="cancel" @click="toRegister">注册新账号</DButton>
    </div>
</template>

<script lang="ts" setup>
import { showToast } from "vant";
import { authAPI } from "../request/api/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStorage } from '@vueuse/core'
import { checkRequest, errorToast } from '../utils/index'

const router = useRouter()

const username = ref('')
const password = ref('')

const submit = () => {
    if (username.value === '') {
        showToast('请输入用户名')
        return
    }
    if (password.value === '') {
        showToast('请输入密码')
        return
    }
    authAPI.login({
        username: username.value,
        password: password.value
    }).then(res => {
        if (checkRequest(res)) {
            useStorage('token', res.data.access_token)
            useStorage('loginStatus','logining')
            router.push({path:'/home'})
        } else {
            errorToast(res)
        }
    })
}

const toRegister = () => {
    router.push({ path: '/register' })
}

</script>
<style scoped lang="scss">
.page-wrapper {
    padding: 15px;
    box-sizing: border-box;

    .input-box {
        margin-bottom: 15px;
    }

    .btn-box {
        margin-bottom: 15px;
    }
}
</style>