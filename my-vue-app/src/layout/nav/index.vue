<template>
  <div style="display: flex">
    <div>
      <el-button @click="clickRoute('Home')">home</el-button>
      <el-button @click="clickRoute('Contact')">contact</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup="props">
import { useRouter } from 'vue-router'

const router = useRouter()

const clickRoute = (val: string) => {
  router.push(val)
}
</script>