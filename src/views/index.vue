<template>
    <div class="wrap">
        <top-nav/>
        <back-to-top/>
        <transition name="fade">
            <keep-alive include="index">
                <router-view></router-view>
            </keep-alive>
        </transition>
        <!-- 下面div绑定@click="changeColor" -->
        <div class="footer" > 
            <router-link to="/list" @click.native="changeColor('list')" class="tab" :class="[ activeTab === 'list' ?  'active' : '' ]"><i class="czs-home-l"></i>首页</router-link>      
            <router-link to="/me" @click.native="changeColor('me')" class="tab" :class="[ activeTab === 'me' ?  'active' : '' ]"><i class="czs-user-l"></i>我</router-link>
        </div>
    </div>
</template>
<script>
import topNav from '@/components/topNav.vue';
import backToTop from '@/components/backToTop.vue';
import { siblings } from '@/libs/utils';
import * as types from '@/store/types';
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
        
        }
    },
    components: {
        'top-nav': topNav,
        'back-to-top': backToTop
    },
    computed: mapState({ activeTab: state => state.book.activeTab }),
    methods: {
        // changeColor(event) {
        //     let target = event.target;
        //     if (target.tagName.toLowerCase() === 'a') {
        //         if (target.classList.contains('tab')) {
        //             target.classList.add('active');
        //             let sibs = siblings(target);
        //             for (let sib of sibs) {
        //                 sib.classList.remove('active');
        //             }
                    
        //         }
        //     }
        // },
        

        // 点击后设置store中activeTab的值，然后切换标签通过判断activeTab值是否是本省来设置活动状态
        changeColor(tab) {
            switch(tab) {
                case 'list':
                    this.$store.commit(types.SET_ACTIVETAB,'list');
                    // console.log(this.activeTab);
                    break;
                case 'me':
                    this.$store.commit(types.SET_ACTIVETAB, 'me');
                    // console.log(this.activeTab);
                    break;
                default: 
                    this.$store.commit(types.SET_ACTIVETAB, 'list');
                    // console.log(this.activeTab);
                    break;
            }
        },
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/color';
    .wrap {
        height: 100%;
        .footer {
            /* Positioning */
            position: fixed;
            bottom: 0;
            left: 0;
            /* Box-model */
            display: flex;
            width: 100%;
            height: 50px;
            /* Typography */
            line-height: 50px;
            /* Visual */
            border-top: 1px solid $separate-line-color; 
            background-color: $color1;          
            .tab {
                /* Box-model */
                flex: 1;
                /* Typography */
                text-align: center;
                font-size: 1.5rem;
                font-weight: 500;
                [class~="czs"] {
                    /* Box-model */
                    width: 24px;
                    height: 24px;
                    /* Visual */
                    color: #000; 
                }
            }
        }
    }
    .active {
        color: $main-color;
        i {
            color: $main-color;
        }
    }

    .fade-enter-active {
        animation: zoomIn .5s;
    }
    .fade-leave-active {
        animation: none;
    }
    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale3d(.3, .3, .3)
        }
        50% {
            opacity: 1;
        }
    }
</style>

