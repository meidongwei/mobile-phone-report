<template>
  <div>
    <div class="logo flex-center">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="form-con">
      <input type="text" v-model="username" placeholder="账号">
      <input type="text" v-model="password" placeholder="密码">
    </div>
    <div class="btn-box">
      <button @click="handleLogin" class="btn btn-primary">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      if (this.username === 'admin' && this.password === '123123') {
        this.$router.push({ name: 'layout' })
      }
    }
  }
}
</script>

<style scoped>
  .logo {
    padding: 100px 20px;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-con {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .form-con input {
    display: block;
    padding: 15px 20px;
    width: 100%;
    border: none;
  }
  .btn-box {
    display: flex;
    justify-content: center;
  }
  .btn-box .btn {
    width: 80%;
  }
</style>
