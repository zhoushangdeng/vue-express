<template>
  <el-row class="nav">
 <!--    <el-col :span="5">
      <img src="../../assets/logo.jpg" class="logo" />
    </el-col> -->
    <el-col :span="15">
      <el-button type="text" @click="clickRoute('Home')">首页</el-button>
      <el-button type="text" @click="clickRoute('Contact')">内容</el-button>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup="props">
import { useRouter } from "vue-router";

const router = useRouter();
const clickRoute = (val: string) => {
  router.push(val);
};
</script>

<style lang="scss">
.nav {
  display: flex;
  width: 100%;
  height: 100%;
  img {
    width: 20%;
    height: 40px;
  }
}
</style>