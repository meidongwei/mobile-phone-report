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
        <button class="btn active">营业实收</button>
        <button class="btn">就餐人数</button>
      </div>
      <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: '单位:万元',
          textStyle: {
            color: '#aaaaaa',
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        tooltip: {
         trigger: 'axis'
        },
        legend: {
          right: '0',
          data:['去年完成','今年计划','今年完成']
        },
        grid: {
          top: '39px',
          left: '0',
          right: '3%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '去年完成',
            type: 'line',
            data: [125, 250, 590, 750, 580, 750, 600, 528, 522, 528, 600, 700]
          },
          {
            name: '今年计划',
            type: 'line',
            data: [35, 130, 280, 250, 380, 430, 400, 328, 422, 328, 290, 100]
          },
          {
            name: '今年完成',
            type: 'line',
            data: [15, 30, 100, 220, 280, 250, 290, 228, 222, 108, 20, 0]
          }
        ]
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
