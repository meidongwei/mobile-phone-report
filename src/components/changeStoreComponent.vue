<template>
  <div v-if="isShow" class="store">
    <div class="store-left">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <a href="javascript:;"
            :class="{ active: isActive === item.id }"
            @click="handleChangeTypeOfMeal(index)">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
    <Store :storeList="storeList"></Store>
    <a href="javascript:;"
      class="btn btn-primary btn-fixed-bottom"
      @click="handleSelectStoreOK">确定</a>
  </div>
</template>

<script>
import Store from '@/components/store'
export default {
  components: {
    Store
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    storeList () {
      for (let i=0;i<this.dataList.length;i++) {
        if (this.dataList[i].id === this.isActive) {
          return this.dataList[i].storeList
        }
      }
    }
  },
  data () {
    return {
      isActive: 1,
      dataList: [
        {
          id: 1,
          name: '品智中餐',
          storeList: [
            {
              title: '裕华区',
              selected: [1, 2, 3, 4],
              list: [
                { id: 1, name: '中餐1店' },
                { id: 2, name: '中餐2店' },
                { id: 3, name: '中餐3店' },
                { id: 4, name: '中餐4店' },
              ]
            },
            {
              title: '长安区',
              selected: [1, 2, 3, 4],
              list: [
                { id: 1, name: '中餐1店' },
                { id: 2, name: '中餐2店' },
                { id: 3, name: '中餐3店' },
                { id: 4, name: '中餐4店' },
              ]
            },
            {
              title: '开发区',
              selected: [1, 2],
              list: [
                { id: 1, name: '中餐1店' },
                { id: 2, name: '中餐2店' },
                { id: 3, name: '中餐3店' },
                { id: 4, name: '中餐4店' },
              ]
            }
          ]
        },
        {
          id: 2,
          name: '品智快餐',
          storeList: [
            {
              title: '开发区',
              selected: [2],
              list: [
                { id: 1, name: '快餐1店' },
                { id: 2, name: '快餐2店' },
                { id: 3, name: '快餐3店' }
              ]
            },
            {
              title: '栾城区',
              selected: [],
              list: [
                { id: 1, name: '快餐1店' },
                { id: 2, name: '快餐2店' }
              ]
            }
          ]
        },
        {
          id: 3,
          name: '品智正餐',
          storeList: [
            {
              title: '裕华区',
              selected: [1, 2, 3, 4],
              list: [
                { id: 1, name: '正餐1店' },
                { id: 2, name: '正餐2店' },
                { id: 3, name: '正餐3店' },
                { id: 4, name: '正餐4店' },
              ]
            },
            {
              title: '桥西区',
              selected: [1],
              list: [
                { id: 1, name: '正餐1店' }
              ]
            }
          ]
        },
        {
          id: 4,
          name: '品智晚餐',
          storeList: [
            {
              title: '裕华区',
              selected: [1, 2, 3],
              list: [
                { id: 1, name: '晚餐1店' },
                { id: 2, name: '晚餐2店' },
                { id: 3, name: '晚餐3店' },
                { id: 4, name: '晚餐4店' },
              ]
            },
            {
              title: '长安区',
              selected: [3],
              list: [
                { id: 1, name: '晚餐1店' },
                { id: 2, name: '晚餐2店' },
                { id: 3, name: '晚餐3店' },
                { id: 4, name: '晚餐4店' },
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.handleSelectStoreOK()
  },
  methods: {
    handleSelectStoreOK () {
      let selectedList = []
      for (let i=0;i<this.dataList.length;i++) {
        if (this.dataList[i].id === this.isActive) {
          // 判断当前类别中是否都被选中，如果是，则显示
          // 当前类别 title + '全部'，例如:品智中餐全部
          let num = 0
          let total = 0
          this.dataList[i].storeList.forEach((item) => {
            num = num + item.selected.length
            total = total + item.list.length
          })
          if (num === total) {
            selectedList.push(this.dataList[i].name + '全部')
          } else {
            // 如果当前类别中没有全选，则判断每个区是否被全选，如果是，
            // 则显示区名，例如：裕华区；如果否，则显示每个被选择的店名
            this.dataList[i].storeList.forEach((item) => {
              if (item.selected.length === item.list.length) {
                selectedList.push(item.title)
              } else {
                item.selected.forEach((selItem) => {
                  for (let i=0;i<item.list.length;i++) {
                    if (item.list[i].id === selItem) {
                      selectedList.push(item.list[i].name)
                    }
                  }
                })
              }
            })
          }
        }
      }
      let obj = {
        selectedList: selectedList
      }
      this.$emit('handleSelectStoreOK', obj)
    },
    handleChangeTypeOfMeal (index) {
      this.isActive = index + 1
    }
  }
}
</script>

<style scoped>
  .store {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    z-index: 999999999;
    display: flex;
  }
  .store-left a {
    color: #525252;
    display: block;
    padding: 20px 15px;
    font-size: 16px;
    position: relative;
  }
  .store-left a.active {
    color: #20ae93;
  }
  .store-left a:active {
    background-color: #ececec;
  }
  .store-left a::after {
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
  .store-left {
    width: 30vw;
    position: relative;
  }
  .store-left::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    border-right: 1px solid #e5e5e5;
    color: #e5e5e5;
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
    z-index: 2;
  }
</style>
