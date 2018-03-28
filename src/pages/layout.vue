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
          val: 'yonghu',
          imgUrl: require('../assets/yonghu2.svg'),
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

          this.$router.push({ name: this.menuBarList[i].val })
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
    align-items: center;
  }
  .setting {
    margin-right: 15px;
    height: 18px;
  }
  .setting img {
    height: 100%;
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
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table tr td {
    width: 50%;
    height: 100px;
    text-align: center;
    vertical-align: middle;
    position: relative;
  }
  .table tr td::after {
    content: '';
    height: 200%;
    width: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    transform: scale(.5);
    -webkit-transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: 0 0;
  }
  .table tr:nth-of-type(1) td::after {
    border-top: 1px solid #eeeeee;
  }
  .table tr td:nth-child(even)::after {
    border-right: none;
  }
  .table h2 {
    color: #3d3d3d;
    font-weight: normal;
  }
  .table p {
    color: #ababab;
    font-size: 14px;
  }
</style>
