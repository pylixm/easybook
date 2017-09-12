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
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        background-color: rgba(167,223,227, .9);
        .loader {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            margin: -50px 0 0 -50px;
        
            border: 20px solid #f3f3f3;
            border-top: 20px solid $main-color;
            border-radius: 50%;
            
            line-height: 100px;
            text-align: center;
            @include animation(spin 2s linear infinite);
        }
        .info {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            background-color: #fff;
            margin: -30px 0 0 -30px;
            border-radius: 50%;
        }
    }
    
    @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

