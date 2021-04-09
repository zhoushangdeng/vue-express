<template>
  <div class="error">
    <div><img src="~@/assets/404.png" alt=""></div>
    <el-button icon="el-icon-refresh-left" type="text" @click="clickRoute('Home')">点击返回首页</el-button>
  </div>

</template>
<script lang="ts" >
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const router = useRouter()
    const clickRoute = (val: string) => {
      router.push(val)
    }
    return {
      clickRoute,
    }
  },
})
</script>
<style lang="scss">
.error {
  div {
    width: 200px;
    height: 200px;
    .el-button {
      margin: 0px auto;
    }
  }

  height: 400px;
  width: 200px;
  margin: 50px auto;
}
</style>