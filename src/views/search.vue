<template>
    <div>
        <back :title="navTitle" />
        <spinner :load="loading" />
        <input type="text" v-model="searchKey" @keyup.enter="submit" class="search-input" autocomplete="off" placeholder="请输入搜索内容"/>
        <div class="result-list" v-if="all.length !== 0">
            <router-link  v-for="item in all" :key="item.id" class="search-item" :to="{ name:'detail', params: { id: item.id }}">
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
        <div v-else class="result-list">
            <img class="no-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJsybDikhWDA2497i2Es8HiZrvLQ2CeSG77eIzynw7hBnSYw9HdqgYzQ" alt="查找无此书籍">
            没有所搜书籍，<a @click="toIndex">返回首页</a>
        </div>
        <back-to-top/>
    </div>
</template>
<script>
import back from '@/components/back.vue';
import spinner from '@/components/spinner.vue';
import backToTop from '@/components/backToTop.vue';
import { fetchSearchBook } from '@/api/index';
import { mapState,mapMutations } from 'vuex';
import { isEmptyObject } from '@/libs/utils';
import * as types from '@/store/types';
export default {
    name: 'search',
    data() {
        return {
            searchKey: '',
            all: [],
            loading: false
        }
    },
    created() {
        this.$store.commit(types.SET_TOPTITLE, '搜索');
    },
    computed: mapState({ 
        tagValue: state => state.book.tagValue,
        navTitle: state => state.book.topTitle
     }),
    mounted() {
        if (this.tagValue) {
            this.searchKey = this.tagValue;
            this.submit();
            // 从详情页返回搜索标题不显示的错误修复
            this.$store.commit(types.SET_TOPTITLE, '搜索');
        }
    },
    components: {
        back: back,
        spinner: spinner,
        'back-to-top': backToTop
    },
    methods: {
        ...mapMutations({ CLEAR_TOPTITLE: types.CLEAR_TOPTITLE}),
        submit() {
            let q = this.searchKey;
            this.loading = true;
            fetchSearchBook(q)
                .then(data => { 
                    this.all = data.books;
                    this.loading = false;
                });
            this.$store.dispatch(types.SET_TAGVALUE, this.searchKey);    
        },
        toIndex() {
            this.$router.push({ path: '/'});
        }
    },
    destroyed() {
        // 清除state中的标题
        this.CLEAR_TOPTITLE();
       // console.log(this.$store.state.book.topTitle);
    }
    
}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
    .search-input {
        -webkit-appearance: none;
        appearance: none;
        background-image: none;
        background-color: #fff;
        display: block;
        border-radius: 18px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: none;
        padding: 3px 10px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 50%;
        margin: 10px 0;
        transform: translateX(50%);
        &:focus {
             border-color: #20a0ff;
         }
    }
    .result-list {
        text-align: center;
        .no-img {
            display: block;
            margin: 0 auto;
            
        }
        a {
            cursor: pointer;
        }
    }
    .search-item {
        display: block;
        border: 1px solid $border-line-color;
        padding-left: 110px;
        height: 145px;
        overflow: hidden;
        max-width: 270px;
        margin: 10px auto;
        .no-intro {
            .title {
                font-size: 1.2em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        &:hover {
            color: #000;
            box-shadow: 0 0 10px rgba(0,0,0,.5);
        }
        img {
            float: left;
            margin-left: -110px;
            max-width: 100px;
        }
        .content {
            width: 250px;
            height: 95px;
            line-height: 1.5em;
            i {
                vertical-align: middle;
            }
            .title {
                font-size: 1.2em;
                font-weight: 700;
                line-height: 1.5;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .summary {
                font-size: 0.8em;
                 /*多行文本超过显示省略号*/
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                margin: 10px 0 13px 0;
            }
            .author {
                margin-right: 15px;
            }
        }
        
    }
</style>


