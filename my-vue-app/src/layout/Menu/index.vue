<template>
  <el-row>
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2e3035"
      text-color="#fff"
      active-text-color="#ffd04b"
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
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu></el-row
  >
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 200px;
  width: 100%;
  min-height: 400px;
}
</style>
