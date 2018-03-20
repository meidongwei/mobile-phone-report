<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
img {
  display: block;
}
body {
  background-color: #f5f5f5;
}
.btn {
  border: none;
  display: block;
  padding: 10px 20px;
  background-color: #fff;
  color: #606060;
  border-radius: 3px;
}
.btn.active {
  position: relative;
}
.btn.active:after {
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
  background-color: #a581ff;
}
.btn-primary:active {
  background-color: #8161d2;
}
</style>
