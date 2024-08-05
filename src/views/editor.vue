<template>
  <div class="editor-wrapper">
    <input v-model="connect" />
    <div>
      aa
    </div>
    <div>
      a
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const formType = route.query.formType

const connect = ref('123')

</script>
<style scoped lang="scss">
.editor-wrapper {
  background: #F8F8F8;
}
</style>