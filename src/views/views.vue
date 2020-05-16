<template>
<div class="views">
  <router-view/>
  <div class="nav">
    <router-link to="home">
      <div class="iconfont icon-home"></div>
      <div>首页</div>
      </router-link>
    <router-link to="/list">
    <div class="iconfont icon-list"></div>
      <div> 列表页</div>
    </router-link>
    <router-link to="/collect">
    <div class="iconfont icon-collect"></div>
     <div>收藏页</div>
     </router-link>
    <router-link to="/add">
    <div class="iconfont icon-Addwithcircle"></div>
    <div>增加页</div>
    </router-link>
  </div>
  </div>
</template>

<style lang="less" scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100%;
  display: flex;
  background-color: #fff;
  font-size: 0.4rem;
  align-items: center;
  box-shadow: 0px -0.02rem 0.1rem 0px #ccc;
  a {
    flex: 1;
    text-align: center;
    &.current{
      color:aquamarine;
    }
  }
}
</style>
