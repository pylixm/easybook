<template>
  <div class="outer">
      <div class="not-found-box">
         糟糕，没有该页面,5s后带你回到主页
         <span>{{ time }}</span>
      </div>
  </div>
</template>
<script>
export default {
    name: 'notfound',
    data() {
        return {
            time: 5
        }
    },
    beforeRouteLeave(to, from, next) {
        // 路由进入之前清除定时器
        this.clear();
        next();
    },
    created() {
        this.time = 5;
        // console.log('设置time为5');
        this.updateTime(this.time);
    },
    methods: {
        // 更新时间
        updateTime(count) {
            this.time = count;
            console.log(count);
            if (count === 0) {
                this.$router.push({ path: '/'});
            } else {
                count -= 1;
                let that = this;
                setTimeout(function(){
                    that.updateTime(count);
                }, 1000);
            }
        },
        // 清楚所有定时器
        clear() {
            let bigSetTimeOutId = window.setTimeout(function() {}, 1);
            for (let i = 1; i < bigSetTimeOutId; i++) {
                clearTimeout(i);
            }
        }
    },
    destroyed() {
        this.time = 0;
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
    .outer {
        /* Positioning */
        position: relative;
        /* Box-model */
        width: 100vw;
        height: 100vh;
        /* Visual */
        background: url(../assets/images/bg.jpg) center center no-repeat;
        background-size: cover;
        .not-found-box {
            /* Positioning */
            position: absolute;
            top: 50%;
            left: 50%;
            /* Box-model */
            width: 550px;
            height: 160px;
            /* Typography */
            font-size: 26px;
            line-height: 160px;
            text-align: center;
            /* Visual */
            color: $main-text-color;
            border: 3px solid $border-line-color;
            border-radius: 5px;
            background: transparent;
            /* Misc */
            transform: translate(-265px, -80px);
            span {
                /* Typography */
                font-size: 38px;
                /* Visual */
                background-color: $error-color;
            }
        }
    }
</style>

