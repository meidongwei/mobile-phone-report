<template>
  <div style="padding-bottom:50px;" :class="{fixedBg: isFixedBg}">
    <Header @setFixedBg="setFixedBg"></Header>
    <div class="segment showColorData-two-col">

      <div class="cell" :class="item.class"
        v-for="(item, index) in colorList" :key="index"
        @click="goColorInfo(item)">
        <div>
          <h2>{{ item.data }}</h2>
          <p>{{ item.title }}</p>
        </div>
      </div>

      <div class="cell cell-5">
        <div>
          <h2>{{ wjamount }}</h2>
          <p>未结金额(元)</p>
        </div>
      </div>

      <div class="cell cell-6">
        <div>
          <h2>{{ yjshuliang }}/{{ wjshuliang }}</h2>
          <p>已结/未结账单</p>
        </div>
      </div>

    </div>
    <div class="segment">
      <div class="tab">
        <button class="btn btn-tab" :class="{active:index === num}"
          v-for="(item, index) in tabs" :key="index"
          @click="handleChangeChart(index)">
          {{ item }}
        </button>
      </div>
      <div style="width:100%;height:300px;"
        v-for="(item, index) in tabContents" :key="index"
        :id="item.id" v-show="index === num">
      </div>
    </div>
    <h4 class="page-header">营业详情</h4>
    <div class="segment" style="padding:0;">
      <table class="table table-two-col">
        <tr>
          <td @click="goColorInfoTab">
            <h2>{{ shishou }}</h2>
            <p>收款(元)</p>
          </td>
          <td>
            <h2>{{ youmian }}</h2>
            <p>优免(元)</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ zhuoshu }}</h2>
            <p>堂食桌数</p>
          </td>
          <td>
            <h2>{{ keliu }}</h2>
            <p>堂食客流</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ zhuojun }}</h2>
            <p>堂食桌均(元)</p>
          </td>
          <td>
            <h2>{{ renjun }}</h2>
            <p>堂食人均(元)</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ ktl }}%</h2>
            <p>开台率</p>
          </td>
          <td>
            <h2>{{ szl }}%</h2>
            <p>上座率</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ rx }}</h2>
            <p>人效(元)</p>
          </td>
          <td>
            <h2>{{ px }}</h2>
            <p>坪效(元)</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ wmds }}</h2>
            <p>外卖单数</p>
          </td>
          <td>
            <h2>{{ wmdj }}</h2>
            <p>外卖单均</p>
          </td>
        </tr>
      </table>
    </div>

    <h4 class="page-header">客人自助</h4>
    <div class="segment" style="padding:0;">
      <table class="table table-two-col">
        <tr>
          <td>
            <h2>{{ zzdd }}</h2>
            <p>自助点单量</p>
          </td>
          <td>
            <h2>{{ ddl }}%</h2>
            <p>自助点单率</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ zzjz }}</h2>
            <p>自助结账量</p>
          </td>
          <td>
            <h2>{{ jzl }}%</h2>
            <p>自助结账率</p>
          </td>
        </tr>
      </table>
    </div>

    <h4 class="page-header">异常监控</h4>
    <div class="segment" style="padding:0;">
      <table class="table table-two-col">
        <tr>
          <td>
            <h2>{{ tuicai }}</h2>
            <p>退菜金额(元)</p>
          </td>
          <td>
            <h2>{{ zengcai }}</h2>
            <p>赠菜金额(元)</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ guqing }}</h2>
            <p>沽清菜品</p>
          </td>
          <td>
            <h2>{{ fanjie }}</h2>
            <p>反结单数</p>
          </td>
        </tr>
      </table>
    </div>

    <h4 class="page-header page-header-icon">
      菜品四象限
      <a href="javascript:;" class="setting">
        <img src="@/assets/set.png" alt="setting">
      </a>
    </h4>
    <div class="segment" style="padding:0;">
      <table class="table table-two-col">
        <tr>
          <td>
            <h2>{{ wtcp }}</h2>
            <p>问题菜品</p>
          </td>
          <td>
            <h2>{{ mxcp }}</h2>
            <p>明星菜品</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ sgcp }}</h2>
            <p>瘦狗菜品</p>
          </td>
          <td>
            <h2>{{ jncp }}</h2>
            <p>金牛菜品</p>
          </td>
        </tr>
      </table>
    </div>

    <h4 class="page-header">菜品分析</h4>
    <div class="segment" style="padding:0;">
      <table class="table table-two-col">
        <tr>
          <td>
            <h2>10</h2>
            <p>受欢迎菜品</p>
          </td>
          <td>
            <h2>10</h2>
            <p>滞销菜品</p>
          </td>
        </tr>
      </table>
    </div>

    <h4 class="page-header">堂食客人构成</h4>
    <div class="segment" style="padding:0;">
      <table class="table table-two-col">
        <tr>
          <td>
            <h2>{{ pkddzhanbi }}%</h2>
            <p>普客订单</p>
          </td>
          <td>
            <h2>{{ hyddzhanbi }}%</h2>
            <p>会员订单</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ pkjezhanbi }}%</h2>
            <p>普客金额</p>
          </td>
          <td>
            <h2>{{ hyjezhanbi }}%</h2>
            <p>会员金额</p>
          </td>
        </tr>
      </table>
    </div>

    <h4 class="page-header">业务构成</h4>
    <div class="segment" style="padding:0;">
      <table class="table table-two-col">
        <tr>
          <td>
            <h2>{{ tsddzhanbi }}%</h2>
            <p>堂食订单</p>
          </td>
          <td>
            <h2>{{ wmddzhanbi }}%</h2>
            <p>外卖订单</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>{{ tsjezhanbi }}%</h2>
            <p>堂食金额</p>
          </td>
          <td>
            <h2>{{ wmjezhanbi }}%</h2>
            <p>外卖金额</p>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import httpUrl from '@/http_url'
import Header from '@/components/header'
export default {
  components: {
    Header
  },
  data () {
    return {
      preYear: [],
      nowYear: [],
      nextYear: [],
      preYear2: [],
      nowYear2: [],
      nextYear2: [],
      // 彩色模块数据
      colorList: [
        {
          data: '',
          title: '流水(元)',
          class: 'cell-1'
        },
        {
          data: '',
          title: '实收(元)',
          class: 'cell-2'
        },
        {
          data: '',
          title: '成本(元)',
          class: 'cell-3'
        },
        {
          data: '',
          title: '毛利(元)',
          class: 'cell-4'
        }
      ],
      // 灰色模块数据
      wjamount: '',
      wjshuliang: 0,
      yjshuliang: 0,
      // 营业详情数据
      shishou: '',
      youmian: '',
      zhuoshu: 0,
      keliu: 0,
      zhuojun: '',
      renjun: '',
      ktl: '',
      szl: '',
      rx: '',
      px: '',
      wmds: 0,
      wmdj: '',
      // 客人自助数据
      zzdd: 0,
      ddl: '',
      zzjz: 0,
      jzl: '',
      // 异常监控数据
      tuicai: '',
      zengcai: '',
      guqing: 0,
      fanjie: 0,
      // 菜品四象限
      wtcp: 0,
      mxcp: 0,
      sgcp: 0,
      jncp: 0,
      // 堂食客人构成
      pkddzhanbi: '',
      hyddzhanbi: '',
      pkjezhanbi: '',
      hyjezhanbi: '',
      // 业务构成
      tsddzhanbi: '',
      wmddzhanbi: '',
      tsjezhanbi: '',
      wmjezhanbi: '',
      // 固定背景
      isFixedBg: false,
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
  created () {
    this.getColorData()
    this.getGrayData()
    this.getYingyeXiangqingData()
    this.getKerenZizhuData1()
    this.getKerenZizhuData2()
    this.getYichangJiankongData()
    this.getFourData()
    this.getTangshiKerenGouchengData()
    this.getYewuGouchengData()
  },
  mounted () {
    this.showRealIncome()
  },
  methods: {
    getColorData () {
      axios.get(httpUrl.getTotalData)
        .then(res => {
          if (res.data.errcode === 0) {
            this.colorList[0].data = res.data.res.liushui
            this.colorList[1].data = res.data.res.shishou
            this.colorList[2].data = res.data.res.chengben
            this.colorList[3].data = res.data.res.maoli
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    getGrayData () {
      axios.get(httpUrl.getYjWjDetails)
        .then(res => {
          if (res.data.errcode === 0) {
            this.wjamount = res.data.res.wjamount
            this.wjshuliang = res.data.res.wjshuliang
            this.yjshuliang = res.data.res.yjshuliang
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    getYingyeXiangqingData () {
      axios.get(httpUrl.getBusiCondition)
        .then(res => {
          if (res.data.errcode === 0) {
            this.shishou = res.data.res.shishou
            this.youmian = res.data.res.youmian
            this.zhuoshu = res.data.res.zhuoshu
            this.keliu = res.data.res.keliu
            this.zhuojun = res.data.res.zhuojun
            this.renjun = res.data.res.renjun
            this.ktl = res.data.res.ktl
            this.szl = res.data.res.szl
            this.rx = res.data.res.rx
            this.px = res.data.res.px
            this.wmds = res.data.res.wmds
            this.wmdj = res.data.res.wmdj
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    getKerenZizhuData1 () {
      axios.get(httpUrl.getZzddDetails)
        .then(res => {
          if (res.data.errcode === 0) {
            this.zzdd = res.data.res.zzdd
            this.ddl = res.data.res.ddl
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    getKerenZizhuData2 () {
      axios.get(httpUrl.getZzjzDetails)
        .then(res => {
          if (res.data.errcode === 0) {
            this.zzjz = res.data.res.zzjz
            this.jzl = res.data.res.jzl
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    getYichangJiankongData () {
      axios.get(httpUrl.getAbnormalDishes)
        .then(res => {
          if (res.data.errcode === 0) {
            this.tuicai = res.data.res.tuicai
            this.zengcai = res.data.res.zengcai
            this.guqing = res.data.res.guqing
            this.fanjie = res.data.res.fanjie
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    getFourData () {
      axios.get(httpUrl.getDish4qDetails)
        .then(res => {
          if (res.data.errcode === 0) {
            this.wtcp = res.data.res.wtcp
            this.mxcp = res.data.res.mxcp
            this.sgcp = res.data.res.sgcp
            this.jncp = res.data.res.jncp
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    getTangshiKerenGouchengData () {
      axios.get(httpUrl.getCustomerComposition)
        .then(res => {
          if (res.data.errcode === 0) {
            this.pkddzhanbi = res.data.res.pkddzhanbi
            this.hyddzhanbi = res.data.res.hyddzhanbi
            this.pkjezhanbi = res.data.res.pkjezhanbi
            this.hyjezhanbi = res.data.res.hyjezhanbi
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    getYewuGouchengData () {
      axios.get(httpUrl.getBusiComposition)
        .then(res => {
          if (res.data.errcode === 0) {
            this.tsddzhanbi = res.data.res.tsddzhanbi
            this.wmddzhanbi = res.data.res.wmddzhanbi
            this.tsjezhanbi = res.data.res.tsjezhanbi
            this.wmjezhanbi = res.data.res.wmjezhanbi
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    },
    setFixedBg (val) {
      this.isFixedBg = val
    },
    goColorInfo (item) {
      let params = {
        data: item.data,
        title: item.title,
        class: item.class
      }
      this.$router.push({
        name: 'colorInfo',
        query: params
      })
    },
    goColorInfoTab () {
      this.$router.push({name: 'colorInfoTab'})
    },
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
          right: '0',
				  // icon: 'rect',
					// itemWidth: 10,
					// itemHeight: 6,
			    // data:['去年完成','今年计划','今年完成'],
			   	textStyle: { // 图例文字的样式
            color: '#999999',
            // fontSize: 10
			    }
        },
        grid: {
          top: '33px',
          left: '1%',
          right: '10',
          bottom: '0',
          containLabel: true // 是否包含坐标轴的刻度标签
        },
        dataZoom: [
					{
				    type: 'inside',
				    zoomLock: true, // 锁定选择区域的大小，也就是说，只能平移，不能缩放
				    zoomOnMouseWheel: false, // 禁止鼠标拖动和触屏上下拖动
				    start: 0,
				    end: 22,
				    preventDefaultMouseMove: false,
				    filterMode: 'empty' //不会影响其他轴(y轴)的数据范围
					}
        ],
        xAxis: {
          type: 'category', // 坐标轴类型
          boundaryGap: false, // 坐标轴两边留白策略
          axisLabel:{
            interval:0, // 横轴信息全部显示
            textStyle: {
          		color: '#999999'
          	}
          },
          boundaryGap: false,
          axisTick: {
            show: false // 去掉刻度
          },
          splitLine: {
          	show: true,
          	lineStyle: {
          		type: 'dotted' // 分隔线的类型:solid dashed dotted
          	}
          },
          axisLine: { // X轴颜色
          	lineStyle: {
          		color: '#999999',
          	},
          },
          data: []
        },
        yAxis: {
          name: '单位:万元',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#bbb'
          },
          axisLine: { show: false },// 不显示y轴
        	type: 'value',
          axisLabel: {
            formatter: '{value}', // 不显示数值{value}
            textStyle: {
          		color: '#999999' // y轴颜色
          	}
          },
          axisTick:{
            show: false // 去掉刻度
          },
          splitLine: {
          	show: true,
          	lineStyle: {
          		type: 'dotted' // 分隔线的类型:solid dashed dotted
        		}
        	}
        },
        series: [
          {
            type: 'line',
            name: '去年完成',
            smooth: true,
            symbol: "circle",
            data: []
          },
          {
            type: 'line',
            name: '今年计划',
            smooth: true,
            symbol: "circle",
            data: []
          },
          {
            type: 'line',
            name: '今年完成',
            smooth: true,
            symbol: "circle",
            data: []
          }
        ]
      })
      axios.get(httpUrl.getTotalChartData)
        .then(res => {
          if (res.data.errcode === 0) {
            let pYear = res.data.res.shishou3last
            let nYear = res.data.res.shishou3
            let neYear = res.data.res.jsonArray
            for (let i=0;i<pYear.length;i++) {
              this.preYear.push(Number(pYear[i])/10000)
            }
            for (let j=0;j<nYear.length;j++) {
              this.nowYear.push(Number(nYear[j])/10000)
            }
            for (let k=0;k<neYear.length;k++) {
              this.nextYear.push(Number(neYear[k])/10000)
            }
            myChart.setOption({
              xAxis: {
                data: res.data.res.day
              },
              series: [
                { data: this.preYear },
                { data: this.nowYear },
                { data: this.nextYear }
              ]
            })
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
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
          right: '0',
				  // icon: 'rect',
					// itemWidth: 10,
					// itemHeight: 6,
			    // data:['去年完成','今年计划','今年完成'],
			   	textStyle: { // 图例文字的样式
            color: '#999999',
            // fontSize: 10
			    }
        },
        grid: {
          top: '33px',
          left: '1%',
          right: '10',
          bottom: '0',
          containLabel: true // 是否包含坐标轴的刻度标签
        },
        dataZoom: [
					{
				    type: 'inside',
				    zoomLock: true, // 锁定选择区域的大小，也就是说，只能平移，不能缩放
				    zoomOnMouseWheel: false, // 禁止鼠标拖动和触屏上下拖动
				    start: 0,
				    end: 22,
				    preventDefaultMouseMove: false,
				    filterMode: 'empty' //不会影响其他轴(y轴)的数据范围
					}
        ],
        xAxis: {
          type: 'category', // 坐标轴类型
          boundaryGap: false, // 坐标轴两边留白策略
          axisLabel: {
            interval: 0, // 横轴信息全部显示
            textStyle: {
          		color: '#999999'
          	}
          },
          boundaryGap: false,
          axisTick: {
            show: false // 去掉刻度
          },
          splitLine: {
          	show: true,
          	lineStyle: {
          		type: 'dotted' // 分隔线的类型:solid dashed dotted
          	}
          },
          axisLine: { // X轴颜色
          	lineStyle: {
          		color: '#999999',
          	},
          },
          data: []
        },
        yAxis: {
          name: '单位:万元',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#bbb'
          },
          axisLine: { show: false },// 不显示y轴
        	type: 'value',
          axisLabel: {
            formatter: '{value}', // 不显示数值{value}
            textStyle: {
          		color: '#999999' // y轴颜色
          	}
          },
          axisTick:{
            show: false // 去掉刻度
          },
          splitLine: {
          	show: true,
          	lineStyle: {
          		type: 'dotted' // 分隔线的类型:solid dashed dotted
        		}
        	}
        },
        series: [
          {
            type: 'line',
            name: '去年完成',
            smooth: true,
            symbol: "circle",
            data: []
          },
          {
            type: 'line',
            name: '今年计划',
            smooth: true,
            symbol: "circle",
            data: []
          },
          {
            type: 'line',
            name: '今年完成',
            smooth: true,
            symbol: "circle",
            data: []
          }
        ]
      })
      axios.get(httpUrl.getTotalChartData)
        .then(res => {
          if (res.data.errcode === 0) {
            let pYear = res.data.res.memberlast
            let nYear = res.data.res.member
            let neYear = res.data.res.jsonArray
            for (let i=0;i<pYear.length;i++) {
              this.preYear2.push(Number(pYear[i])/10000)
            }
            for (let j=0;j<nYear.length;j++) {
              this.nowYear2.push(Number(nYear[j])/10000)
            }
            for (let k=0;k<neYear.length;k++) {
              this.nextYear2.push(Number(neYear[k])/10000)
            }
            myChart.setOption({
              xAxis: {
                data: res.data.res.day
              },
              series: [
                { data: this.preYear2 },
                { data: this.nowYear2 },
                { data: this.nextYear2 }
              ]
            })
          } else {
            console.log(res.data.errmsg)
          }
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  /* 彩色数据模块样式 */
  .showColorData-two-col {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 80px;
    padding-bottom: 7px;
  }


  .table-two-col tr td {
    width: 50%;
    height: 100px;
    text-align: center;
    vertical-align: middle;
    position: relative;
  }
  .table-two-col tr td::after {
    content: '';
    height: 200%;
    width: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    transform: scale(.5);
    -webkit-transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: 0 0;
  }
  .table-two-col tr:nth-of-type(1) td::after {
    border-top: 1px solid #eeeeee;
  }
  .table-two-col tr td:nth-child(even)::after {
    border-right: none;
  }
  .table-two-col h2 {
    color: #3d3d3d;
    font-weight: normal;
  }
  .table-two-col p {
    color: #ababab;
    font-size: 14px;
  }
</style>
