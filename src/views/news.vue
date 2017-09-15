<template>
    <div>
        <back :title="navTitle" />
        <back-to-top />
            <section>
                <ul>
                    <li @mouseover="mouse($event)" @mouseout="none($event)" v-for="item in datum" :key="item.id">
                        <img :src="item.background" alt="">
                        <a href="javascript:;" class="mask" v-if="item.id">
                            <span class="title">{{ item.title }}</span>
                            <div class="num" v-for="num in item.lectures"  :key="num.id">
                                <span class="icon eye"><i class="czs-eye-l"></i>{{ num.viewnum }}</span>
                                <span class="icon heart"><i class="czs-heart-l"></i>{{ num.likenum }}</span>
                            </div> 
                            <!-- <div class="num" v-if="item.lectures[0].viewnum">
                                <span class="icon eye" ><i class="czs-eye-l"></i>{{ item.lectures[0].viewnum }}</span>
                                <span class="icon heart"><i class="czs-heart-l"></i>{{ item.lectures[0].likenum }}</span>
                            </div> -->
                        </a>
                    </li>
                    <div class="full-line"></div>
                    <infinite-loading spinner="bubbles" :on-infinite="onInfinite" ref="infiniteLoading">
                        <span slot="no-more">没有更多数据了哦</span>    
                    </infinite-loading>
                </ul>
            </section>
    </div>
</template>
<script>
import back from '@/components/back.vue';
import backToTop from '@/components/backToTop.vue';
import spinner from '@/components/spinner.vue';
import { mapState, mapMutations } from 'vuex';
import { SET_TOPTITLE, CLEAR_TOPTITLE } from '@/store/types';
import { fetchYiData } from '@/api/index';
import InfiniteLoading from 'vue-infinite-loading';
export default {
    name: 'news',
    data() {
        return {
            datum: [],
        }
    },
    created() {
        this.$store.commit(SET_TOPTITLE, '最新演讲');
        this.loadFirst();
    },
    mounted() {
        
    },
    components: {
        back: back,
        'back-to-top': backToTop,
        spinner: spinner,
        InfiniteLoading
    },
    computed: {
        ...mapState({ navTitle: state => state.book.topTitle })
    },
    methods: {
        ...mapMutations([CLEAR_TOPTITLE]),
        loadFirst() {
            this.datum = [];
            this.onInfinite();
        },
        onInfinite() {
            this.busy = true;
            fetchYiData().then((res) => {
                // console.log('获取的演讲数据为:');
                // console.log(JSON.stringify(res.data)); 
                let store = res.data;
                const temp = [];
                // 每次获取10条数据到暂存数组中
                for (let i = this.datum.length + 1; i <= this.datum.length + 10; i++) {
                    let cache = store[i];
                    // console.log('缓存数据');
                    // console.log(cache);
                    // 每一项不为undefined则保存进去
                    if (cache !== 'undefined') {
                        temp.push(cache);
                    }
                }
                // 如果暂存数组有值，触发加载事件，否则完成
                if (temp.length) {
                    this.datum = this.datum.concat(temp);
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                    // 数据110条，获取数据全部完成
                    if (this.datum.length / 10 === 11) {
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                    }
                } else {
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                }
            }).catch(err => {
                console.log('遇到错误了:' + err);
            })
        },
        mouse(event) {
            this.show('block', event);
        },
        none(event) {
            this.show('none', event);
        },
        show(select, event) {
            let curTarget = event.currentTarget;
            for (let item of curTarget.children) {
                if (item.className === 'mask') {
                    item.style.display = select;
                }
            }
        }
    },
    destroyed() {
        // 清除state中的标题
        this.CLEAR_TOPTITLE();
        // console.log(this.$store.state.book.topTitle);
        this.datum = [];
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
    section {
        /* Box-model */
        display: -webkit-box;    
        display: -moz-box;        
        display: -ms-flexbox;    
        display: -webkit-flex;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        width: 70%;
        margin: 0 auto;
        
        overflow: hidden;
        h3 {
            font-size: 25px;
            font-weight: 700;
        }
        ul  {
            /* Box-model */
            display: -webkit-box;    
            display: -moz-box;        
            display: -ms-flexbox;    
            display: -webkit-flex;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            margin-top: 30px;
            .full-line {
                flex: 2 0 100%;
            }
            li {
                /* Positioning */
                position: relative;
                /* Box-model */
                display: -webkit-box;    
                display: -moz-box;        
                display: -ms-flexbox;    
                display: -webkit-flex;
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                margin-bottom: 50px;
                /* Misc */
                cursor: pointer;
                img {
                    /* Positioning */
                    position: relative;
                    z-index: 1;
                    /* Box-model */
                    display: block;
                    max-width: 350px;
                    /* Visual */
                    border-radius: 5px;
                }
                .mask {
                    /* Positioning */
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 3;
                    /* Box-model */
                    display: none;
                    width: 100%;
                    height: 100%;
                    /* Typography */
                    text-align: center;
                    /* Visual */
                    background: -webkit-linear-gradient(top,rgba(0, 0, 0, .4) 0, transparent 40%, transparent 60%, rgba(0, 0, 0, .6));
                    background: linear-gradient(180deg,rgba(0, 0, 0, .4) 0, transparent 40%, transparent 60%, rgba(0, 0, 0, .6));
                    /* Misc */
                    opacity: 0.9;
                    .title {
                        /* Visual */
                        color: #fff;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .num {
                        /* Positioning */
                        position: absolute;
                        bottom: 10px;
                        right: 5px;
                        .icon {
                            /* Box-model */
                            margin-left: 10px;
                            padding: 3px 10px;
                            /* Typography */
                            line-height: 1.2em;
                            /* Visual */
                            border-radius: 5px;
                            background-color: #fff;
                        }
                        .heart {
                            color: $success-color;
                        }
                        .eye {
                            color: $main-color;
                        }
                    }
                }
            }
        }
    }
    .a {
        height: 100%;
    }
</style>