<template>
  <div :class="{fixedBg: isFixedBg}">
    <Header @setFixedBg="setFixedBg"></Header>
    <div class="segment showColorData-one-col">
      <div class="cell"
        :class="[{'cell-1': item.id === 1},
                 {'cell-3': item.id === 2},
                 {active: index === num}]"
        v-for="(item, index) in tabs" :key="index"
        style="margin-bottom:15px;"
        @click="handleChangeChart(index)">
        <div>
          <h2>{{ item.data }}</h2>
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div style="height:300px;width:100%;"
        v-for="(item, index) in tabContents" :key="item.id"
        :id="item.id" v-show="index === num">
      </div>
    </div>

    <div class="segment" style="padding:0;">
      <!-- table -->
      <table class="table table-bordered">
        <tr class="active">
          <td>排名</td>
          <td>门店</td>
          <td>流水(元)</td>
          <td>占比</td>
        </tr>
        <tr>
          <td class="no1"></td>
          <td>中餐1店</td>
          <td>2377.81</td>
          <td>100.00%</td>
        </tr>
        <tr>
          <td class="no2"></td>
          <td>中餐1店</td>
          <td>2377.81</td>
          <td>100.00%</td>
        </tr>
        <tr>
          <td class="no3"></td>
          <td>中餐1店</td>
          <td>2377.81</td>
          <td>100.00%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>中餐1店</td>
          <td>2377.81</td>
          <td>100.00%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>中餐1店</td>
          <td>2377.81</td>
          <td>100.00%</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  },
  data () {
    return {
      isFixedBg: false,
      num: 0,
      tabs: [
        {
          id: 1,
          data: 111,
          title: 111
        },
        {
          id: 2,
          data: 222,
          title: 222
        }
      ],
      tabContents: [
        {
          id: 'chart1',
        },
        {
          id: 'chart2'
        }
      ],
    }
  },
  computed: {
    // 初始化 chart 之后,
    // 获取屏幕宽度赋值给 chart 的宽度
    screenWidth () {
      return window.innerWidth - 30
    }
  },
  methods: {
    setFixedBg (val) {
      this.isFixedBg = val
    },
    handleChangeChart (index) {
      this.num = index
      if (index === 0) {
        this.showChart1()
      } else {
        this.showChart2()
      }
    },
    showChart1 () {
      let myChartObj = document.getElementById('chart1')
      let myChart = this.$echarts.init(myChartObj)
      myChart.resize({
        width: this.screenWidth
      })
      myChart.setOption({
        tooltip: {
          // trigger: 'axis' // 触发类型
        },
        grid: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0'
        },
        xAxis: {
          type: 'category', // 坐标轴类型
          boundaryGap: false, // 坐标轴两边留白策略
          axisLabel:{
            interval:0, // 横轴信息全部显示
          }
        },
        yAxis: {
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%']
          }
        ],
        dataset: {
          source: {
            "value": ["银行卡类","现金类"],
            "aa": [250, 750]
          }
        }
      })
    },
    showChart2 () {
      let myChartObj = document.getElementById('chart2')
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
          {
            type: 'pie',
            radius: ['50%', '70%']
          },
          {
            type: 'pie',
            radius: ['50%', '70%']
          },
          {
            type: 'pie',
            radius: ['50%', '70%']
          }
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
    }
  },
  mounted () {
    this.showChart1()
  }
}
</script>

<style scoped>
  .showColorData-one-col {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 80px;
  }
  .showColorData-one-col .cell {
    width: 49%;
  }
  .no1 {
    background: url('../assets/no1.png') no-repeat center center;
    background-size: 22px 26px;
  }
  .no2 {
    background: url('../assets/no2.png') no-repeat center center;
    background-size: 22px 26px;
  }
  .no3 {
    background: url('../assets/no3.png') no-repeat center center;
    background-size: 22px 26px;
  }
  .showColorData-one-col .active {
    background-image: url(../assets/selection.png);
    background-repeat: no-repeat;
    background-position: 18px top;
    background-size: 18px 22px;
  }
</style>
