<template>
    <div>
        <div class="header-box">
            <div class="header-left">
                <div class="iconfont icon-caidan header-icon"></div>
                <div class="time-filter">
                    <span class="time-wrapper">8月5日</span>
                    <div class="iconfont icon-arrow-down"></div>
                </div>
            </div>
            <div class="header-right">
                <div class="iconfont icon-sousuo header-icon" style="margin-right: 30px;"></div>
                <div class="iconfont icon-caidan1 header-icon"></div>
            </div>
        </div>
        <div class="fix-editor" @click="toEditorPage('add')">
            <img src="@/assets/img/editor.png">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';


const router = useRouter()

const toEditorPage = (formType: string) => {
    router.push({ path: '/editor', query: { formType } })
}

</script>
<style scoped lang="scss">
.header-box {
    background: $d-primary;
    height: 70px;
    line-height: 70px;
    padding: 0px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .header-left,
    .header-right {
        display: flex;
    }

    .header-icon {
        font-size: 40px;
        color: #fff;
    }

    .time-filter {
        display: flex;
        color: #fff;
        margin-left: 30px;

        .time-wrapper {
            font-size: 25px;
            margin-right: 5px;
        }
    }
}

.fix-editor {
    position: fixed;
    bottom: 150px;
    right: 30px;
    background: $d-primary;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70px;
        height: 70px;
    }
}
</style>