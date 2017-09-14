<template>
  <div id="app">
    <keep-alive exclude="notfound,search,detail,intro,from,news">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
@import './assets/style/app.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

</style>
