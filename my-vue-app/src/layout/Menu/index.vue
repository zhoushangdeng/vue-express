<template>
  <el-row class="tac">
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
          <div style="display: flex">
            <span><i class="el-icon-location"></i></span>
            <span>导航一</span>
          </div>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <div style="display: flex">
          <span> <i class="el-icon-menu"></i></span>
          <span>导航二</span>
        </div>
      </el-menu-item>
    </el-menu></el-row
  >
</template>

<script lang="ts" setup="props">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const isCollapse = reactive({
  a: false,
});

const handleOpen = (key, keyPath) => {};
const handleClose = (key, keyPath) => {};
</script>

<style lang="scss">
.menu {
  background: #2e3035 !important;
  color: white !important;
  margin: 0px;
  padding: 0px;
}
.el-menu {
  border: 0px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 200px;
  width: 100%;
  min-height: 400px;
}
</style>
