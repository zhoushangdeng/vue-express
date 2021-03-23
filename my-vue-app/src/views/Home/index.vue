<template>
  <el-container class="home">
    <el-header>灯若</el-header>
    <el-main>
      <el-row type="flex" justify="center" v-for="item in 5" :key="item">
        <el-col :span="15">
          <div class="content">
            <h1 style="color: #ffff54">欢迎您访问我的主页</h1>
            <el-divider content-position="left">dengruo</el-divider>
            <p>幸会，我是dengruo</p>
            <p>—— —— —— —— ——</p>
            <p>一名前端开发工程师。</p>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer> 灯若 </el-footer>
  </el-container>
</template>
<script lang="ts" setup="props">
import { reactive, ref } from 'vue'
</script>
<style lang="scss">
.home {
  background-image: url('@/assets/homeBackground.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-bacground-size: cover;
  -o-background-size: cover;
  .el-header,
  .el-footer {
    margin: 0;
    padding: 0;
    height: 35px;
    color: white;
  }
  .el-main {
    margin: 0;
    padding: 0;
    height: calc(100vh - 120px);
    .content {
      height: 600px;
      min-width: 400px;
      background: rgba(73, 73, 69, 0.601);
    }
    p {
      color: white;
      text-align: start;
      padding: 10px 0px 0px 20px;
      font-weight: 700;
      font-size: 16px;
    }
  }
}
</style>