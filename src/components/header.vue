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
          <div class="btn-dateControl btn-dateControl-left list-cell-ft"></div>
          <div class="content">2018-03-29 星期四</div>
          <div class="btn-dateControl btn-dateControl-right list-cell-ft"></div>
        </div>
        <div class="changeDate" @click="handleChangeDate">
          {{ this.$store.state.changeDate }}
        </div>
      </div>
    </div>

    <Store :isShow="isShowStore"
      @handleSelectStoreOK="handleSelectStoreOK">
    </Store>

    <ChangeDateComponent :isShow="isShowDateComponent"
      @handleSelectDateOK="handleSelectDateOK">
    </ChangeDateComponent>

  </div>
</template>

<script>
import Store from '@/components/store'
import ChangeDateComponent from '@/components/changeDateComponent'
export default {
  components: {
    Store,
    ChangeDateComponent
  },
  data () {
    return {
      isShowStore: false,
      isShowDateComponent: false
    }
  },
  methods: {
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
    right: 22px;
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
