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
        if (this.$route.name === this.menuBarList[i].url) {
          this.menuBarList[i].img = require('../assets/'+ this.menuBarList[i].url +'1.svg')
          this.activeName = this.menuBarList[i].id
        }
      }
    }
  },
  mounted () {
    this.activeNameOfList()
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
</style>
