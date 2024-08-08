<template>
    <div class="setting-wrapper">

        <div class="menu-card">
            <div class="card-item">
                <div class="iconfont icon-ziyuan116 side-menu-icon"></div>
                <div>账号信息</div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

</script>
<style scoped lang="scss">
.setting-wrapper {
    .menu-card {
        background: #fff;
        margin-top: 15px;
        .card-item {
            height: 50px;
            line-height: 50px;
            display: flex;
            color: $text-primary;
            padding-left: 30px;
            .side-menu-icon {
                margin-right: 15px;
            }
        }
    }
}
</style>