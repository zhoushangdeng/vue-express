<template>
  <el-container class="layout">
    <el-header style="height: 40px">
      <Nav />
    </el-header>
    <el-main>
      <Center />
    </el-main>
  </el-container>
</template>
<script lang="ts" setup="props">
import { useRouter } from 'vue-router'
import Nav from '@/layout/Nav/index.vue'
import Center from '@/layout/center/index.vue'

const router = useRouter()

const clickRoute = (val: string) => {
  console.log('val', val)
  router.push(val)
}

const isCollapse: boolean = false
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss">
.layout {
  .el-header,
  .el-main {
    margin: 0px;
    padding: 0px;
  }
}
</style>