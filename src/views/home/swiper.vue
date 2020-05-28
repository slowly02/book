<template>
<div class="swiper_box">
      <!-- {{list}} -->
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590664729026&di=441ea62cd55a8c057de28f9162bc9e3b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F22%2F20180422230950_wBXFU.jpeg)"></div>
            <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590664729024&di=792471e7e19daad68a4c7ccd114b1402&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F17%2F20141017162807_4JuXA.thumb.700_0.jpeg)"></div>
            <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590664729021&di=a54e1896fd13e74eda5b228701e4805e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Faa644751b8e6dd77dbc66d16280a923ab90dc41b2c642-9pCEpt_fw658)"></div>
            <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590664729020&di=bf0f4a0791aa56c5b2be31b594bcb323&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F03%2F20170403010002_TECUP.png)"></div>
            <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590664729019&di=7d425d49fd707cb99511781a0ac096b8&imgtype=0&src=http%3A%2F%2Fimg.kuai8.com%2Fattaches%2Falbum%2F20140614%2F201406141636477351.jpg)"></div>
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