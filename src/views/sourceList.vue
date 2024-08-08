<template>
    <div class="page-wrapper">
        <div class="source-card" v-for="(item, index) in list" :key="index">
            <div class="time-box">{{ item.time }}</div>
            <div class="source-body">
                <div class="source-item" @click="previewImg(sItem)" v-for="(sItem, sIndex) in item.sources" :key="sIndex">
                    <img :src="sItem" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { showImagePreview } from 'vant';


const list = ref([
    { time: '2024-07-08', sources: ['https://dsn.siimax.com/res/group1/M00/06/85/egl84GaohcKAMPMYAAAzez-x91E338.png', 'https://dsn.siimax.com/res/group1/M00/06/85/egl84GaohcKAMPMYAAAzez-x91E338.png'] }
])

const previewImg = (url: string) => {
    showImagePreview([
        url
    ])
}

</script>
<style scoped lang="scss">
.page-wrapper {
    padding: 15px;
    box-sizing: border-box;

    .source-card {
        .time-box {
            margin-bottom: 15px;
        }

        .source-body {
            display: flex;
            flex-wrap: wrap;

            .source-item {
                width: 30%;
                border-radius: 15px;
                margin-right: 2%;
                background: #fff;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>