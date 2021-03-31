<template>
  <el-container class="home">
    <el-header>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        size="mini"
      >
        <el-form-item>
          <el-input
            v-model.trim="formInline.user"
            maxlength="30"
            placeholder="请输入内容"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search"> 查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        height="calc(100vh - 120px)"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="3"
          ><el-switch
            style="margin-top: 10px"
            v-model="isSwitch"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="收起"
            inactive-text="展开"
          >
          </el-switch>
        </el-col>
        <el-col :span="20">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100"
          >
          </el-pagination>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
export default defineComponent({
  props: {},
  setup: () => {
    interface FormState {
      user: string
      region: string
    }
    const formInline: FormState = reactive({
      user: '',
      region: '',
    })
    const tableData = [
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      },
    ]
    const isSwitch = ref(false)

    const handleSizeChange = (val) => {}
    const handleCurrentChange = (val) => {}
    const pageIndex = ref(1)

    return {
      tableData,
      isSwitch,
      handleSizeChange,
      handleCurrentChange,
      pageIndex,
      formInline,
    }
  },
})
</script>
<style lang="scss">
.home {
  .el-header,
  .el-footer {
    margin: 0;
    padding: 0;
    height: 35px !important;
  }
  .el-main {
    margin: 0px;
    padding: 0px;
    height: calc(100vh - 120px);
    .content {
      height: 90%;
      min-width: 400px;
      background: rgba(73, 73, 69, 0.601);
    }
    p {
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