<template>
  <div class="back" @click="Back">
    <div class="back-btn"><i class="czs-angle-left-l"></i>返回</div>
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
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #00A2AE;
        cursor: pointer;
        .back-btn {
            position: absolute;
        }
        .common-title {
            display: inline-block;
            text-align: center;
            font-size: 25px;
            // 文本过长显示省略号
            width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>


