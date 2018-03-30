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


  /* 固定背景 */
  .fixedBg {
    height: 100vh;
    overflow: hidden;
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



  /* 区域块 table 样式 */
  .table {
    width: 100%;
    border-collapse: collapse;
    color: #525252;
  }
  .table tr td {
    text-align: center;
    padding: 8px 0;
  }
  .table .active {
    background-color: #e5e5e5;
  }
  .table-bordered tr td {
    position: relative;
  }
  .table-bordered tr td::after {
    content: '';
    height: 200%;
    width: 200%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #e5e5e5;
    transform: scale(.5);
    -webkit-transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: 0 0;
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
  .active span {
    color: #20ae93;
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






  /* 单元格样式 */
  .cell {
    height: 100px;
    width: 49%;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .cell:active {
    opacity: .8;
  }
  .cell-1 {
    background-color: #e1b14b;
  }
  .cell-2 {
    background-color: #33b79f;
  }
  .cell-3 {
    background-color: #41c8cc;
  }
  .cell-4 {
    background-color: #ec6e62;
  }
  .cell-5,
  .cell-6 {
    background-color: #f2f2f2;
    color: #525252;
  }
  .cell > div {
    text-align: center;
  }
  .cell > div > p {
    font-size: 14px;
  }
  .cell-5 > div > p,
  .cell-6 > div > p {
    color: #878787;
  }
  .tab {
    display: flex;
    margin-bottom: 20px;
  }
</style>
