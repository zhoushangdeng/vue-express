<template>
  <div class="layout">
    <div class="left">
      <Menu />
    </div>
    <div class="right">
      <div class="header">
        <Header />
      </div>
      <div class="main">
        <Main />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/layout/header/index.vue'
import Menu from '@/layout/Menu/index.vue'
import Main from '@/layout/main/index.vue'
export default defineComponent({
  components: {
    Header,
    Menu,
    Main,
  },
  setup() {
    const router = useRouter()

    const clickRoute = (val: string) => router.push(val)

    const handleOpen = (key: string, keyPath: string) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string) => {
      console.log(key, keyPath)
    }
    return {
      clickRoute,
      handleOpen,
      handleClose,
    }
  },
})
</script>

<style lang="scss">
.layout {
  display: flex;
  display: -webkit-flex; /* 兼容Safari */
  height: 100vh;
  width: 100%;
  .right {
    flex: 1; /* 占满剩余的空间 */
    width: 0; /* 解决因为felx布局导致的，right因为lenf宽度改变而出现的bug */
    display: -webkit-flex; /* 兼容Safari */
    display: flex;
    flex-direction: column; /* 垂直显示 */
    .header {
      height: 90px;
    }
    .main {
      flex: 1; /* 占满剩余的空间 */
    }
  }
}
</style>