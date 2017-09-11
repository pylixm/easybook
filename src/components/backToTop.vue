<template>
    <div class="back-top" @click="top"></div>
</template>
<script>
import * as util from '../libs/utils';
export default {
    data() {
        return {
            isTop: false,
            timer: null
        }
    },
    mounted() {
        let that = this;
        let topBtn = document.querySelector('.back-top');
        const cHeight = util.getClientHeight();
        if (util.getScrollTop() === 0) {
            topBtn.style.display = 'none';
        }
        window.addEventListener('scroll', function(){
            const sTop = util.getScrollTop();
            topBtn.style.display = sTop > cHeight ? 'block' : 'none';
            if(!that.isTop) {
                clearInterval(that.timer);
            }
           that.isTop = false;
        }, false);
    },
    methods: {
        top() {
            let that = this;
            console.log(that.isTop);
            that.timer = setInterval(() => {
                let top = util.getScrollTop();
                let distance = Math.floor(-top / 6);
                util.setScrollTop(top + distance); 
                if (top === 0) {
                    clearInterval(that.timer);
                }
                that.isTop = true;
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
