<template>
  <div>
    <div class="header">
      <div class="header-1">
        <div class="title">
          中餐1店
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
      isShowDateComponent: false
    }
  },
  computed: {
    dateTitle () {
      let dateTitle = this.$store.state.showDateTitle
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
      let date = new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let day = date.getDay()
      let _day = this.changeWeek(day)
      // 本周第一天
      let start = Number(d) - day + 1
      start = start < 10 ? '0' + start : start
      // 本周最后一天
      let end = Number(d) + (6 - day)
      end = end < 10 ? '0' + end : end
      // 04-02/04-07
      let showWeek = m + '-' + start + '/' + m + '-' + end

      if (this.$store.state.showDate === '1') {
        return y + '-' + m + '-' + d + ' 星期' + _day
      } else if (this.$store.state.showDate === '2') {
        return showWeek
      } else if (this.$store.state.showDate === '3') {
        return y + '-' + m
      } else if (this.$store.state.showDate === '4') {
        return y
      }

    }
  },
  methods: {
    // 转换星期方法
    changeWeek (day) {
      if (day === 1) {
        return '一'
      } else if (day === 2) {
        return '二'
      } else if (day === 3) {
       return '三'
      } else if (day === 4) {
        return '四'
      } else if (day === 5) {
        return '五'
      } else if (day === 6) {
        return '六'
      } else if (day === 7) {
        return '日'
      }
    },
    handleChangeStore () {
      // 关闭日期组件 isShowDateComponent
      this.isShowDateComponent = false
      this.isShowStore = true
      this.$emit('setFixedBg', true)
    },
    handleSelectStoreOK () {
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
    previous () {
      let date = new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let day = date.getDay()
      let _day = this.changeWeek(day)

      // 本周第一天
      let start = Number(d) - day + 1
      start = start < 10 ? '0' + start : start
      // 本周最后一天
      let end = Number(d) + (6 - day)
      end = end < 10 ? '0' + end : end
      // 04-02/04-07
      let showWeek = m + '-' + start + '/' + m + '-' + end

      // 日期前一天
      let preD = date.getDate() - 1
      preD = preD < 10 ? ('0' + preD) : preD
      // 星期前一天
      let preDay
      if (day === 1) {
        preDay = this.changeWeek(7)
      } else {
        preDay = this.changeWeek(day - 1)
      }


      let dateTitle = this.$store.state.showDateTitle
      if (dateTitle === 1) {
        console.log(y + '-' + m + '-' + preD + ' 星期' + preDay)
      }
    },
    next () {
      console.log(222)
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
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -16px;
    right: 2px;
  }
  .header-2 {
    background-color: #f2f2f2;
  }
  .dateControl {
    padding-left: 15px;
    padding-right: 15px;
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
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 17px;
  }
  .dateControl .btn-dateControl-left::after {
    -webkit-transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
    transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
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
