<template>
  <!--   <div style="display: flex"><Menu /><Content /></div> -->
  <el-container>
    <el-aside>
      <Menu />
    </el-aside>
    <el-main>
      <Content />
    </el-main>
  </el-container>
</template>
<script lang="ts" setup="props">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Menu from '@/layout/Menu/index.vue'
import Content from '@/layout/content/index.vue'
</script>
<style lang="scss">
.el-header,
.el-main {
  margin: 0px;
  padding: 0px;
}
</style>