<template>
  <el-container>
    <el-header> dengruo </el-header>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%; height: calc(100vh - 170px)"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </el-footer>
  </el-container>
</template>
<script lang="ts" setup="props">
import { reactive, ref } from 'vue'
const tableData = reactive([
  {
    date: '2016-05-02',
    name: '王小小',
    address: '长沙市普陀区金沙江路 1518 弄',
  },
  {
    date: '2017-05-04',
    name: '王小小',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2018-05-01',
    name: '王小小',
    address: '北京市普陀区金沙江路 1518 弄',
  },
  {
    date: '2019-05-03',
    name: '王小小',
    address: '深圳市普陀区金沙江路 1518 弄',
  },
])
const pageIndex = 1
const handleSizeChange = (val) => {
  console.log(`每页 ${val} 条`)
}
const handleCurrentChange = (val) => {}
</script>