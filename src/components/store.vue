<template>
  <div v-if="isShow" class="store">
    <div class="store-left">
      <ul>
        <li><a href="javascript:;">品智中餐</a></li>
        <li><a href="javascript:;">品智快餐</a></li>
        <li><a href="javascript:;">品智正餐</a></li>
        <li><a href="javascript:;">Marzano</a></li>
      </ul>
    </div>
    <div class="store-right">
      <div class="store-right-title">
        <h4>全选</h4>
        <input type="checkbox">
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>裕华区</h5>
          <input type="checkbox">
        </div>
        <ul>
          <li>
            中餐1店
            <input type="checkbox">
          </li>
          <li>
            中餐2店
            <input type="checkbox">
          </li>
          <li>
            中餐3店
            <input type="checkbox">
          </li>
          <li>
            中餐10店
            <input type="checkbox">
          </li>
        </ul>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>裕华区</h5>
          <input type="checkbox">
        </div>
        <ul>
          <li>
            中餐1店
            <input type="checkbox">
          </li>
          <li>
            中餐2店
            <input type="checkbox">
          </li>
          <li>
            中餐3店
            <input type="checkbox">
          </li>
          <li>
            中餐10店
            <input type="checkbox">
          </li>
        </ul>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>裕华区</h5>
          <input type="checkbox">
        </div>
        <ul>
          <li>
            中餐1店
            <input type="checkbox">
          </li>
          <li>
            中餐2店
            <input type="checkbox">
          </li>
          <li>
            中餐3店
            <input type="checkbox">
          </li>
          <li>
            中餐10店
            <input type="checkbox">
          </li>
        </ul>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>裕华区</h5>
          <input type="checkbox">
        </div>
        <ul>
          <li>
            中餐1店
            <input type="checkbox">
          </li>
          <li>
            中餐2店
            <input type="checkbox">
          </li>
          <li>
            中餐3店
            <input type="checkbox">
          </li>
          <li>
            中餐10店
            <input type="checkbox">
          </li>
        </ul>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>裕华区</h5>
          <input type="checkbox">
        </div>
        <ul>
          <li>
            中餐1店
            <input type="checkbox">
          </li>
          <li>
            中餐2店
            <input type="checkbox">
          </li>
          <li>
            中餐3店
            <input type="checkbox">
          </li>
          <li>
            中餐10店
            <input type="checkbox">
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
      aa: false
    }
  },
  methods: {
    handleSelectStoreOK () {
      this.$emit('handleSelectStoreOK')
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
    padding: 30px 15px 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .store-right-item .item-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }
  .store-right-item .item-title h5 {
    color: #888888;
    font-weight: normal;
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
    padding: 10px 15px;
    position: relative;
    color: #525252;
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

</style>
