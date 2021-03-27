<template>
  <div class="layout">
    <div class="left">
      <Menu />
    </div>
    <div class="right">
      <el-container style="height: 100%; width: 100%">
        <el-header style="height: 40px">
          <Nav />
        </el-header>
        <el-main
          style="
            height: calc(100vh - 40px);
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
<script lang="ts" setup="props">
import { useRouter } from "vue-router";
import Nav from "@/layout/Nav/index.vue";
import Menu from "@/layout/Menu/index.vue";
import Content from "@/layout/content/index.vue";

const router = useRouter();

const clickRoute = (val: string) => {
  router.push(val);
};

const isCollapse: boolean = false;
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss">
.layout {
  display: flex;
  .el-header,
  .el-main .left {
    margin: 0px;
    padding: 0px;
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