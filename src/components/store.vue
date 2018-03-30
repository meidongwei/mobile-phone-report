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
        <label class="check-box">
          <input type="checkbox">
          <span class="publicInput checkboxInput"></span>
        </label>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>裕华区</h5>
          <label class="check-box">
            <input type="checkbox">
            <span class="publicInput checkboxInput"></span>
          </label>
        </div>
        <ul>
          <li>
            中餐1店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐2店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐3店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐10店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
        </ul>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>桥西区</h5>
          <label class="check-box">
            <input type="checkbox">
            <span class="publicInput checkboxInput"></span>
          </label>
        </div>
        <ul>
          <li>
            中餐1店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐2店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐3店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐10店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
        </ul>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>桥东区</h5>
          <label class="check-box">
            <input type="checkbox">
            <span class="publicInput checkboxInput"></span>
          </label>
        </div>
        <ul>
          <li>
            中餐1店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐2店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐3店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐10店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
        </ul>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>开发区</h5>
          <label class="check-box">
            <input type="checkbox">
            <span class="publicInput checkboxInput"></span>
          </label>
        </div>
        <ul>
          <li>
            中餐1店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐2店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐3店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐10店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
        </ul>
      </div>
      <div class="store-right-item">
        <div class="item-title">
          <h5>长安区</h5>
          <label class="check-box">
            <input type="checkbox">
            <span class="publicInput checkboxInput"></span>
          </label>
        </div>
        <ul>
          <li>
            中餐1店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐2店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐3店
            <label class="check-box">
              <input type="checkbox">
              <span class="publicInput checkboxInput"></span>
            </label>
          </li>
          <li>
            中餐10店
            <label class="check-box">
              <input type="checkbox">
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
  .store .store-right-title:active {
    background-color: #ececec;
  }
  .store-right-item .item-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px 10px 8px;
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


  /* 多选框、单选框美化样式 */
  .check-box {
    display: flex;
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
