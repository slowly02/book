<template>
    <div>
        <div>登录页</div>
        <button @click="add"></button>
    </div>
</template>

<script>
    export default {
        methods:{
            add(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>