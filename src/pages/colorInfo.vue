<template>
  <div :class="{fixedBg: isFixedBg}">
    <Header @setFixedBg="setFixedBg"></Header>
    <div class="segment showColorData-one-col">
      <div class="cell" :class="theClass"
        style="margin-bottom:15px;">
        <div>
          <h2>{{ theData }}</h2>
          <p>{{ theTitle }}</p>
        </div>
      </div>
      <!-- echarts -->
      <div style="height:300px;width:100%;" id="echartId">
      </div>
    </div>

    <div class="segment" style="padding:0;">
      <!-- table -->
      <table class="table table-bordered">
        <tr class="active">
          <td v-for="(col, index) in columns1" :key="index">
            {{ col.title }}
          </td>
        </tr>
        <tr v-for="(item, index) in data1" :key="index+1">
          <td :class="[{no1: index === 0},{no2: index === 1},
            {no3: index === 2}]">
            <span v-if="index!==0 && index!==1 && index!== 2">
              {{ index + 1 }}
            </span>
          </td>
          <td>{{ item.mendian }}</td>
          <td>{{ item.liushui }}</td>
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
      columns1: [
        {
          title: '排名'
        },
        {
          title: '门店',
          key: 'mendian'
        },
        {
          title: '流水(元)',
          key: 'liushui'
        },
        {
          title: '占比',
          key: 'zhanbi'
        }
      ],
      data1: [
        {
          mendian: '中餐1店',
          liushui: 2377.81,
          zhanbi: '12.5%'
        },
        {
          mendian: '中餐1店',
          liushui: 14266.86,
          zhanbi: '75%'
        }
      ]
    }
  },
  computed: {
    theData () {
      return this.$route.query.data
    },
    theTitle () {
      return this.$route.query.title
    },
    theClass () {
      return this.$route.query.class
    }
  },
  methods: {
    setFixedBg (val) {
      this.isFixedBg = val
    },
    showSerial () {
      let myChartObj = document.getElementById('echartId')
      let myChart = this.$echarts.init(myChartObj)
      myChart.resize({
        width: this.screenWidth
      })
      myChart.setOption({
        color: ['#33b89e','#2adcb9','#33b89e'],
        title: {
            text: '单位：万元',
            textStyle: {
                fontSize: 12,
                fontWeight: 'normal',
                color: '#999999',
            }
        },

        tooltip: {
        },
        legend: {
        	x: 'right',
        	itemWidth:12,  //图例标记的图形宽度
            itemHeight:12, //图例标记的图形高度
        	data: [{
        		name : '实收',
        		icon : 'rect' //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        			},
        			{
                name : '优免',
                icon : 'rect'
        			}
        	],
        	textStyle: {
                color: '#999999'
            }
        },
        grid:{
          top: '10%',
          left: '-1%',
          right: '0',
          containLabel: true,
          bottom: 0
        },
        toolbox: {
            show : false,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },


        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
          	lineStyle: {
          		color: '#bbb',
          	}
          }
        },
        yAxis: [
          {
          	axisLine: {show: false},//不显示y轴
          	type: 'value',
      			axisTick:{
      		    show:false //去掉刻度
      			},
      			splitLine: {
            	show: true,
            	lineStyle: {
            		type: 'dotted' //分隔线的类型:solid dashed dotted
            	}
            },
            axisLabel: {
              textStyle: {
                color: '#999999'
              },
              formatter: '', //不显示数值{value}
            }
          }
        ],

        series: [{
          // data: [120, 200],
          type: 'bar',
          barWidth: 30
        }],
        dataset: {
          source: {
            "value": ["中餐1店","中餐2店"],
            "实收": [125, 750]
          }
        }
      })
    }
  },
  mounted () {
    this.showSerial()
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
    width: 100%;
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
</style>
