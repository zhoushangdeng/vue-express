<template>

  <div class="nav">
    <div class="item1">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="item2">
      <el-button type="text">{{userName}}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store/index'
export default defineComponent({
  setup() {
    const router = useRouter()
    const userName = store.state.userInfo.userName
    const clickRoute = (val: string) => {
      router.push(val)
    }
    return {
      clickRoute,
      userName,
    }
  },
})
</script>

<style lang="scss">
.nav {
  display: flex;
  width: 100%;
  height: 100%;
  .item1 {
    flex: 1;
  }
  .item2 {
    width: 100px;
  }
}
</style>