<template>
  <div>
    <router-view/>
    <div class="menuBar">
      <a href="javascript:;" v-for="(item, index) in menuBarList"
        @click="goPage(index)" :key="item.id" class="menu"
        :class="{active: activeName === item.id}">
        <img :src="item.img" alt="icon">
        <span>{{ item.name }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 1,
      menuBarList: [
        {
          id: 1,
          name: '门店绩效',
          url: 'jixiao',
          img: require('../assets/jixiao1.svg')
        },
        {
          id: 2,
          name: '报表查询',
          url: 'baobiao',
          img: require('../assets/baobiao2.svg')
        },
        {
          id: 3,
          name: '当前用户',
          url: 'yonghu',
          img: require('../assets/yonghu2.svg')
        }
      ]
    }
  },
  methods: {
    goPage (index) {
      this.$router.push({ name: this.menuBarList[index].url })
      for (let i=0;i<this.menuBarList.length;i++) {
        this.menuBarList[i].img = require('../assets/'+ this.menuBarList[i].url +'2.svg')
        if (this.menuBarList[i].id === index + 1) {
          this.menuBarList[i].img = require('../assets/'+ this.menuBarList[i].url +'1.svg')
          this.activeName = this.menuBarList[i].id
        }
      }
    },
    // 当前页刷新后，状态不变
    activeNameOfList () {
      for (let i=0;i<this.menuBarList.length;i++) {
        this.menuBarList[i].img = require('../assets/'+ this.menuBarList[i].url +'2.svg')
        if (this.$route.name === this.menuBarList[i].url) {
          this.menuBarList[i].img = require('../assets/'+ this.menuBarList[i].url +'1.svg')
          this.activeName = this.menuBarList[i].id
        }
      }
    }
  },
  mounted () {
    this.activeNameOfList()
  },
  watch: {
    '$route': 'activeNameOfList'
  }
}
</script>

<style>
  .active span {
    color: #20ae93;
  }
  /* 区域块样式 */
  .segment {
    padding: 15px;
    background-color: #fff;
    margin-bottom: 15px;
  }
  /* 区域块标题样式 */
  .page-header {
    padding-left: 8px;
    margin-left: 15px;
    margin-bottom: 8px;
    font-weight: normal;
    color: #8c8c8c;
    position: relative;
    font-size: 14px;
  }
  .page-header::before {
    content: '';
    width: 3px;
    height: 15px;
    background-color: #20ae93;
    position: absolute;
    left: 0;
    top: 2px;
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
    color: #ababab;
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

  /* 列表相关样式 */
  .list-cells {
    background-color: #fff;
    padding: 0;
    margin-top: 15px;
    position: relative;
    font-size: 17px;
  }
  .list-cells::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #e5e5e5;
    color: #e5e5e5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index: 2;
  }
  .list-cell {
    padding: 10px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #525252;
  }
  .list-cell:active {
    background-color: #ececec;
  }
  .list-cell::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
    color: #e5e5e5;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index: 2;
  }
  .list-cell-bd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    font-size: 16px;
  }
  .list-cell-ft {
    position: relative;
  }
  .list-cell-ft::after {
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
    right: 2px;
  }
  .list-cell-btn {
    text-align: center;
  }
  .list-cells-input .list-cell {
    padding: 0;
  }
  .list-cells-input .list-cell:active {
    background-color: transparent;
  }
  .list-cells-input .list-cell .list-cell-bd {
    padding: 10px 15px;
    width: 30%;
  }
  .list-cell-input {
    width: 70%;
    height: 30px;
  }
  .list-cell-input input {
    border: none;
    height: 100%;
    width: 100%;
    font-size: 16px;
    padding-left: 5px;
  }
</style>
