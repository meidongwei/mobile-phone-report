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
          <td v-for="col in columns1">{{ col.title }}</td>
        </tr>
        <tr v-for="(item, index) in data1" :key="index+1">
          <td :class="[{no1: index === 0},{no2: index === 1},
            {no3: index === 2}]">
            <span v-if="index!==0 && index!==1 && index!== 2">
              {{ index + 1 }}
            </span>
          </td>
          <td>{{ item.shoukuanleibie }}</td>
          <td>{{ item.jine }}</td>
          <td>{{ item.zhanbi }}</td>
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
      columns1: [
        {
          title: '排名'
        },
        {
          title: '收款类别',
          key: 'shoukuanleibie'
        },
        {
          title: '金额(元)',
          key: 'jine'
        },
        {
          title: '占比',
          key: 'zhanbi'
        }
      ],
      data1: [
        {
          shoukuanleibie: '现金类',
          jine: 2873.50,
          zhanbi: '80.46%'
        },
        {
          shoukuanleibie: '银行卡类',
          jine: 698.00,
          zhanbi: '19.54%'
        }
      ]
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
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          confine: true
        },
        series: [
          {
            name: '收款类别',
            type: 'pie',
            radius: ['35%', '60%'],
            labelLine: {
              length: 20,
              length2: 80,
              // lineStyle: {
              //   color: '#333'
              // }
            },
            label: {
              formatter: '{a|{d}%}\n{b|{b}}',
              borderWidth: 0,
              borderRadius: 4,
              padding: [0, -50],
              rich: {
                a: {
                  // color: '#333',
                  // fontSize: 14,
                  lineHeight: 20
                },
                hr: {
                  // borderColor: '#333',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  // fontSize: 14,
                  lineHeight: 20,
                  // color: '#333'
                }
              }
            },
            data: [
              {value: 698, name:'银行卡类'},
              {value: 2873.5, name:'现金类'}
            ]
          }
        ]
      })
    },
    showChart2 () {
      let myChartObj = document.getElementById('chart2')
      let myChart = this.$echarts.init(myChartObj)
      myChart.resize({
        width: this.screenWidth
      })
      myChart.setOption({
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          confine: true
        },
        series: [
          {
            name: '收款类别',
            type: 'pie',
            radius: ['35%', '60%'],
            data:[
              {value: 6, name:'银行卡类'},
              {value: 12, name:'现金类'}
            ]
          }
        ]
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
