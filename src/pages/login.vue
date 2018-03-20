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
      <button @click="handleLogin" class="btn">登录</button>
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
  .btn {
    border: none;
    display: block;
    padding: 10px 20px;
    background-color: #a581ff;
    width: 80%;
    color: #fff;
    border-radius: 3px;
  }
  .btn:active {
    background-color: #8161d2;
  }
  .btn-box {
    display: flex;
    justify-content: center;
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
</style>
