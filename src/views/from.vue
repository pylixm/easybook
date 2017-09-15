<template>
    <div class="outer">
        <back class="prev" :title="navTitle" />
        <div class="center-box">
            <p>
                这个项目是在看到别人用vue写出来的很多有意思的程序之后，自己也萌生了写一个的想法，更多的还是想练习自己的技术，
                想把平时学习的一些技术运用起来，巩固记忆，寻找一些数据接口的过程中发现豆瓣的api接口设计非常合理，
                返回的数据结构非常清晰，于是迫不及待的想写出现在的这个程序。
            </p>
            <p>
                一开始，通过Mockplus画了前期的一个草图，也没考虑到许多细节问题(这个让我觉得是非常吃亏的)，当然，
                起先也是这么做的，Mockplus的良好设计让我用比较短的实践画出了这份简陋的草图，并没有考虑良多，我很
                快就把草图投入使用当中，项目通过vue-cli构建，省下了许多配置的步骤，这些都是我能快速开始的前提条件。
            </p>
            <p>
                写代码的过程开始了，开始非常顺利，因为在画图的时候构思好的东西，写出来就只是实现它的过程，很快就写出来草图中的界面，
                又花了几天时间实现基本交互和数据处理，这个时候我发现草图的东西已经实现了，可是程序还不够完整，不能方便的使用，
                从这开始，就想到什么就添加什么，这个过程让我异常煎熬，因为事情没考虑周全，实现起来总是走一步摔一跤，进度很慢，不过
                通过慢慢摸索，查资料，遇到问题解决问题的一步一步走下去，实现了这个程序基本想要的功能。
            </p>
            <p>
                这次项目因为是自己第一个完整的自己独立完成的项目，过程并不是尽善尽美，代码结构和质量可能并不是很好，考虑不周的功能设计时常出现，
                但是最终实现了让我学到了很多以前不曾学到的东西，并且还把之前的技术又练习了一次，学会了融合使用。总之，
                继续努力！
            </p>
        </div>
    </div>
</template>
<script>
import back from '@/components/back.vue';
import { mapState, mapMutations } from 'vuex';
import { SET_TOPTITLE, CLEAR_TOPTITLE } from '@/store/types';
export default {
    name: 'from',
    data() {
        return {
            
        }
    },
    created() {
        this.$store.commit(SET_TOPTITLE, '项目由来');
    },
    mounted() {
    },
    computed: mapState({ navTitle: state => state.book.topTitle }),
    components: {
        back: back
    },
    methods: {
        ...mapMutations([CLEAR_TOPTITLE])
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

    .center-box {
        box-sizing: border-box;
        padding: 20px;
        width: 70%;
        min-width: 300px;
        background-color: $color3;
        margin: 0 auto;
        height: auto;
        overflow-y: visible;
    }
    p {
        font: 18px/32px "Microsoft Yahei";
        text-indent: 2em;
        margin: 32px 0 0;
    }
</style>