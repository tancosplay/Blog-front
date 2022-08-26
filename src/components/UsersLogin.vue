<template>
    <div class="container">
        <form class="form">
            <h2 id="loginButton">登录</h2>
            <div class="box">
                <div class="box">
                    <label for="用户名">用户名</label>
                    <input type="text" placeholder="请输入用户名" v-model="UserInputName">
                </div>
                <div class="box">
                    <label for="密码">密码</label>
                    <input type="password" placeholder="请输入密码" v-model="UserInputPassword" autocomplete="current-passworrd">
                </div>
            </div>
            <div class="box">
                <router-link :to="{name: 'UserPageIndex', params: {check: check, UserInputName: UserInputName}}">
                  <button id="login">登录</button>
                </router-link>
            </div>
            <div id="temp">
              <router-link :to="{name: 'UsersRegist'}">注册</router-link>
            </div>
        </form>
    </div>
</template>

<script>
  export default {
      name: "UsersLogin",
      data () {
          return {
              UserInputName: '',
              UserInputPassword: '',
          }
      },

      computed: {
        message() {
          return JSON.parse(localStorage.getItem(this.UserInputName)) || ''
        },

        essayNum() {
          return this.message.essayNum
        },
        
        UserPassword() {
          try {
            return this.message.password
          } catch (error) {
              return ''
          } 
        },

        check() {
          if (this.UserInputPassword == this.UserPassword && this.UserInputName.trim() != '') {
            return true
          } else {
            return false
          }
        }
      }
  }
</script>

<style>
  body {
    background-color: #f9fafb;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-image: url("../assets/QQ图片20220814114333.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100vw;
    position: absolute;
  }

  .container {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    width: 400px;
  }

  .box {
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%
  }

  #loginButton {
    text-align: center;
    margin: 0 0 20px;
  }

  .form {
    padding: 30px 40px;
  }

  label {
    color: #777;
    display: block;
    margin-bottom: 5px;
    text-align: left;
  }

  input {
    border: 2px solid rgba(255, 255, 255, 0.2);;
    border-radius: 4px;
    display: block;
    width: 92%;
    padding: 10px;
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.6);;
  }

  input:focus {
    outline: 0;
    border-color: #777;
 }

   button {
    display: block;
    width: 100%;
    margin-bottom: 5%;
    padding: 10px;
    border-radius: 4px;
    color: #fff;;
 }

   #login {
    background-color:#3498db;
    border: 2px solid #3498db;
 }

   #temp {
    display: flex;
    justify-content: center;
 }

   a {
    text-decoration: none;
    font-size: 2px;
    width: 30%;
    text-align: center;
    color: #2c3e50
 }

 button {
  cursor: pointer;
 }
</style>