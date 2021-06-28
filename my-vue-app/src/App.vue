<template>
  <div id="app">
    <router-view />
    <!-- <div data-tname="WaveItem">
      <div class="main-container">
        <div class="waves">
          <div
            class="wave"
            v-for="(item, key) in waves"
            :key="key"
            :style="item"
          >
            <div
              v-for="n in wavesConfig.total"
              :key="n"
              class="wave-item"
              :style="{
                transform: `scale(${0.1 * Math.sqrt(n - 1)})`, // 使得波纹大小指数增长
                opacity: 0.2 * (1 / n), // 因为相互层叠的波纹透明度会相互叠加，需要越小的波纹透明度越低，以免中心颜色过重
                animationDelay: `${(n - 1) * 0.12}s`, // 越大的波纹越晚出现，以呈现波纹逐渐扩散的效果
                animationDuration: `${
                  0.6 + n * 0.3 + parseInt(item.width) * 0.002
                }s`, // 波纹动画时间渐增，表现波纹向外扩散渐慢的效果,波纹尺寸越大动画时间越长。
                backgroundColor: wavesConfig.waveColor,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
     /*  waves: [],
      wavesConfig: {
        maxSize: 100, // px，波纹最大尺寸
        minSize: 50, // px，波纹最小尺寸
        zIndexCount: 999, // 波纹父元素其z-index数值
        waveColor: '#3E8CE3', //波纹基础颜色
        total: 5, //波纹圈层数
      },
      clear: {
        delay: 5000,
        timeoutId: null,
      }, */
    }
  },
  mounted () {
    /* document.getElementById('app').onclick = (e) => {
      this.createWave(e)
      this.intervalClearWave()
    } */
  },
  methods: {
    /* createWave (e) {
      // 让新生成的波纹始终在之前波纹的上层产生叠加效果
      if (this.wavesConfig.zIndexCount > 99999) {
        this.wavesConfig.zIndexCount = 999
      } else {
        this.wavesConfig.zIndexCount++
      }
      // 在一定范围内随机生成波纹的大小
      const waveSize = parseInt(
        Math.random() * (this.wavesConfig.maxSize - this.wavesConfig.minSize) +
        this.wavesConfig.minSize
      )
      //添加新的波纹数据
      this.waves.push({
        left: `${e.clientX - waveSize / 2}px`,
        top: `${e.clientY - waveSize / 2}px`,
        zIndex: this.wavesConfig.zIndexCount,
        width: `${waveSize}px`,
        height: `${waveSize}px`,
      })
    },
    intervalClearWave () {
      clearTimeout(this.clear.timeoutId)
      this.clear.timeoutId = setTimeout(() => {
        this.waves = []
      }, this.clear.delay)
    }, */
  },
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
/*   cursor: pointer; */
}
/* ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

//滚动条的滑块
::-webkit-scrollbar-thumb {
  background-color: #063b5a27;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(128, 128, 128);
}
.waves {
  .wave {
    position: fixed;
    pointer-events: none; // 点击事件穿透，使得鼠标点击可以穿透波纹，兼容ie11及以上
    @keyframes wave {
      to {
        //波纹逐渐扩散变大变透明
        transform: scale(1);
        opacity: 0;
      }
    }
    .wave-item {
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 100%;
      animation: {
        name: wave;
        fill-mode: forwards; // 动画结束后保持最后一帧的状态
        timing-function: ease-out; // 波纹向外扩散渐缓
      }
    }
  }
}
#nprogress .bar {
  background: #728ebc !important;
} */
</style>