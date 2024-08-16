<template>
    <div>
        <div class="header-box">
            <div class="header-left">
                <div class="iconfont icon-caidan header-icon" @click="showSideMenu = true"></div>
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


        <div class="list-box">
            <div class="list-item" v-for="(item, index) in dailyList" :key="index">
                <div class="time">{{ item.createdTime }}</div>
                <div class="img-box" v-if="item.sources.source1">
                    <img :src="item.sources.source1" />
                </div>
                <div class="content">{{ item.content }}</div>
                <div class="address">{{ item.address || '' }}</div>
            </div>
        </div>




        <div class="fix-editor" @click="toEditorPage('add')">
            <img src="@/assets/img/editor.png">
        </div>


        <van-popup v-model:show="showSideMenu" position="left" :style="{ width: '70%', height: '100%' }">
            <div class="side-wrapper">
                <div class="img-wrapper">
                    <img class="daily-img" src="@/assets/img/daily.png" />
                </div>
                <div class="header-menu" v-if="loginStatus">账号信息</div>
                <div class="header-menu" @click="toLogin" v-else>登录账号</div>
                <div class="menu-card">
                    <div class="card-item" @click="toSourceList">
                        <div class="iconfont icon-ziyuan116 side-menu-icon"></div>
                        <div>图库</div>
                    </div>
                    <div class="card-item side-opt-row">
                        <div class="side-opt-title">
                            <div class="iconfont icon-yejianmoshi side-menu-icon"></div>
                            <div>夜间模式</div>
                        </div>
                        <van-switch v-model="dark" />
                    </div>
                    <div class="card-item" @click="toSettingPage">
                        <div class="iconfont icon-shezhi side-menu-icon"></div>
                        <div>设置</div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script lang="ts" setup>
import { dailyAPI } from '@/request/api/dailys';
import { useStorage } from '@vueuse/core';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { checkRequest, errorToast } from '../utils';


const router = useRouter()

const showSideMenu = ref(false)
const dark = ref(false)

const loginStatus = useStorage('loginStatus', '')

const dailyList: any = ref([])

onMounted(() => {
    queryDailys()
})

const queryDailys = () => {
    dailyAPI.list().then(res => {
        if (checkRequest(res)) {
            dailyList.value = res.data
        } else {
            errorToast(res)
        }
    })
}

const toEditorPage = (formType: string) => {
    router.push({ path: '/editor', query: { formType } })
}
const toSettingPage = () => {
    router.push({ path: '/setting' })
}
const toSourceList = () => {
    router.push({ path: '/sourceList' })
}
const toLogin = () => {
    router.push({ path: '/login' })
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

.list-box {
    padding: 15px;
    box-sizing: border-box;

    .list-item {
        background: #fff;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 15px;
        margin-bottom: 15px;

        .time {
            color: #A0AAB6;
        }

        .content {
            color: #2E3F5D;
        }

        .address {
            text-align: right;
            color: #A0AAB6;
        }

        .img-box {
            height: 300px;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
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

.side-wrapper {
    margin-top: 70px;

    .img-wrapper {
        display: flex;
        justify-content: flex-end;

        .daily-img {
            text-align: right;
        }
    }

    .header-menu {
        height: 50px;
        line-height: 50px;
        color: $text-primary;
        border-bottom: 1px solid $border-primary;
        padding: 0px 15px;
        box-sizing: border-box;
        font-size: 18px;
    }

    .menu-card {
        padding: 0px 15px;
        box-sizing: border-box;

        .card-item {
            height: 50px;
            line-height: 50px;
            display: flex;
            color: $text-primary;

            .side-menu-icon {
                margin-right: 15px;
            }
        }

        .side-opt-row {
            justify-content: space-between;

            .side-opt-title {
                display: flex;
            }
        }
    }
}
</style>