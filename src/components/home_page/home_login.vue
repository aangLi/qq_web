<template>
  <div class="home-login">
    <div class="home-login-container">
    <Delete />
    <div class="home-login-container-title">帐号密码登录</div>
    <div class="home-login-container-login">
      <input type="text" id="username" placeholder="支持QQ号/邮箱/手机号登录"/>
    </div>
    <div class="home-login-container-login">
      <input type="password" id="password" placeholder="密码"/>
    </div>
    <Button>登录</Button>
  </div>
  </div>
</template>

<script>
import Button from './home_button'
import Delete from '../common/delete'
export default {
  components: {
    Button,
    Delete
  }
}

</script>

<style>
  .home-login {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .home-login-container {
    position: relative;
    margin: 0 auto;
    width: 480px;
    height: 300px;
    background-color: white;
  }
  .home-login-container-title {
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  .home-login-container-login {
    padding: 10px;
    height: 50px;
  }
  .home-login-container-login input {
    margin-top: 0 10px 0 10px;
    box-sizing: border-box;
    border: 1px solid gray;
    outline: none;
    border-radius: 4px;
    height: 50px;
    width: 100%;
    font-size: 20px;
    padding-left: 10px;

  }
</style>
