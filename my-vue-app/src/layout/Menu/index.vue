<template>
  <div class="Menu">
    <div class="menu">
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
        :collapse-transition="true"
        style="height: calc(100vh - 40px)"
      >
        <el-submenu
          index="1"
          v-for="(item1, index1) in menusTree"
          :key="index1"
        >
          <template #title>
            <i class="el-icon-user"></i>
            <span>{{ item1.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="index1 + '-' + index2"
              @click="clickRoute(item2.path)"
              v-for="(item2, index2) in item1.children"
              :key="index2"
              >{{ item2.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template #title>
            <i class="el-icon-user"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="clickRoute('/Menus')"
              >菜单管理</el-menu-item
            >
            <el-menu-item index="2-2" @click="clickRoute('/Home')"
              >首页</el-menu-item
            >
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="footer">
      <el-button
        :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="isCollapse = !isCollapse"
      />
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const isCollapse = ref(false)

    const handleOpen = () => {}
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }

    const router = useRouter()
    const clickRoute = (val: string) => {
      console.log('val', val)
      router.push(val)
    }
    const store = useStore()
    const menusTree = store.state.userInfo.menusTree
    onBeforeMount(() => {
      console.log('menusTree', store.state.userInfo)
    })
    return {
      isCollapse,
      handleOpen,
      handleClose,
      clickRoute,
      menusTree,
    }
  },
})
</script>
<style lang="scss">
.Menu {
  background: #2e3035;
  height: 100vh;
  display: flex;
  flex-direction: column; /* 垂直显示 */
  .menu {
    flex: 1;
  }
  .footer {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    .el-button {
      background: #fff0;
      border: 0px;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-width: 201px;
    margin-bottom: 0px;
  }
  .el-menu {
    border-right: 1px solid #2e3035;
  }
}
</style>
