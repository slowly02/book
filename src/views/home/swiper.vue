<template>
<div class="swiper_box">
      <!-- {{list}} -->
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/images/nature-1.jpg)"></div>
            <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/images/nature-2.jpg)"></div>
            <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/images/nature-3.jpg)"></div>
            <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/images/nature-4.jpg)"></div>
            <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/images/nature-5.jpg)"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    // created(){
    //     this.$store.dispatch('getBanner')
    // },
    mounted(){
    new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    },
    // computed:{
    //     list(){
    //         return this.$store.state.bannerList
    //     }
    // }
};
</script>

<style lang="less" scoped>
.swiper_box{
    position: relative;
    background: #ccc;
    height: 6rem;
    top: 1rem;
    overflow: hidden;
}
.swiper-container {
  width: 6rem;
  height: 6rem;
  position: absolute;
  left: 50%;
  margin-left: -3rem;
}
    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
</style>