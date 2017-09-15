<template>
  <div class="back" @click="Back">
    <div class="fl"><i class="czs-angle-left-l"></i>返回</div>
    <span class="common-title">{{ title }}</span>
  </div>
</template>
<script>
import * as types from '@/store/types';
export default {
    // 接受父组件的数据，实现通信
    props: ['title'],
    data() {
        return {

        }
    },
    methods: {
        Back() {
            this.$router.go(-1);
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .back {
        /* Box-model */
        height: 50px;
        padding-left: 10px;
        /* Typography */
        line-height: 50px;
        text-align: center;
        /* Visual */
        background-color: #00A2AE;
        /* Misc */
        cursor: pointer;
        .fl {
            float: left;
        }
        .common-title {
            font-size: 25px;
            // 文本过长显示省略号
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>


