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
        changeColor(tab) {
            switch(tab) {
                case 'list':
                    this.$store.commit(types.SET_ACTIVETAB,'list');
                    console.log(this.activeTab);
                    break;
                case 'me':
                    this.$store.commit(types.SET_ACTIVETAB, 'me');
                    console.log(this.activeTab);
                    break;
                default: 
                    this.$store.commit(types.SET_ACTIVETAB, 'list');
                    console.log(this.activeTab);
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
            height: 50px;
            line-height: 50px;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            display: flex;
            border-top: 1px solid $separate-line-color; 
            background-color: $color1;
            .tab {
                text-align: center;
                flex: 1;
                font-weight: 700;
                [class~="czs"] {
                    display: inline-block;
                    color: #000;
                    width: 24px;
                    height: 24px;
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

