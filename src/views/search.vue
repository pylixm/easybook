<template>
    <div>
        <back :title="navTitle" />
        <spinner :load="loading" />
        <input type="text" v-model="searchKey" @keyup.enter="submit" class="search-input" autocomplete="off" placeholder="请输入搜索内容"/>
        <div class="result-list" v-if="data.length !== 0">
            <search-item :datum="data" />
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
import searchItem from '@/components/searchItem.vue';
import { fetchSearchBook } from '@/api/index';
import { mapState,mapMutations } from 'vuex';
import { isEmptyObject } from '@/libs/utils';
import * as types from '@/store/types';
export default {
    name: 'search',
    data() {
        return {
            searchKey: '',
            data: [],
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
        'back-to-top': backToTop,
        'search-item': searchItem
    },
    methods: {
        ...mapMutations({ CLEAR_TOPTITLE: types.CLEAR_TOPTITLE}),
        submit() {
            let q = this.searchKey;
            this.loading = true;
            fetchSearchBook(q)
                .then(data => { 
                    this.data = data.books;
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
        /* Box-model */
        display: block;
        box-sizing: border-box;
        width: 50%;
        height: 36px;
        margin: 10px 0;
        padding: 3px 10px;
        /* Typography */
        font-size: inherit;
        line-height: 1;
        /* Visual */
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        color: #1f2d3d;
        background-image: none;
        background-color: #fff;
        border-radius: 18px;
        border: 1px solid #bfcbd9;
        /* Misc */
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        transform: translateX(50%);
        &:focus {
             border-color: #20a0ff;
         }
    }
    .result-list {
        /* Typography */
        text-align: center;
        .no-img {
            /* Box-model */
            display: block;
            margin: 0 auto;
        }
        a {
            cursor: pointer;
        }
    }
    
</style>


