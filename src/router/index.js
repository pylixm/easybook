import Vue from 'vue';
import Router from 'vue-router';
import * as types from '../store/types';
import store from '../store/index';
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../views/index.vue'], resolve),
      children: [
        { path: '', component: resolve => require(['../views/booklist.vue'], resolve)},
        { path: 'me', name: 'me', component: resolve => require(['../views/me.vue'], resolve) },
        { path: 'list', name: 'index', component: resolve => require(['../views/booklist.vue'], resolve)}
      ]
    },
    {
      path: '/book/subject/:id',
      name: 'detail',
      component: resolve => require(['../views/detail.vue'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['../views/search.vue'], resolve)
    },
    {
      path: '/intro',
      name: 'intro',
      component: resolve => require(['../views/intro.vue'], resolve)
    },
    {
      path: '/from',
      name: 'from',
      component: resolve => require(['../views/from.vue'], resolve)
    },
    {
      path: '/resume',
      name: 'resume',
      component: resolve => require(['../views/resume.vue'], resolve)
    },
    {
      path: '/news',
      name: 'news',
      component: resolve => require(['../views/news.vue'], resolve)
    },
    {
      path: '/404',
      name: 'no',
      component: resolve => require(['../views/notfound.vue'], resolve)
    },
    {
      path: '*',
      name: 'notfound',
      component: resolve => require(['../views/notfound.vue'], resolve)
    }
  ]
});

export default router;

router.beforeEach((to, from, next) => {
  if(to.path === '/' || to.path === '/list' || to.path === '/me') {
    if (store.state.book.tagValue){
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