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

    const clickRoute = (val: string) => {
      router.push(val)
    }

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
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

  .right {
    flex: 1; /* 占满剩余的空间 */
    display: -webkit-flex; /* 兼容Safari */
    display: flex;
    flex-direction: column; /* 垂直显示 */
    height: 100vh;
    .header {
      height: 30px;
    }
    .main {
      flex: 1; /* 占满剩余的空间 */
      display: flex;
    }
  }
}
</style>