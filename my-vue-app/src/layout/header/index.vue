<template>
  <div>
    <div class="nav">
      <div class="item1">
        <el-breadcrumb
          separator="/"
          style="margin-top: 3px"
        >
          <el-breadcrumb-item
            v-for="(item, index) in matchedArr"
            :key="index"
          >{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="item2">
        <el-popover
          placement="bottom"
          trigger="click"
          :width="90"
        >
          <template #reference>
            <el-button type="text">{{userName}}</el-button>
          </template>
          <div style="display: flex;justify-content: center;">
            <el-button
              type="primary"
              @click="signOut"
              size="small"
            >
              退出登录
            </el-button>
          </div>
        </el-popover>

      </div>
    </div>
    <div>
      <el-tabs
        v-model="$route.name"
        type="card"
        closable
        @tab-remove="(targetName) => removeTab(targetName, $route.name)"
        @tab-click="tabClick"
        size="mini"
      >
        <el-tab-pane
          v-for="(item, index) in cachedMenu"
          :key="index"
          :label="item.name"
          :name="item.name"
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
    const { ctx } = getCurrentInstance()
    const clickRoute = (val: string) => {
      router.push(val)
    }

    const removeTab = (targetName: any, routeName: any) => {
      store.state.userInfo.cachedMenu.map((item, index) => {
        if (item.name === targetName && targetName !== '首页') {
          store.state.userInfo.cachedMenu.splice(index, 1)
          if (targetName === routeName) {
            router.push(store.state.userInfo.cachedMenu[index - 1].path)
          }
        }
      })
    }
    const matchedArr = reactive([])
    const tabClick = (targetName: any) => {
      store.state.userInfo.cachedMenu.map((item, index) => {
        if (item.name == targetName.props.name) {
          store.dispatch('asyncgetdefaultActive', item.indexNum)
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
        ctx.$router.currentRoute.value.matched.filter((item, index, self) => {
          if (item.meta.title) {
            const title = item.meta.title
            temp.push(title)
          }
        })
        temp.filter((item, index, self) => {
          if (!temps.includes(item)) {
            temps.push(item)
          }
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