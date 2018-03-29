<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* primary色值#20ae93 */
  /* 文字黑#525252 */
  /* 文字灰#ababab */
  /* html背景色#f5f5f5 */
  /* 按钮active状态的颜色#ececec */

  /* 格式化样式 */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  a, button, input, label {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  img {
    display: block;
  }
  body {
    background-color: #f5f5f5;
  }
  li {
    list-style: none;
  }

  /* 按钮样式 */
  .btn {
    border: none;
    display: block;
    padding: 10px 20px;
    background-color: #fff;
    color: #525252;
    border-radius: 3px;
    font-size: 16px;
  }
  .btn:active {
    background-color: #ececec;
  }
  .btn-tab:active {
    background-color: #fff;
  }
  .btn-tab.active {
    position: relative;
  }
  .btn-tab.active::after {
    position: absolute;
    bottom: 0;
    left: 10%;
    content: '';
    width: 80%;
    height: 3px;
    background-color: #20ae93;
  }
  .btn-primary {
    color: #fff;
    background-color: #20ae93;
  }
  .btn-primary:active {
    background-color: #188b75;
  }
  .btn-fixed-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    text-align: center;
    z-index: 3;
  }
</style>
