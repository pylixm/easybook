<template>
    <div>
        <div class="shadow-box">
            <router-link :to="{ path: '/intro' }">
                <div class="item">
                    <i class="czs-message-l"></i>项目简介
                </div>
                <i class="czs-angle-right-l"></i>
            </router-link> 
            <router-link :to="{ path: '/from' }">
                <div class="item">
                    <i class="czs-comment-l"></i>项目由来
                </div>
                <i class="czs-angle-right-l"></i>
            </router-link>
        </div>
        <div class="shadow-box">
            <router-link :to="{ path: '/news' }"><div class="item"><i class="czs-message-l"></i>最新演讲</div><i class="czs-angle-right-l"></i></router-link>
            <router-link :to="{ path: '*' }"><div class="item"><i class="czs-message-l"></i>待开发...</div><i class="czs-angle-right-l"></i></router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }    
    }
    
}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
    .shadow-box {
        /* Box-model */
        width: auto;
        margin: 3%;
        /* Visual */
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 35px 10px -30px #ccc;
    }
    a {
        /* Box-model */
        display: -webkit-box;    
        display: -moz-box;        
        display: -ms-flexbox;    
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        &:hover {
            background-color: $main-hover-color;
        }
        & > i {
            margin-right: 10px;
            align-self: center;
        }
    }
    .item {
        /* Box-model */
        float: left;
        width: 100%;
        height: 50px;
        /* Typography */
        text-align: left;
        line-height: 50px;
    
        overflow: hidden;
        & > i {
            /* Box-model */
            margin-left: 45px;
            margin-right: 20px;

            vertical-align: middle;
        }
        
    }
</style>

