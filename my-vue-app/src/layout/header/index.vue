<template>
  <div>
    <div class="nav">
      <div class="item1">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            v-show="$route.meta.title !== '首页'"
            @click="clickRoute()"
            >{{ $route.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="item2">
        <el-button type="text">{{ userName }}</el-button>
      </div>
    </div>
    <div>
      <el-tabs
        v-model="$route.name"
        type="card"
        closable
        @tab-remove="removeTab"
        @tab-click="tabClick"
      >
        <el-tab-pane
          v-for="(item, index) in cachedMenu"
          :key="index"
          :label="item.name"
          :name="item.name"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store/index'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const router = useRouter()
    const userName: string = store.state.userInfo.userName
    const clickRoute = (val: string) => {
      router.push(val)
    }
    const store2 = useStore()

    const removeTab = (targetName: any) => {
      store2.state.userInfo.cachedMenu.map((item, index) => {
        if (item.name === targetName) {
          store2.state.userInfo.cachedMenu.splice(index, 1)
        }
      })
    }
    const tabClick = (targetName) => {
      store2.state.userInfo.cachedMenu.map((item, index) => {
        if (item.name == targetName.props.name) {
          router.push(item.path)
        }
      })
    }

    return {
      cachedMenu: computed(() => store2.state.userInfo.cachedMenu),
      clickRoute,
      userName,
      removeTab,
      tabClick,
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
    margin-top: 5px;
  }
  .item2 {
    width: 100px;
  }
}
</style>