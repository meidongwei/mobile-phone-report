<template>
  <div>
    <div class="header">
      <div class="header-1">
        <div class="title">
          {{ selectedStore }}
        </div>
        <a href="javascript:;" class="changeStore" @click="handleChangeStore">
          换店 <span class="list-cell-ft"></span>
        </a>
      </div>
      <div class="header-2">
        <div class="dateControl">
          <div class="btn-dateControl btn-dateControl-left list-cell-ft"
            @click="previous"></div>
          <div class="content">{{ showDate }}</div>
          <div class="btn-dateControl btn-dateControl-right list-cell-ft"
            @click="next"></div>
        </div>
        <div class="changeDate" @click="handleChangeDate">
          {{ dateTitle }}
        </div>
      </div>
    </div>

    <ChangeStoreComponent :isShow="isShowStore"
      @handleSelectStoreOK="handleSelectStoreOK">
    </ChangeStoreComponent>

    <ChangeDateComponent :isShow="isShowDateComponent"
      @handleSelectDateOK="handleSelectDateOK">
    </ChangeDateComponent>

  </div>
</template>

<script>
import ChangeStoreComponent from '@/components/changeStoreComponent'
import ChangeDateComponent from '@/components/changeDateComponent'
export default {
  components: {
    ChangeStoreComponent,
    ChangeDateComponent
  },
  data () {
    return {
      isShowStore: false,
      isShowDateComponent: false,
      selectedStore: '',
      y1: '', // 起始年
      y2: '', // 结束年
      m1: '', // 起始月
      m2: '', // 结束月
      d1: '', // 起始日
      d2: '', // 结束日
      all: '', // 全部
      dd: '' // 星期
    }
  },
  computed: {
    dateTitle () {
      let dateTitle = this.$store.state.selectedTitle
      if (dateTitle === 1) {
        return '日汇总'
      } else if (dateTitle === 2) {
        return '周汇总'
      } else if (dateTitle === 3) {
        return '月汇总'
      } else if (dateTitle === 4) {
        return '年汇总'
      }
    },
    showDate () {
      let selTitle = this.$store.state.selectedTitle
      if (selTitle === 2) {
        let u = this.$store.state.showDate
        let m1 = u.split('/')[0].split('-')[1]
        let d1 = u.split('/')[0].split('-')[2]
        let m2 = u.split('/')[1].split('-')[1]
        let d2 = u.split('/')[1].split('-')[2]
        return m1 + '-' + d1 + '/' + m2 + '-' + d2
      } else {
        return this.$store.state.showDate
      }
    }
  },
  created () {
    this.handleAutoChangeDate()
  },
  methods: {
    // 初始化页面时自动显示（日汇总/周汇总/月汇总/年汇总）
    handleAutoChangeDate () {
      let selTitle = this.$store.state.selectedTitle
      if (selTitle === 1) {
        this.$store.commit('showDate111')
      } else if (selTitle === 2) {
        this.$store.commit('showWeek111')
      } else if (selTitle === 3) {
        this.$store.commit('showMonth111')
      } else if (selTitle === 4) {
        this.$store.commit('showYear111')
      }
    },
    handleChangeStore () {
      this.isShowDateComponent = false
      this.isShowStore = true
      this.$emit('setFixedBg', true)
    },
    handleSelectStoreOK (obj) {
      this.selectedStore = obj.selectedList.toString()
      this.isShowStore = false
      this.$emit('setFixedBg', false)
    },
    handleChangeDate () {
      if (this.isShowDateComponent === false) {
        this.isShowDateComponent = true
        this.$emit('setFixedBg', true)
      } else {
        this.isShowDateComponent = false
        this.$emit('setFixedBg', false)
      }
    },
    handleSelectDateOK () {
      this.isShowDateComponent = false
      this.$emit('setFixedBg', false)
    },
    // 获取某年某月的天数
    handleGetNumOfMonth (year, month) {
      let d = new Date(year, month, 0)
      return d.getDate()
    },
    previous () {
      let dateTitle = this.$store.state.selectedTitle
      if (dateTitle === 1) {
        // **********
        // 日汇总
        // **********
        // 获取数据源
        let date = this.$store.state.showDate
        // 当天/当月/当年（number）
        let NowD = Number(date.split('-')[2].split(' ')[0])
        let NowMon = Number(date.split('-')[1])
        let NowYear = Number(date.split('-')[0])
        // 日期前一天
        if (NowD === 1) {
          if (NowMon === 1) {
            this.y1 = NowYear - 1
            this.m1 = 12
            this.d1 = this.handleGetNumOfMonth(this.y1, this.m1)
            this.d1 = this.d1 < 10 ? '0' + this.d1 : this.d1
          } else {
            this.y1 = NowYear
            this.m1 = NowMon - 1
            this.m1 = this.m1 < 10 ? '0' + this.m1 : this.m1
            this.d1 = this.handleGetNumOfMonth(this.y1, this.m1)
            this.d1 = this.d1 < 10 ? '0' + this.d1 : this.d1
          }
        } else {
          this.y1 = NowYear
          this.m1 = NowMon
          this.m1 = this.m1 < 10 ? '0' + this.m1 : this.m1
          this.d1 = NowD - 1
          this.d1 = this.d1 < 10 ? '0' + this.d1 : this.d1
        }
        // 星期前一天
        this.dd = date.split('-')[2].split(' ')[1].split('')[2]
        if (this.dd === '一') {
          this.dd = '日'
        } else if (this.dd === '二') {
          this.dd = '一'
        } else if (this.dd === '三') {
          this.dd = '二'
        } else if (this.dd === '四') {
          this.dd = '三'
        } else if (this.dd === '五') {
          this.dd = '四'
        } else if (this.dd === '六') {
          this.dd = '五'
        } else if (this.dd === '日') {
          this.dd = '六'
        }
        this.all = this.y1 + '-' + this.m1 + '-' +
          this.d1 + ' 星期' + this.dd
        this.$store.state.showDate = this.all
      } else if (dateTitle === 2) {
        // **********
        // 周汇总
        // **********
        // 获取数据源
        let date = this.$store.state.showDate
        // 截取当前周的一些信息
        let startYear = Number(date.split('/')[0].split('-')[0])
        let endYear = Number(date.split('/')[1].split('-')[0])
        let startMon = Number(date.split('/')[0].split('-')[1])
        let endMon = Number(date.split('/')[1].split('-')[1])
        let a = Number(date.split('/')[0].split('-')[2])
        let b = Number(date.split('/')[1].split('-')[2])

        if (a > b) {
          // 本周跨月，上周上一个月
          this.y1 = startYear
          this.y2 = startYear
          this.m1 = startMon
          this.m2 = startMon
          this.d1 = a - 7
          this.d2 = a - 1

        } else {
          if (a === 1) {
            // 本周在一个月，上周在上一个月（考虑跨年）
            if (startMon === 1) {
              this.y1 = startYear - 1
              this.y2 = endYear - 1
              this.m1 = 12
              this.m2 = 12
              this.d1 = 25
              this.d2 = 31

            } else {
              this.y1 = startYear
              this.y2 = endYear
              this.m1 = startMon - 1
              this.m2 = endMon - 1
              this.d1 = this.handleGetNumOfMonth(this.y1, this.m1) - 6
              this.d2 = this.handleGetNumOfMonth(this.y1, this.m1)

            }
          } else if (a - 7 <= 0) {
            // 本周在一个月，上周跨月（考虑跨年）
            if (startMon === 1) {
              this.y1 = startYear - 1
              this.y2 = endYear
              this.m1 = 12
              this.m2 = endMon
              this.d1 = 31 - Math.abs(a-7)
              this.d2 = b - 7

            } else {
              this.y1 = startYear
              this.y2 = endYear
              this.m1 = startMon - 1
              this.m2 = endMon
              this.d1 = this.handleGetNumOfMonth(this.y1, this.m1) - Math.abs(a-7)
              this.d2 = b - 7

            }
          } else {
            // 本周上周都在一个月（不考虑跨年）
            this.y1 = startYear
            this.y2 = endYear
            this.m1 = startMon
            this.m2 = endMon
            this.d1 = a - 7
            this.d2 = b - 7

          }
        }
        this.d1 = this.d1 < 10 ? '0' + this.d1 : this.d1
        this.d2 = this.d2 < 10 ? '0' + this.d2 : this.d2
        this.m1 = this.m1 < 10 ? '0' + this.m1 : this.m1
        this.m2 = this.m2 < 10 ? '0' + this.m2 : this.m2
        this.all = this.y1 + '-' + this.m1 + '-' + this.d1 +
          '/' + this.y2 + '-' + this.m2 + '-' + this.d2
        this.$store.state.showDate = this.all
      } else if (dateTitle === 3) {
        // **********
        // 月汇总
        // **********
        // 获取数据源
        let date = this.$store.state.showDate
        // 获取当前年月
        let NowYear = Number(date.split('-')[0])
        let NowMon = Number(date.split('-')[1])

        if (NowMon === 1) {
          this.y1 = NowYear - 1
          this.m1 = 12
        } else {
          this.y1 = NowYear
          this.m1 = NowMon - 1
        }
        this.m1 = this.m1 < 10 ? '0' + this.m1 : this.m1
        this.$store.state.showDate = this.y1 + '-' + this.m1
      } else {
        // **********
        // 年汇总
        // **********
        // 获取数据源
        let date = this.$store.state.showDate
        this.$store.state.showDate = Number(date) - 1
      }
    },

    next () {
      let dateTitle = this.$store.state.selectedTitle
      if (dateTitle === 1) {
        // **********
        // 日汇总
        // **********
        // 获取数据源
        let date = this.$store.state.showDate
        // 当天/当月/当年（number）
        let NowD = Number(date.split('-')[2].split(' ')[0])
        let NowMon = Number(date.split('-')[1])
        let NowYear = Number(date.split('-')[0])

        // 判断是否为今天，如果是，则不可点击
        let mm = new Date()
        let D = mm.getDate()
        let M = mm.getMonth() + 1
        let Y = mm.getFullYear()
        if (D === NowD && M === NowMon && Y === NowYear) {
          return
        }

        // 日期后一天
        let d = this.handleGetNumOfMonth(NowYear, NowMon)
        if (NowD === d) {
          // 当天日期等于当月最后一天
          if (NowMon === 12) {
            // 当月份为12月的时候
            this.y1 = NowYear + 1
            this.m1 = 1
            this.d1 = 1
          } else {
            this.y1 = NowYear
            this.m1 = NowMon + 1
            this.d1 = 1
          }
        } else {
          this.y1 = NowYear
          this.m1 = NowMon
          this.d1 = NowD + 1
        }

        // 星期后一天
        this.dd = date.split('-')[2].split(' ')[1].split('')[2]
        if (this.dd === '一') {
          this.dd = '二'
        } else if (this.dd === '二') {
          this.dd = '三'
        } else if (this.dd === '三') {
          this.dd = '四'
        } else if (this.dd === '四') {
          this.dd = '五'
        } else if (this.dd === '五') {
          this.dd = '六'
        } else if (this.dd === '六') {
          this.dd = '日'
        } else if (this.dd === '日') {
          this.dd = '一'
        }

        this.m1 = this.m1 < 10 ? '0' + this.m1 : this.m1
        this.d1 = this.d1 < 10 ? '0' + this.d1 : this.d1
        this.all = this.y1 + '-' + this.m1 + '-' +
          this.d1 + ' 星期' + this.dd
        this.$store.state.showDate = this.all
      } else if (dateTitle === 2) {
        // **********
        // 周汇总
        // **********
        // 获取数据源
        let date = this.$store.state.showDate
        // 截取当前周的一些信息
        let startYear = Number(date.split('/')[0].split('-')[0])
        let endYear = Number(date.split('/')[1].split('-')[0])
        let startMon = Number(date.split('/')[0].split('-')[1])
        let endMon = Number(date.split('/')[1].split('-')[1])
        let a = Number(date.split('/')[0].split('-')[2])
        let b = Number(date.split('/')[1].split('-')[2])

        // 判断是否为当天所在周，如果是，则不可点击
        this.$store.commit('getWeekDay')
        if (this.$store.state.linshi === date) {
          return
        }

        if (a > b) {
          // 本周跨月，下周下一个月
          // 04-30/05-06
          this.y1 = endYear
          this.y2 = endYear
          this.m1 = endMon
          this.m2 = endMon
          this.d1 = b + 1
          this.d2 = b + 7

        } else {
          let numOfMon = this.handleGetNumOfMonth(endYear, endMon)
          if (b === numOfMon) {
            // 本周在一个月，下周在下一个月（考虑跨年）
            if (endMon === 12) {
              this.y1 = startYear + 1
              this.y2 = endYear + 1
              this.m1 = 1
              this.m2 = 1
              this.d1 = 1
              this.d2 = 7

            } else {
              this.y1 = startYear
              this.y2 = endYear
              this.m1 = startMon + 1
              this.m2 = endMon + 1
              this.d1 = 1
              this.d2 = 7

            }
          } else if (b + 7 >= 31) {
            // 本周在一个月，下周跨月（考虑跨年）
            if (endMon === 12) {
              this.y1 = startYear
              this.y2 = endYear + 1
              this.m1 = 12
              this.m2 = 1
              this.d1 = a + 7
              this.d2 = a + 7 + 6 - 31

            } else {
              this.y1 = startYear
              this.y2 = endYear
              this.m1 = startMon
              this.m2 = endMon + 1
              this.d1 = a + 7
              this.d2 = a + 7 + 6 -
                this.handleGetNumOfMonth(this.y1, this.m1)

            }
          } else {
            // 本周下周都在一个月（不考虑跨年）
            this.y1 = startYear
            this.y2 = endYear
            this.m1 = startMon
            this.m2 = endMon
            this.d1 = a + 7
            this.d2 = b + 7

          }
        }
        this.d1 = this.d1 < 10 ? '0' + this.d1 : this.d1
        this.d2 = this.d2 < 10 ? '0' + this.d2 : this.d2
        this.m1 = this.m1 < 10 ? '0' + this.m1 : this.m1
        this.m2 = this.m2 < 10 ? '0' + this.m2 : this.m2
        this.all = this.y1 + '-' + this.m1 + '-' + this.d1 +
          '/' + this.y2 + '-' + this.m2 + '-' + this.d2
        this.$store.state.showDate = this.all

      } else if (dateTitle === 3) {
        // **********
        // 月汇总
        // **********
        // 获取数据源
        let date = this.$store.state.showDate
        // 获取当前年月
        let NowYear = Number(date.split('-')[0])
        let NowMon = Number(date.split('-')[1])

        // 判断是否为当年当月，如果是，则不可点击
        let mm = new Date()
        let M = mm.getMonth() + 1
        let Y = mm.getFullYear()
        if (M === NowMon && Y === NowYear) {
          return
        }

        if (NowMon === 12) {
          this.y1 = NowYear + 1
          this.m1 = 1
        } else {
          this.y1 = NowYear
          this.m1 = NowMon + 1
        }
        this.m1 = this.m1 < 10 ? '0' + this.m1 : this.m1
        this.$store.state.showDate = this.y1 + '-' + this.m1

      } else {
        // **********
        // 年汇总
        // **********
        // 获取数据源
        let date = this.$store.state.showDate

        // 判断是否为当年，如果是，则不可点击
        let mm = new Date()
        let Y = mm.getFullYear()
        if (Y === date) {
          return
        }
        this.$store.state.showDate = Number(date) + 1

      }
    }
  }
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999999;
    box-shadow: 1px 1px 3px #c7c7c7;
  }
  .header-1,
  .header-2 {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #525252;
  }
  .header-1 {
    background-color: #fff;
    padding: 0 15px;
  }
  .header-1 .title {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .changeStore {
    color: #20ae93;
  }
  .changeStore .list-cell-ft {
    display: flex;
    width: 48px;
    position: relative;
  }
  .changeStore .list-cell-ft::after {
    content: '';
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #20ae93;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
    transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
    position: absolute;
    top: 50%;
    margin-top: -16px;
    right: 2px;
  }
  .header-2 {
    background-color: #f2f2f2;
  }
  .dateControl {
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid #e3e3e3;
  }
  .dateControl .btn-dateControl {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18%;
  }
  .dateControl .btn-dateControl:active {
    background-color: #ececec;
  }
  .dateControl .list-cell-ft {
    position: relative;
  }
  .dateControl .list-cell-ft::after {
    content: '';
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 15px;
  }
  .dateControl .btn-dateControl-left::after {
    -webkit-transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
    transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
    left: 15px;
  }
  .changeDate {
    padding: 0 15px;
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    cursor: pointer;
  }
  .changeDate:active {
    background-color: #ececec;
  }
</style>
