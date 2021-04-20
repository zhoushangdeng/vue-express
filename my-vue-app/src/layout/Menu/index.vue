<template>
  <div class="Menu">
    <div class="menu">
      <el-menu
        :uniqueOpened="true"
        :default-active="defaultActive"
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
          v-for="(item1, index1) in menusTree"
          :key="index1"
          :index="item1.indexNum"
        >
          <template #title>
            <i :class="item1.icon"></i>
            <span>{{ item1.name || '123' }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="item2.indexNum"
              @click="clickRoute(item2, item2.index)"
              v-for="(item2, index2) in item1.children"
              :key="index2"
            >
              <i :class="item2.icon"></i>{{ item2.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="footer">
      <el-button
        :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="isCollapse = !isCollapse"
        size="medium"
      />
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const isCollapse = ref(false)
    const defaultActive = ref('1-1')
    const handleOpen = (index: any) => {}
    const handleClose = (key: any, keyPath: any) => {}

    const router = useRouter()
    const clickRoute = (item: any, defaultActiveIndex: string) => {
      const existence = store.state.userInfo.cachedMenu.filter(
        (item2: any) => item.name === item2.name
      )
      if (existence.length == 0 && item.name !== '首页') {
        store.dispatch('addKeepAlive', item)
      }
      store.dispatch('asyncClickRoute', item)
      router.push(item.path)
    }

    const menusTree = store.state.userInfo.menusTree
    onBeforeMount(() => {})
    return {
      isCollapse,
      handleOpen,
      handleClose,
      clickRoute,
      menusTree,
      defaultActive: computed(() => store.state.userInfo.defaultActive),
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
