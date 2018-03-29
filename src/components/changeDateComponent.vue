<template>
  <div class="dateWrapper" v-if="isShow">
    <ul>
      <li @click="handleSelectDateOK">日汇总</li>
      <li @click="handleSelectDateOK">周汇总</li>
      <li @click="handleSelectDateOK">月汇总</li>
      <li @click="handleSelectDateOK">年汇总</li>
    </ul>
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
  methods: {
    handleSelectDateOK () {
      this.$emit('handleSelectDateOK')
    }
  }
}
</script>

<style scoped>
  .dateWrapper {
    position: fixed;
    top: 80px;
    left: 0;
    background-color: #fff;
    width: 100%;
  }
  .dateWrapper ul li {
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .dateWrapper ul li:active {
    background-color: #ececec;
  }
  .dateWrapper ul li::after {
    content: '';
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    color: #e5e5e5;
    transform-origin: 0 100%;
    transform: scaleY(.5);
  }
</style>
