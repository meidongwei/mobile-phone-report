<template>
  <div :class="{fixedBg: isFixedBg}">
    <Header @setFixedBg="setFixedBg"></Header>
    <div class="segment showColorData-one-col"
      style="margin-bottom:0;">
      <div class="cell cell-1">
        <div>
          <h2>81190.<small>23</small></h2>
          <p>流水(元)</p>
        </div>
      </div>
      <!-- echarts -->
      <div style="height:300px;width:100%;background-color:#acacac;">
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
      isFixedBg: false
    }
  },
  methods: {
    setFixedBg (val) {
      this.isFixedBg = val
    }
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
