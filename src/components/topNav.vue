<template>
  <div class="header">
      <div class="title">简易图书</div>
      <router-link to="/search" class="search"><i class="czs-search-l"></i>搜索</router-link>
  </div>
</template>
<style lang="scss" scoped>
    .header {
        /* Box-model */
        padding: 0 10px;
        height: 50px;
        line-height: 50px;
        /* Visual */
        background-color: #00A2AE;
        .title {
            /* Box-model */
            float: left;
            /* Typography */
            font-size: 2rem;
            font-weight: 700;
            font-family: Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
        }
        .search {
            /* Box-model */
            float: right;
             /* Typography */
            font-size: 1.4rem;
            /* Visual */
            color: #eaeaea;
            i {
                position: absolute;
                margin: 19px 0 0 -15px;
            }
        }
    }
</style>

