<template>
  <div class="header">
      <div class="title">简易图书</div>
      <router-link to="/search" class="search"><i class="czs-search-l"></i>搜索</router-link>
  </div>
</template>
<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 50px;
        background-color: #00A2AE;
        .title {
            float: left;
            margin: 7px 0 0 10px;
            font-size: 28px;
            font-weight: 700;
            font-family: Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
        }
        .search {
            float: right;
            margin: 15px 10px 0 0;
            font-size: 15px;
            font-weight: 700;
            color: #eaeaea;
            i {
                vertical-align: middle; 
            }
        }
    }
</style>

