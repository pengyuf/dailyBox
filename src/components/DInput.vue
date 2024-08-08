<template>
    <div class="d-input">
        <slot name="prefix"></slot>
        <input :placeholder="placeholder" v-model="model" />
        <slot name="suffix"></slot>
    </div>
</template>

<script lang="ts" setup>

const model = defineModel()

defineProps({
    placeholder: {
        type: String,
        default: '请输入'
    }
})


</script>
<style scoped lang="scss">
.d-input{
    border-bottom: 1px solid $border-primary;

    input {
        border: none;
        outline: none;
        background: transparent;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0px;
    }

    input::placeholder {
        color: $color-holder;
    }

}
</style>