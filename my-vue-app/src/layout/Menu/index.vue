<template>
  <div class="menu">
    <div class="main">
      <el-menu
        :uniqueOpened="true"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#2e3035"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        style="height: calc(100vh - 80px)"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title></template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title> 导航四 </template>
        </el-menu-item>
      </el-menu>
      <div class="footer">
        <el-button
          :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="isCollapse = !isCollapse"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const isCollapse = ref(false)
    const handleOpen = (key, keyPath) => {}
    const handleClose = (key, keyPath) => {}

    const router = useRouter()
    const clickRoute = (val: string) => {
      router.push(val)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
    }
  },
})
</script>
<style lang="scss">
.menu {
  background: #2e3035;
  height: calc(100vh - 60px);
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-width: 201px;
    margin-bottom: 0px;
    border-right: 1px solid #2e3035;
  }
  .el-menu {
    border-right: 1px solid #2e3035;
  }
  .main {
    background: #2e3035;
    top: 0px;
    bottom: 0px; /*bottom是尾部的高度*/
    overflow: auto; /*超出的部分，滚动条显示*/

    margin: 0px;
    .footer {
      bottom: 0; /*尾部绝对定位位置*/
      background: #2e3035;
      margin-right: 0px;
      display: flex;
      justify-content: flex-end;
      width: 90%;
      min-height: 40px;
      .el-button {
        background: #fff0;
        border: 0px;
      }
    }
  }
}
</style>
