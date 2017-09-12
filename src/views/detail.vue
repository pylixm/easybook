<template>
    <div>
        <back :title="navTitle" />
        <spinner :load="loading"/>
        <div class="detail-content">
            <img :src="book.images.large" :alt="book.alt_title" v-if="flag"/>
            <div class="title">{{ book.title }}</div>
            <div class="cell">
                <table>
                    <tbody>
                        <tr>
                            <td align="right" width="150"><span class="fade">作者：</span></td>
                            <td>
                                <div class="left-space">{{ author }}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cell">
                <table>
                    <tbody>
                        <tr>
                            <td align="right" width="150"><span class="fade">标签：</span></td>
                            <td>
                                <a v-for="tag in book.tags" :key="tag.count" @click="samebook(tag.name)" class="tag">{{ tag.name }}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cell">
                <table>
                    <tbody>
                        <tr>
                            <td align="right" width="150"><span class="fade">作者简介：</span></td>
                            <td v-if="book.author_intro">
                                <div class="left-space">{{ book.author_intro }}</div>
                            </td>
                            <td v-else><span class="left-space">无</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cell">
                <table>
                    <tbody>
                        <tr>
                            <td align="right" width="150"><span class="fade">概要：</span></td>
                            <td v-if="book.summary">
                                <div class="left-space">{{ book.summary }}</div>
                            </td>
                            <td v-else><span class="left-space">无</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cell">
                <table>
                    <tbody>
                        <tr>
                            <td align="right" width="150"><span class="fade">出版社：</span></td>
                            <td>
                                <div class="left-space">{{ book.publisher }}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cell">
                <table>
                    <tbody>
                        <tr>
                            <td align="right" width="150"><span class="fade">翻译者：</span></td>
                            <td v-if="len > 0">
                                <div class="left-space">{{ translator }}</div>
                            </td>
                            <td v-else><span class="left-space">外文原版书籍或中文书籍</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cell">
                <table>
                    <tbody>
                        <tr>
                            <td align="right" width="150"><span class="fade">价格：</span></td>
                            <td>
                                <div class="left-space">{{ book.price }}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import back from '@/components/back.vue';
import spinner from '@/components/spinner.vue';
import { fetchBookById } from '@/api/index';
import * as util from '@/libs/utils';
import * as type from '@/store/types';
import { mapState,mapMutations } from 'vuex';
export default {
    data() {
        return {
            book: {},
            flag: false,
            loading: false
        }
    },
    created() {
        
    },
    components: {
        back: back,
        spinner: spinner
    },
    mounted() {
        let id = this.$route.params.id;
        this.loading = true;
        fetchBookById(id)
            .then(data => {
                this.book = data;
                this.flag = true;
                this.loading = false;
                this.$store.commit(type.SET_TOPTITLE, this.book.title);
            })
    },
    computed: {
        ...mapState({ navTitle: state => state.book.topTitle }),
        // 获取合并后的作者信息
        author() {
            if (util.isArrayLike(this.book.author)) {
                if (this.book.author.length >= 1) {
                    return this.book.author.join(",");
                }
                return this.book.author;
            }
        },
        // 获取合并后的译者信息
        translator() {
            if (util.isArrayLike(this.book.translator)) {
                if (this.book.translator.length >= 1) {
                    return this.book.translator.join(",");
                }
                return this.book.translator;
            }
        },
        // 获取译者人数
        len() {
            if (util.isArrayLike(this.book.translator)) {
               return this.book.translator.length;
            }
        },
        ...mapState({ tagValue: state => state.book.tagValue })
    },
    methods: {
        ...mapMutations({ CLEAR_TOPTITLE: type.CLEAR_TOPTITLE }),
        samebook(name) {
            this.$store.dispatch(type.SET_TAGVALUE, name);
            this.$router.push({ name: 'search' });
        }
    },
    destroyed() {
        // 清除state中的标题
        this.CLEAR_TOPTITLE();
        // console.log('清除标题');
        // console.log(this.$store.state.book.topTitle);
    }
    
}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
    .detail-content {
        img {
            width: 100%;
        }
        .cell {
            padding: 10px;
            font-size: 14px;
            line-height: 1.2;
            text-align: left;
            border-bottom: 1px solid #e2e2e2;
            .tag {
                position: relative;
                display: inline-block;
                height: 34px;
                line-height:34px;
                padding: 0 23px;
                margin: 0 5px 8px 10px;
                border: 1px solid $color5;
                border-radius: 50px;
                font-size: 14px;
                font-weight: 500;
                background-color: $color5;
                color: #fff;
                cursor: pointer;
                -webkit-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
                &:hover {
                    color: $color5;
                    background-color: #14182A;
                }
            }
            .left-space {
                margin-left: 10px;
            }
        }
        .title {
            font-size: 1.5em;
            font-weight: 700;
            text-align: center;
        }
    }
</style>

