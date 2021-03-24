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
  .el-loading-spinner {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    -webkit-animation: typing 1s linear infinite alternate;
    -moz-animation: Typing 1s linear infinite alternate;
    animation: typing 1s linear infinite alternate;
    margin: 0px auto; /* Not necessary- its only for layouting*/
    position: relative;
    left: -40px;
  }
  @-webkit-keyframes typing {
    0% {
      background-color: rgba(247, 111, 73, 1);
      box-shadow: 40px 0px 0px 0px rgba(247, 111, 73, 0.2),
        80px 0px 0px 0px rgba(247, 111, 73, 0.2);
    }
    25% {
      background-color: rgba(247, 111, 73, 0.4);
      box-shadow: 40px 0px 0px 0px rgba(247, 111, 73, 2),
        80px 0px 0px 0px rgba(247, 111, 73, 0.2);
    }
    75% {
      background-color: rgba(247, 111, 73, 0.4);
      box-shadow: 40px 0px 0px 0px rgba(247, 111, 73, 0.2),
        80px 0px 0px 0px rgba(247, 111, 73, 1);
    }
  }

  @-moz-keyframes typing {
    0% {
      background-color: rgba(247, 111, 73, 1);
      box-shadow: 40px 0px 0px 0px rgba(247, 111, 73, 0.2),
        80px 0px 0px 0px rgba(247, 111, 73, 0.2);
    }
    25% {
      background-color: rgba(247, 111, 73, 0.4);
      box-shadow: 40px 0px 0px 0px rgba(247, 111, 73, 2),
        80px 0px 0px 0px rgba(247, 111, 73, 0.2);
    }
    75% {
      background-color: rgba(247, 111, 73, 0.4);
      box-shadow: 40px 0px 0px 0px rgba(247, 111, 73, 0.2),
        80px 0px 0px 0px rgba(247, 111, 73, 1);
    }
  }
  @keyframes typing {
    0% {
      background-color: rgba(247, 111, 73, 1);
      box-shadow: 40px 0px 0px 0px rgba(247, 111, 73, 0.2),
        80px 0px 0px 0px rgba(247, 111, 73, 0.2);
    }
    25% {
      background-color: rgba(247, 111, 73, 0.4);
      box-shadow: 40px 0px 0px 0px rgba(247, 111, 73, 2),
        80px 0px 0px 0px rgba(247, 111, 73, 0.2);
    }
    75% {
      background-color: rgba(0, 184, 220, 0.4);
      box-shadow: 40px 0px 0px 0px rgba(249, 54, 0, 0.2),
        80px 0px 0px 0px rgb(2, 243, 130);
    }
  }
}
</style>