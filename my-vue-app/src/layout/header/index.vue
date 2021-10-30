<template>
  <div>
    <div class="nav">
      <div class="item1">
        <el-breadcrumb separator="/" style="margin-top: 3px">
          <el-breadcrumb-item
            v-for="(item, index) in matchedArr"
            :key="index"
            >{{ item }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <div class="item2">
        <el-popover placement="bottom" trigger="click" :width="90">
          <template #reference>
            <el-button type="text">{{ userName }}</el-button>
          </template>
          <div style="display: flex; justify-content: center">
            <el-button type="primary" @click="signOut" size="small">
              退出登录
            </el-button>
          </div>
        </el-popover>
      </div>
    </div>
    <div>
      <el-tabs
        v-model="$route.path"
        type="card"
        closable
        @tab-remove="(targetName) => removeTab(targetName, $route.path)"
        @tab-click="tabClick"
        size="mini"
      >
        <el-tab-pane
          v-for="item in cachedMenu"
          :key="item.id"
          :label="item.name"
          :name="item.path"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { removeToken } from '@/util/auth'
export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const userName: string = store.state.userInfo.userName
    interface obj {
      ctx: any
    }
    const { ctx }: obj = getCurrentInstance()
    const clickRoute = (val: string) => router.push(val)

    const removeTab = (targetName: string, routeName: any) => {
      store.state.userInfo.cachedMenu.map((item, index) => {
        if (item.path === targetName && targetName !== '/Home') {
          store.state.userInfo.cachedMenu.splice(index, 1)
          if (targetName === routeName) {
            router.push(store.state.userInfo.cachedMenu[index - 1].path)
          }
        }
      })
    }
    const matchedArr = reactive([])
    const tabClick = (targetName: any) => {
      store.state.userInfo.cachedMenu.map((item) => {
        if (item.path == targetName.props.name) {
          store.dispatch('asyncgetdefaultActive', item.id)
          router.push(item.path)
        }
      })
    }
    const signOut = () => {
      removeToken()
      router.push('/login')
    }
    return {
      signOut,
      cachedMenu: computed(() => store.state.userInfo.cachedMenu),
      clickRoute,
      userName,
      removeTab,
      tabClick,
      matchedArr: computed(() => {
        let temp = []
        let temps = []
        ctx.$router.currentRoute.value.matched.filter((item) => {
          const title = item.meta.title
          if (title) temp.push(title)
        })
        temp.filter((item) => {
          if (!temps.includes(item)) temps.push(item)
        })
        return temps
      }),
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
    margin-top: 0px;
  }
  .item2 {
    width: 100px;
  }
  .signOut {
    display: flex;
    justify-content: center;
    div {
      border-bottom: 2px solid black;
      margin-bottom: 10px;
    }
  }
}
</style>