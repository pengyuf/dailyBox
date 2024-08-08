<template>
    <div class="d-button" :class="btnStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


const props = defineProps({
    type: {
        type: String,
        default: 'primary'
    }
})

const btnStyle = computed(() => {
    return `d-button-${props.type}`
})

</script>
<style scoped lang="scss">
$Height: 50px;

.d-button {
    height: $Height;
    line-height: $Height;
    text-align: center;
    border-radius: 50px;
}

.d-button-primary {
    background: $d-primary;
    color: #fff;
}

.d-button-cancel {
    background: #EFEFEF;
    color: #000;
}
</style>