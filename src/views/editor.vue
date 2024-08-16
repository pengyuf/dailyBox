<template>
  <div class="editor-wrapper">
    <div class="header-box">
      <div class="iconfont icon-tijiaochenggong"></div>
      <div class="iconfont icon-caidan1"></div>
    </div>

    <input v-model="connect" />


    <div>
      <Uploader v-model="fileList" :after-read="afterRead" multiple :max-count="4" />
    </div>

    <div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { Uploader } from "vant";
import { ref } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()

const formType = route.query.formType

const connect = ref('123')

const fileList = ref([
  { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
]);

const afterRead = (file:File) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
};

</script>
<style scoped lang="scss">
.editor-wrapper {
  .header-box {
    height: 70px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
  }
}
</style>