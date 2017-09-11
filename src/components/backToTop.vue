<template>
    <div class="back-top" @click="top"></div>
</template>
<script>
import { getClientHeight, getScrollTop, setScrollTop } from '@/libs/utils';
export default {
    data() {
        return {
            // 页面是否在顶部
            isTop: true,
            // 定时器变量
            timer: null
        }
    },
    mounted() {
        // 保存this对象
        let that = this;
        // console.log(that);
        // 获取按钮元素
        let topBtn = document.querySelector('.back-top');
        // 获取可视区域高度
        const cHeight = getClientHeight();
        // 无卷曲高度时，按钮不显示
        if (getScrollTop() === 0) {
            topBtn.style.display = 'none';
        }
        // 监听window的滚动事件,因为考虑回到顶部过程中按钮想停下来的情况
        window.addEventListener('scroll', function(){
            const sTop = getScrollTop();
            // 如果卷曲高度大于页面可视窗口高度时按钮显示，否则不显示
            topBtn.style.display = sTop > cHeight ? 'block' : 'none';
            // 页面如果到达顶部，清除定时器
            if(!that.isTop) {
                clearInterval(that.timer);
            }
            // 滚动过程中停下，设置未到达顶部
           that.isTop = false;
        }, false);
    },
    methods: {
        top() {
            let that = this;
            // 设置定时器
            that.timer = setInterval(() => {
                let top = getScrollTop();
                // 设置定时器每次运行减少的距离
                let distance = Math.floor(-top / 6);
                // 设置页面卷曲高度
                setScrollTop(top + distance); 
                // 防止滚动时清除定时器而停止
                that.isTop = true;
                // 到达顶部清除定时器
                if (top === 0) {
                    clearInterval(that.timer);
                }
            }, 30);
        }
    }
}
</script>
<style lang="scss" scoped>

    .back-top {
        position: fixed;
        bottom: 80px;
        right: 30px;
        width: 29px;
        height: 65px;
        background: transparent url(../assets/images/top.png) 0 0 no-repeat;
        cursor: pointer;
    }
</style>
