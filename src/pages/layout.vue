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
</style>
