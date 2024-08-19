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
import { uploadAPI } from "@/request/api/upload";
import axios from "axios";
import { Uploader } from "vant";
import { ref } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()

const formType = route.query.formType

const connect = ref('123')

const fileList = ref([]);

const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);

  let forms = new FormData()
  forms.append("file", file.file);
   
  uploadAPI.uploadImg(forms)
  // axios
  //   .post('http://localhost:3000/upload/image', forms, {
  //     headers: {
  //       "content-type": "multipart/form-data"
  //     },
  //   })




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