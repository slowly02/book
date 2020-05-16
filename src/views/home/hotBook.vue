<template>
  <div class="hotbook_box">
    <h2>热门图书</h2>
    <div class="list_box">
      <list v-for="(item,index) in data" :key="index" :item="item"></list>
    </div>
  </div>
</template>

<script>
import list from "./list.vue";
export default {
  data() {
    return {
      data: []
    };
  },
  components: {
    list
  },
  created() {
    let p = this.$store.dispatch("getHomeList");
    p.then(data => {
      this.data = data.data
    });
  }
};
</script>

<style lang="less" scoped>
.hotbook_box {
  position: relative;
  top: 1rem;
  margin-bottom: 1.2rem;
  h2 {
    color: salmon;
    font-size: 0.5rem;
    padding: 0.2rem;
  }
}
.list_box {
  width: 100%;
  overflow: hidden;
}
</style>