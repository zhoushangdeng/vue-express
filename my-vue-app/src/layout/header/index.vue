<template>
  <div>
    <div class="nav">
      <div class="item1">
        <el-breadcrumb separator="/" style="margin-top:3px">
          <el-breadcrumb-item
            v-for="(item, index) in matchedArr"
            :key="index"
            >{{ item }}</el-breadcrumb-item
          >
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
        size="mini"
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
import {
  defineComponent,
  ref,
  reactive,
  computed,
  getCurrentInstance,
} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const userName: string = store.state.userInfo.userName
    const { ctx } = getCurrentInstance()
    const clickRoute = (val: string) => {
      router.push(val)
    }

    const removeTab = (targetName: any) => {
      store.state.userInfo.cachedMenu.map((item, index) => {
        if (item.name === targetName) {
          store.state.userInfo.cachedMenu.splice(index, 1)
        }
      })
    }
    const matchedArr = reactive([])
    const tabClick = (targetName: any) => {
      console.log(
        'ctx.$router.currentRoute.value.fullPath',
        ctx.$router.currentRoute.value
      )
      store.state.userInfo.cachedMenu.map((item, index) => {
        if (item.name == targetName.props.name) {
          store.dispatch('asyncgetdefaultActive', item.defaultActiveIndex)
          router.push(item.path)
        }
      })
    }

    return {
      cachedMenu: computed(() => store.state.userInfo.cachedMenu),
      clickRoute,
      userName,
      removeTab,
      tabClick,
      matchedArr: computed(() => {
        let temp = [],
          temps = []
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
}
</style>