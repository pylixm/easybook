<template>
    <div class="mask" v-show="load">
        <div class="loader" ></div>
        <div class="info">加载中...</div>
    </div>
</template>
<script>
import { pageProp } from '@/libs/utils';
export default {
    // 父组件传递的属性
    props: ['load'],
    data() {
        return {
            
        }
    },
    mounted() {
        // 设置模糊层覆盖整个页面
        let aWidth = pageProp().width;
        
        let aHeight = pageProp().height;
        var mask = document.querySelector('.mask');
        mask.style.width = aWidth + 'px';
        mask.style.height = aHeight + 'px';
    }

}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
@import '../assets/style/mixin';
    .mask {
        /* Positioning */
        position: absolute;
        top: 50px;
        left: 0;
        /* Box-model */
        width: 100%;
        /* Visual */
        background-color: rgba(167,223,227, .9);
        .loader {
            /* Positioning */
            position: fixed;
            top: 50%;
            left: 50%;
            /* Box-model */
            box-sizing: border-box;
            width: 100px;
            height: 100px;
            margin: -50px 0 0 -50px;
            /* Visual */
            border: 20px solid #f3f3f3;
            border-top: 20px solid $main-color;
            border-radius: 50%;
            /* Typography */
            line-height: 100px;
            text-align: center;
            @include animation(spin 2s linear infinite);
        }
        .info {
            /* Positioning */
            position: fixed;
            top: 50%;
            left: 50%;
            /* Box-model */
            box-sizing: border-box;
            width: 80px;
            height: 80px;
            margin: -40px 0 0 -40px;
            /* Typography */
            line-height: 100px;
            text-align: center;
            /* Visual */
            background-color: #fff;
            border-radius: 50%;
        }
    }
    
    @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

