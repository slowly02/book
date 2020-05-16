<template>
    <div class="title">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
        .title{
            position: fixed;
            top: 0;
            left: 0;
            height: 1rem;
            width: 100%;
            z-index: 999;
            line-height: 1rem;
            text-align: center;
            background-color: cornflowerblue;
            color:#fff;
            font-size: 0.4rem;
        }
</style>