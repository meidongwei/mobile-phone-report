<template>
  <div>
    <div class="list-cells">
      <a href="javascript:;" class="list-cell">
        <div class="list-cell-bd">222</div>
        <div class="list-cell-ft"></div>
      </a>
      <a href="javascript:;" class="list-cell">
        <div class="list-cell-bd">222</div>
        <div class="list-cell-ft"></div>
      </a>
      <a href="javascript:;" class="list-cell">
        <div class="list-cell-bd">222</div>
        <div class="list-cell-ft"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
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
</style>
