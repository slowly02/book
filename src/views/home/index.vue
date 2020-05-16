<template>
    <div>
        <!-- 首页
        当前数字是{{count}}
        <button @click='add'>增加</button>
        <button @click='remove'>减少</button> -->
        <mytil>首页</mytil>
        <my-swiper></my-swiper>
        <hot-book></hot-book>
    </div>
</template>

<script>
import title from '../../common/title.vue'
import myswiper from './swiper.vue'
import hotbook from '@/views/home/hotBook'
    export default {
        data() {
            return {
                name: '珠峰'
            }
        },
        components:{
            mytil : title,
            'my-swiper':myswiper,
            'hot-book':hotbook
        },
        computed: {
            // count() {
                // return this.$store.state.count
                // 调用vueX中的公用数据
            // }
        },
        methods: {
            // add() {
            //     // 调用mutations中的add函数
            //     this.$store.commit('add')
            // },
            // remove() {
            //     // 调用mutations中的add函数
            //     this.$store.commit('remove')
            // }
        },
    }
</script>

<style lang="less" scoped>

</style>