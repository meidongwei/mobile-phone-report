<template>
  <div>
    <div class="list-cells list-cells-input">
      <div class="list-cell">
        <div class="list-cell-bd">工号</div>
        <div class="list-cell-input">
          <input type="text" placeholder="请填写工号">
        </div>
      </div>
      <div class="list-cell">
        <div class="list-cell-bd">旧密码</div>
        <div class="list-cell-input">
          <input type="password" placeholder="请填写旧密码">
        </div>
      </div>
      <div class="list-cell">
        <div class="list-cell-bd">新密码</div>
        <div class="list-cell-input">
          <input type="password" placeholder="请输入新的密码">
        </div>
      </div>
      <div class="list-cell">
        <div class="list-cell-bd">确认密码</div>
        <div class="list-cell-input">
          <input type="password" placeholder="请再次输入新密码">
        </div>
      </div>
    </div>

    <div class="list-cells">
      <a href="javascript:;" class="list-cell list-cell-btn">
        <div class="list-cell-bd">保存</div>
      </a>
    </div>

    <!-- <a href="javascript:;"
      class="btn btn-primary btn-fixed-bottom">
      保存
    </a> -->
  </div>
</template>

<script>
export default {
  methods: {
    goto () {
      this.$router.push({ name: 'yonghu' })
    }
  }
}
</script>

<style lang="css">
</style>
