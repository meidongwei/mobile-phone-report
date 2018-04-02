<template>
  <div v-if="isShow" class="store">
    <div class="store-left">
      <ul>
        <li v-for="(item, index) in typeOfMealList" :key="index">
          <a href="javascript:;"
            :class="{ active: isActive === item.id }"
            @click="handleChangeTypeOfMeal(index)">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="store-right">
      <div class="store-right-title">
        <label class="check-box">
          <input type="checkbox" :checked="isAllChecked()"
            @change="changeAllChecked($event)">全选
          <span class="publicInput checkboxInput"></span>
        </label>
      </div>
      <div class="store-right-item"
        v-for="(item, index) in storeList" :key="index">
        <div class="item-title">
          <label class="check-box">
            <input type="checkbox" :checked="isTitleChecked(item)"
              @change="changeTitleChecked(item, $event)">
            {{ item.title }}
            <span class="publicInput checkboxInput"></span>
          </label>
        </div>
        <ul>
          <li v-for="(item2, index) in item.list" :key="index">
            <label class="check-box">
              <input type="checkbox" v-model="item.selected"
                :value="item2.id">
              {{ item2.name }}
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <a href="javascript:;"
      class="btn btn-primary btn-fixed-bottom"
      @click="handleSelectStoreOK">确定</a>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: 2,
      typeOfMealList: [
        { id: 1, name: '品智中餐' },
        { id: 2, name: '品智快餐' },
        { id: 3, name: '品智正餐' },
        { id: 4, name: '品智晚餐' }
      ],
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
          selected: [3, 4],
          list: [
            { id: 1, name: '中餐1店' },
            { id: 2, name: '中餐2店' },
            { id: 3, name: '中餐3店' },
            { id: 4, name: '中餐4店' },
          ]
        }
      ]
    }
  },
  methods: {
    handleSelectStoreOK () {
      this.$emit('handleSelectStoreOK')
    },
    isTitleChecked (item) {
      return item.list.every((item2) => {
        return item.selected.indexOf(item2.id) != -1
      })
    },
    changeTitleChecked (item, event) {
      if (event.target.checked === true) {
        item.list.forEach((item2) => {
          item.selected.indexOf(item2.id) === -1 && item.selected.push(item2.id)
        })
      } else {
        item.selected = []
      }
    },
    isAllChecked () {
      return this.storeList.every((item) => {
        return item.selected.length === item.list.length
      })
    },
    changeAllChecked (event) {
      if (event.target.checked === true) {
        this.storeList.forEach((item) => {
          item.list.forEach((item2) => {
            item.selected.indexOf(item2.id) === -1 && item.selected.push(item2.id)
          })
        })
      } else {
        this.storeList.forEach((item) => {
          item.selected = []
        })
      }
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
  .store-right {
    width: 70vw;
    height: 100vh;
    overflow: scroll;
    padding-bottom: 50px;
    background-color: #f5f5f5;
  }
  .store .store-right-title {
    background-color: #fff;
  }
  .store .store-right-title .check-box {
    padding: 30px 15px 10px 15px;
  }
  .store .store-right-title:active {
    background-color: #ececec;
  }
  .store-right-item .item-title {
    font-size: 14px;
    color: #888888;
    font-weight: normal;
  }
  .store-right-item .item-title .check-box {
    padding: 10px 15px 10px 8px;
  }
  .store-right-item .item-title:active {
    background-color: #ececec;
  }
  .store-right-item ul {
    background-color: #fff;
  }
  .store-right-item ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    color: #525252;
  }
  .store-right-item ul li .check-box {
    padding: 10px 15px;
  }
  .store-right-item ul li:active {
    background-color: #ececec;
  }
  .store-right-item ul li::after {
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
  .store-right-item ul li:last-child::after {
    border: none;
  }


  /* 多选框、单选框美化样式 */
  .check-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .check-box input {
    display: none;
  }
  .check-box span {
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.2);
    position: relative;
    box-sizing: content-box;
  }
  .publicInput,
  .check-box input:checked + .publicInput:after {
    background-color: #20ae93;
    content: '';
    height: 12px;
    width: 12px;
    margin: 2px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .publicInput {
    margin: 0;
  }
  .checkboxInput,
  .check-box input:checked + .checkboxInput:after {
    border-radius: 0;
  }
  .radioInput,
  .check-box input:checked + .radioInput:after {
    border-radius: 100%;
  }









  /*  */
</style>
