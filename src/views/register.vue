<template>
    <div class="page-wrapper">
        <DInput v-model="username" class="input-box" placeholder="请输入用户名" />
        <DInput v-model="password" class="input-box" placeholder="请输入密码" />
        <DButton @click="submit">立即注册</DButton>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const username = ref('')
const password = ref('')

const submit = () => {
    console.log(username.value)
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