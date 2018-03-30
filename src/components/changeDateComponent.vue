<template>
  <div class="dateWrapper" v-if="isShow">
    <ul>
      <li @click="handleSelectDateOK(index)"
        v-for="(item, index) in dateList">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store/store'
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
  computed: {
    dateList () {
      return this.$store.state.dateList
    }
  },
  methods: {
    handleSelectDateOK (index) {
      this.$emit('handleSelectDateOK')
      this.$store.commit('changeDate', {num:index})
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
    z-index: 2;
    box-shadow: 1px 1px 10px #9f9f9f;
  }
  .dateWrapper ul li {
    padding: 10px 15px;
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
