<template>
    <div class="outer">
        <back class="prev" :title="navTitle" />
        <section class="center-box">
            <h3>项目技术栈</h3>
            <ul class="pdl-20 mgb-20">
                <li>vue(<a href="https://cn.vuejs.org/v2/guide/" target="_blank">官方教程</a>)</li>
                <li>vuex(<a href="https://router.vuejs.org/zh-cn/">官方文档</a>)</li>
                <li>vue-router(<a href="https://vuex.vuejs.org/zh-cn/intro.html">官方文档</a>)</li>
                <li>axios(<a href="https://github.com/mzabriskie/axios">github地址</a>)</li>
                <li>scss(样式管理)</li>
                <li>es6(拥抱未来)</li>
                <li>flex</li>
            </ul>
            <h3>功能</h3>
            <ul class="pdl-20 mgb-20">
                <li>tab标签两种状态(首页两个页面切换底部改变样式)</li>
                <li>图书搜索</li>
                <li>图书详情</li>
                <li>返回组件显示不同标题</li>
                <li>返回顶部</li>
                <li>加载动画</li>
                <li>待添加...</li>  
            </ul>
            <h3>实现页面</h3>
            <ul class="pdl-20 mgb-20">
                <li><router-link :to="{ name: 'index' }">首页</router-link></li>
                <li><router-link :to="{ name: 'search' }">图书搜索页</router-link></li>
                <li><router-link :to="{ name: 'detail', params: {id: 1770782 } }">图书详情页</router-link></li>
                <li><router-link :to="{ name: 'me' }">关于页面(更多信息查看具体页面)</router-link></li>
                <li><router-link :to="{ name: 'no' }">404页面</router-link></li>
            </ul>
            <h3>小结</h3>
            <p>
                1.刚开始从搜索页面进入详情页，然后返回时，搜索的关键字被清空，又需要重新输入，遇到这个问题时候，并没有想到使用vuex，因为
                考虑到项目不是特别大，组件之间的通信不是很复杂。考虑之后还是选择使用vuex，确实解决了这个问题，在每个组件中都能访问
                store的数据，方便操作。同样的在返回组件中的顶部标题显示也选择保存在store中，进入每个组件时候，提交mutation改变标题文字。
            </p>
            <p>
                2.用v-on绑定事件是否有方法获取到触发的this对象 =>  用 e.currentTarget
            </p>
            <p>
                3.用v-for动态生成的div，绑定事件，如何获取当前的element => v-on:keyup="handler($index, $event)" 然后获取 event.target。
            </p>
            <p>
                5.用vue的keep-alive组件包裹动态组件时缓存组件实例。include(包含)和exclude(排除)属性有条件的缓存
                组件，最先在整个app的router-view包含一个keep-alive组件，not-found页面的计时器被缓存，再次进入页面，
                数值不会改变，则exclude(排除)not-found页面。然后在主页面切换的router-view外包裹keep-alive组件，只缓存
                主页面图书列表，避免重复请求数据。
            </p>
            <div class="left2em">
                6.es6的import导入文件，项目由vue-cli构建，在webpack.base.conf.js中有下图配置
                <img src="../assets/images/path.png" alt="路径配置" />
                <span>有了这个配置方案，就可以如下图这样导入文件</span>
                <img src="../assets/images/path-use.png" alt="路径使用示例" />
            </div>
            <p>
                7.本页面resize之后有背景颜色区域高度不变的问题，通过检测window的onresize事件后，重新调用高度函数设置高度解决。
            </p>
            <div>
                <h3>效果演示</h3>
                <router-link :to="{ name: 'index' }">查看demo请戳这里</router-link>
            </div>
        </section>
    </div>
</template>
<script>
import back from '@/components/back.vue';
import { mapState, mapMutations } from 'vuex';
import { SET_TOPTITLE, CLEAR_TOPTITLE } from '@/store/types';
export default {
    name: 'intro',
    data() {
        return {

        }
    },
    created() {
        this.$store.commit(SET_TOPTITLE, '项目简介');
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
        li {
            line-height: 1.5;
        }
        .left2em {
            margin-left: 2em;
            span {
                margin-left: 1em;
            }
        }
    }
    div {
        line-height: 1.5;
        img {
            display: block;
            margin-left: 1em;
            @media (max-width: 933px) {
                display: none;
            }
        }
    }
    p {
        font-size: 16px;
        line-height: 1.5;
        text-indent: 2em;
        margin: 0 0 32px 0;
        
    }
    body pre {
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 12px;
        code {
            margin: 0;
            padding: 0;
            line-height: inherit;
            word-wrap: normal;
            background-color: transparent;
        }
    }
    
</style>

