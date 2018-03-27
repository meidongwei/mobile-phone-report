<template>
  <div style="height: 1000px;">
    <div class="header">
      <div class="header-top">
        中餐1店
      </div>
      <div class="header-bottom">
        年总汇
      </div>
    </div>
    <div class="segment showData">
      <div class="cell cell-1">
        <div>
          <h2>81190.<small>23</small></h2>
          <p>流水(元)</p>
        </div>
      </div>
      <div class="cell cell-2">
        <div>
          <h2>45497.<small>19</small></h2>
          <p>实收(元)</p>
        </div>
      </div>
      <div class="cell cell-3">
        <div>
          <h2>7281.<small>52</small></h2>
          <p>成本(元)</p>
        </div>
      </div>
      <div class="cell cell-4">
        <div>
          <h2>38215.<small>27</small></h2>
          <p>毛利(元)</p>
        </div>
      </div>
      <div class="cell cell-5">
        <div>
          <h2>12018.<small>63</small></h2>
          <p>未结金额(元)</p>
        </div>
      </div>
      <div class="cell cell-6">
        <div>
          <h2>302/14</h2>
          <p>已结/未结账单</p>
        </div>
      </div>
    </div>
    <div class="segment">
      <div class="tab">
        <button class="btn" :class="{active:index === num}"
          v-for="(item, index) in tabs"
          @click="handleChangeChart(index)">
          {{ item }}
        </button>
      </div>
      <div style="width:100%;height:300px;"
        v-for="(item, index) in tabContents"
        :id="item.id" v-show="index === num"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: ['营业实收', '就餐人数'],
      tabContents: [
        {
          id: 'realIncome',
        },
        {
          id: 'numberOfPeople'
        }
      ],
      num: 0
    }
  },
  computed: {
    // 初始化 chart 之后,
    // 获取屏幕宽度赋值给 chart 的宽度
    screenWidth () {
      return window.innerWidth - 30
    }
  },
  mounted () {
    this.showRealIncome()
  },
  methods: {
    handleChangeChart (index) {
      this.num = index
      if (index === 1) {
        this.showNumberOfPeople()
      } else {
        this.showRealIncome()
      }
    },
    showRealIncome () {
      let myChartObj = document.getElementById('realIncome')
      let myChart = this.$echarts.init(myChartObj)
      myChart.resize({
        width: this.screenWidth
      })
      myChart.setOption({
        tooltip: {
          trigger: 'axis' // 触发类型
        },
        legend: {
          right: '0'
        },
        grid: {
          top: '33px',
          left: '0',
          right: '10',
          bottom: '0',
          containLabel: true // 是否包含坐标轴的刻度标签
        },
        xAxis: {
          type: 'category', // 坐标轴类型
          boundaryGap: false, // 坐标轴两边留白策略
          axisLabel:{
            interval:0, // 横轴信息全部显示
          }
        },
        yAxis: {
          name: '单位:万元'
        },
        series: [
          { type: 'line' },
          { type: 'line' },
          { type: 'line' }
        ],
        dataset: {
          source: {
            "value": ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
            "去年完成": [125, 250, 590, 750, 580, 750, 600, 528, 522, 528, 600, 700],
            "今年计划": [35, 130, 280, 250, 380, 430, 400, 328, 422, 328, 290, 100],
            "今年完成": [15, 30, 100, 220, 280, 250, 290, 228, 222, 108, 20, 0]
          }
        }
      })
    },
    showNumberOfPeople () {
      let myChartObj = document.getElementById('numberOfPeople')
      let myChart = this.$echarts.init(myChartObj)
      myChart.resize({
        width: this.screenWidth
      })
      myChart.setOption({
        tooltip: {
          trigger: 'axis' // 触发类型
        },
        legend: {
          right: '0'
        },
        grid: {
          top: '33px',
          left: '0',
          right: '10',
          bottom: '0',
          containLabel: true // 是否包含坐标轴的刻度标签
        },
        xAxis: {
          type: 'category', // 坐标轴类型
          boundaryGap: false, // 坐标轴两边留白策略
          axisLabel:{
            interval:0, // 横轴信息全部显示
          }
        },
        yAxis: {
          name: '单位:人'
        },
        series: [
          { type: 'line' },
          { type: 'line' },
          { type: 'line' }
        ],
        dataset: {
          source: {
            "value": ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
            "去年完成": [125, 250, 8000, 9000, 9807, 9960, 12000, 9998, 8009, 528, 600, 700],
            "今年计划": [35, 130, 280, 2500, 3800, 4030, 4000, 3028, 4202, 3028, 290, 100],
            "今年完成": [15, 30, 1010, 2020, 2800, 2050, 2900, 2208, 202, 1008, 20, 0]
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  .header-top,
  .header-bottom {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .header-top {
    background-color: #fff;
  }
  .header-bottom {
    background-color: #e6e6e6;
  }
  .showData {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 80px;
    padding-bottom: 7px;
  }
  .cell {
    height: 100px;
    width: 49%;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .cell-1 {
    background-color: #e1b14b;
  }
  .cell-2 {
    background-color: #33b79f;
  }
  .cell-3 {
    background-color: #41c8cc;
  }
  .cell-4 {
    background-color: #ec6e62;
  }
  .cell-5,
  .cell-6 {
    background-color: #f2f2f2;
    color: #000000;
  }
  .cell > div {
    text-align: center;
  }
  .cell > div > p {
    font-size: 14px;
  }
  .cell-5 > div > p,
  .cell-6 > div > p {
    color: #878787;
  }
  .tab {
    display: flex;
    margin-bottom: 20px;
  }
  .tab .btn {
  }
</style>
