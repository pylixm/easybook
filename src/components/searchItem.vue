<template>
    <div>
        <router-link  v-for="item in datum" :key="item.id" class="search-item" :to="{ name:'detail', params: { id: item.id }}">
            <img :src="item.images.large"/>
            <div class="content" v-if="item.summary">
                <div class="title">{{item.title}}</div>
                <div class="summary">{{item.summary}}</div>
                <span class="author"><i class="czs-user-l"></i>{{item.author[0]}}</span>
                <span class="price" v-if="item.price"><i class="czs-tag-l"></i>{{item.price}}</span>
            </div>
            <div v-else class="no-intro">
                <div class="title">{{item.title}}</div>
                没有具体介绍
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: ['datum'],
    data() {
        return {
            
        }
    },
    destroyed() {
        // console.log('打印数据');
        // console.log(this.datum);
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
    .search-item {
        /* Box-model */
        display: block;
        height: 145px;
        margin: 10px;
        padding-left: 110px;
        /* Visual */
        border: 1px solid $border-line-color;
        overflow: hidden;  
        .no-intro {
            .title {
                /* Typography */
                font-size: 1.2em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        &:hover {
            /* Typography */
            color: #000;
            /* Visual */
            box-shadow: 0 0 10px rgba(0,0,0,.5);
        }
        img {
            /* Box-model */
            float: left;
            margin-left: -110px;
            max-width: 100px;
        }
        .content {
             /* Box-model */
            width: 95%;
            height: 125px;
            /* Typography */
            line-height: 1.5em;
            i {
                vertical-align: middle;
            }
            .title {
                /* Typography */
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1.5;
                text-align: center;
                /* Misc */
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .summary {
                /* Typography */
                font-size: 0.8em;
                 /*多行文本超过显示省略号*/
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                /* Box-model */
                margin: 5px 0 10px 0;
            }
            .price {
                position: absolute;
                margin-left: 15px;
            }
        }
    }
</style>
