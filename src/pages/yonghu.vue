<template>
  <div>
    <div class="list-cells">
      <a href="javascript:;" class="list-cell">
        <div class="list-cell-bd">销售计划</div>
        <div class="list-cell-ft"></div>
      </a>
      <a href="javascript:;" class="list-cell"
        @click="goto">
        <div class="list-cell-bd">修改密码</div>
        <div class="list-cell-ft"></div>
      </a>
    </div>
    <div class="list-cells">
      <a href="javascript:;" class="list-cell list-cell-btn">
        <div class="list-cell-bd">退出登录</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto () {
      this.$router.push({ name: 'updatePwd' })
    }
  }
}
</script>

<style scoped>
</style>
