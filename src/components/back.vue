<template>
  <div class="back" @click="Back">
    <div class="fr"><i class="czs-angle-left-l"></i>返回</div>
    <span class="common-title">{{ title }}</span>
  </div>
</template>
<script>
import * as types from '../store/types';
export default {
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
        background-color: #00A2AE;
        text-align: left;
        padding-left: 10px;
        text-align: center;
        cursor: pointer;
        .fr {
            float: left;
        }
        .common-title {
            font-size: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>


