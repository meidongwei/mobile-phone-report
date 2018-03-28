<template>
  <div>
    <router-view/>
    <div class="menuBar">
      <div v-for="(item, index) in menuBarList"
        @click="goPage(index)" :key="item.id"
        class="menu">
        <img :src="item.imgUrl" alt="icon">
        <span :style="`color: ${item.color}`">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuBarList: [
        {
          id: 1,
          name: '门店绩效',
          val: 'jixiao',
          imgUrl: require('../assets/jixiao1.svg'),
          color: '#20ae93'
        },
        {
          id: 2,
          name: '报表查询',
          val: 'baobiao',
          imgUrl: require('../assets/baobiao2.svg'),
          color: '#ababab'
        },
        {
          id: 3,
          name: '当前用户',
          val: 'geren',
          imgUrl: require('../assets/geren2.svg'),
          color: '#ababab'
        }
      ]
    }
  },
  methods: {
    goPage (index) {
      for (let i=0;i<this.menuBarList.length;i++) {
        this.menuBarList[i].imgUrl = require('../assets/'+ this.menuBarList[i].val +'2.svg')
        this.menuBarList[i].color = '#ababab'
        if (this.menuBarList[i].id === index + 1) {
          this.menuBarList[i].imgUrl = require('../assets/'+ this.menuBarList[i].val +'1.svg')
          this.menuBarList[i].color = '#20ae93'
        }
      }
    }
  }
}
</script>

<style>
  /* 区域块样式 */
  .segment {
    padding: 15px;
    background-color: #fff;
    margin-bottom: 15px;
  }
  /* 区域块标题样式 */
  .page-header {
    border-left: 3px solid #20ae93;
    padding-left: 8px;
    margin-left: 15px;
    margin-bottom: 8px;
    font-weight: normal;
    color: #8c8c8c;
  }
  .page-header-icon {
    display: flex;
    justify-content: space-between;
  }
  .page-header-icon .setting {
    margin-right: 15px;
  }
  /* 按钮导航条样式 */
  .menuBar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    height: 50px;
    display: flex;
    border-top: 1px solid #f5f5f5;
    z-index: 99999999;
  }
  .menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu > img {
    height: 20px;
    margin: 8px 0 4px 0;
  }
  .menu > span {
    font-size: 12px;
  }
</style>
