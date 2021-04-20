<template>
  <el-container class="home">
    <el-main>
      <div
        style="display: flex; width: 100%; height: 100%; flex-direction: column"
      >
        <div id="echartsRef" style="flex: 1"></div>
        <div>
          <el-table
            :data="tableData"
            border
            style="width: 100%; height: 200px !important"
            size="mini"
          >
            <el-table-column prop="date" align="center" label="类别">
            </el-table-column>
            <el-table-column prop="A" align="center" label="A" />
            <el-table-column prop="B" align="center" label="B" />
            <el-table-column prop="C" align="center" label="A" />
            <el-table-column prop="D" align="center" label="B" />
            <el-table-column prop="E" align="center" label="A" />
          </el-table>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, computed, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  props: {},
  setup: () => {
    const tableData = [
      {
        date: '类别1',
        A: 200,
        B: 140,
        C: 34,
        D: 43,
        E: 65,
      },
      {
        date: '类别2',
        A: 200,
        B: 140,
        C: 34,
        D: 43,
        E: 65,
      },
      {
        date: '类别3',
        A: 200,
        B: 140,
        C: 34,
        D: 43,
        E: 65,
      },
    ]

    onMounted(() => {
      const echartsRefs = echarts.init(document.getElementById('echartsRef'))
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ['A', 'B', 'C', 'D', 'E', 'F'],
        },
        xAxis: [
          {
            type: 'category',
            data: ['类别A', '类别B', '类别C'],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',
            axisLabel: {
              formatter: '{value}',
            },
          },
          {
            type: 'value',
            name: '数量',
            axisLabel: {
              formatter: '{value}',
            },
          },
        ],
        series: [
          {
            name: 'A',
            type: 'bar',
            data: [20, 49, 170],
          },
          {
            name: 'B',
            type: 'bar',
            data: [26, 59, 190],
          },
          {
            name: 'C',
            type: 'bar',
            data: [26, 59, 90],
          },
          {
            name: 'D',
            type: 'bar',
            data: [26, 159, 90],
          },
          {
            name: 'E',
            type: 'bar',
            data: [126, 59, 90],
          },
        ],
      }
      echartsRefs.setOption(option)
    })
    return {
      tableData,
    }
  },
})
</script>
<style lang="scss">
.home {
  width: 100%;
  .el-header,
  .el-footer {
    margin: 0;
    padding: 0;
    height: 35px !important;
  }
  .el-main {
    margin: 0px;
    padding: 0px;
    height: calc(100vh - 170px);
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