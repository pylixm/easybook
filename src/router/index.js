import Vue from 'vue';
import Router from 'vue-router';
import * as types from '../store/types';
import store from '../store/index';
Vue.use(Router)

const router =  new Router({
  routes: [
    // 主页面和嵌套路由
    {
      path: '/',
      component: resolve => require(['../views/index.vue'], resolve),
      children: [
        { path: '', component: resolve => require(['../views/booklist.vue'], resolve)},
        { path: 'me', name: 'me', component: resolve => require(['../views/me.vue'], resolve) },
        { path: 'list', name: 'index', component: resolve => require(['../views/booklist.vue'], resolve)}
      ]
    },
    // 详情页面
    {
      path: '/book/subject/:id',
      name: 'detail',
      component: resolve => require(['../views/detail.vue'], resolve)
    },
    // 搜索页面
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['../views/search.vue'], resolve)
    },
    // 项目介绍
    {
      path: '/intro',
      name: 'intro',
      component: resolve => require(['../views/intro.vue'], resolve)
    },
    // 项目由来
    {
      path: '/from',
      name: 'from',
      component: resolve => require(['../views/from.vue'], resolve)
    },
    // 最新演讲
    {
      path: '/news',
      name: 'news',
      component: resolve => require(['../views/news.vue'], resolve)
    },
    // 404页面
    {
      path: '/404',
      name: 'no',
      component: resolve => require(['../views/notfound.vue'], resolve)
    },
    // 未匹配路由也显示404页面
    {
      path: '*',
      name: 'notfound',
      component: resolve => require(['../views/notfound.vue'], resolve)
    }
  ]
});

export default router;
// 全局路由拦截
router.beforeEach((to, from, next) => {
  if(to.path === '/' || to.path === '/list' || to.path === '/me') {
    if (store.state.book.tagValue){
      // 清除搜索栏的值
      store.dispatch(types.CLEAR_TAGVALUE);
      console.log('执行清除任务成功');
    }
  }
  // 直接进入me路由页面标签处于激活状态
  if (to.path === '/me') {
    store.commit(types.SET_ACTIVETAB, 'me');
    // console.log('设置me成功');
    // console.log(store.state.book.activeTab);
  }
  // 直接进入主页面标签处于激活状态
  if (to.path === '/list' || to.path === '/') {
    store.commit(types.SET_ACTIVETAB, 'list');
  }
  next();
});