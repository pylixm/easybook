<template>
    <div class="list">
        <router-link class="item" :to="{ name: 'detail', params: { id: book.id}}" v-for="book in books" :key="book.id">
            <div class="pic">
                <img :src="book.images.large" :alt="book.origin_title">
            </div>
            <div class="title" >{{book.title}}</div>
            <div class="author">{{book.author[0]}}</div>
        </router-link> 
    </div>
</template>
<script>
import { fetchManyBook } from '@/api/index';
export default {
    name: 'index',
    data() {
        return {
            books: []
        }
    },
    mounted() {
        let query = 'python';
        fetchManyBook(query)
            .then((data) => {
                console.log('请求到的book数据************');
                console.log(data);
                this.books = data.books;
            })
    },
    computed: {
        
    },
    methods: {
    }

}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
    .list {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        max-width: 700px;
        margin: 0 auto;
        background:  url(../assets/images/bg.png) 0 0 repeat-y;
        background-size: 700px auto; 
        .item {
            flex: 1 0 40%;
            display: block;
            text-align: center;
            margin: 20px;
            &:hover {
                box-shadow: 0 0 10px rgba(0,0,0,.5);
            }
            .pic {
                width: 100%;
                img {
                    width: 100%;
                    height: 408px;
                }
            }
            .title {
                color: #000;
                font-size: 16px;
                font-weight: 700;
                line-height: 1.5em;
            }
            .author {
                color: #B0B0B0;
                font-size: 14px;
            }
        }
    }
</style>
