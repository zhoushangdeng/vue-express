<template>
  <div class="layout">
    <div class="left">
      <Menu />
    </div>
    <div class="right">
      <el-container style="height: 100%; width: 100%">
        <el-header class="header">
          <Nav />
        </el-header>
        <el-main
          style="
            height: calc(100vh - 30px);
            width: 100%;
            padding: 0px;
            margin: 0px;
          "
        >
          <Content />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Nav from '@/layout/Nav/index.vue'
import Menu from '@/layout/Menu/index.vue'
import Content from '@/layout/content/index.vue'
export default defineComponent({
  components: {
    Nav,
    Menu,
    Content,
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
  .el-header,
  .el-main,
  .left {
    margin: 0px;
    padding: 0px;
  }
  .header {
    height: 35px !important;
    display: flex;
    align-items: center;
  }
  .left {
    background: #2e3035;
  }
  .right {
    width: 100%;
    height: calc(100vh);
  }
}
</style>