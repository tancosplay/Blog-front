<template>
      <div class="container">
        <p id="register-login">
            <router-link :to="{name: 'UsersLogin'}">
                <font-awesome-icon icon="fas fa-reply" size="6x"/>
            </router-link>
        </p>
      <form id="form" class="form">
        <h2>注册</h2>
        <div class="form-control">
          <label for="用户名">用户名</label>
          <input type="text" id="用户名" placeholder="输入用户名" v-model="UserName" @blur="checkUserName"/>
          <small ref="UserName">用户名不规范或已存在</small>
        </div>
        <div class="form-control">
          <label for="邮箱">邮箱</label>
          <input type="text" id="邮箱" placeholder="邮箱地址" v-model="address" />
          <small ref="address">邮箱名错误</small>
        </div>
        <div class="form-control">
          <label for="密码">密码</label>
          <input type="password" id="密码" placeholder="密码" v-model="password" @blur="checkPassword"/>
          <small ref="password">密码不符合规范</small>
        </div>
        <div class="form-control">
          <label for="password2">确认密码</label>
          <input
            type="password"
            id="password2"
            placeholder="再次输入密码"
            v-model="password2"
            @blur="checkPassword2"/>
          <small ref="password2">密码错误</small>
        </div>
        <input type="submit" id="submit" value="注册" @click="checkAll">
      </form>
    </div>
</template>

<script>
 export default {
     name: 'UsersRegist',

     data () {
         return {
             error: false,
             UserName: '',
             address: '',
             password: '',
             password2: '',
             arr: JSON.parse(localStorage.getItem('Users')) || [],
             personMessage: {}
         }
     },

     methods: {
      showError (small) {
        small.parentElement.className = 'form-control error'
      },

      showSuccess (small, successMessage) {
        small.parentElement.className = 'form-control success';
        small.innerHTML = successMessage
      },

      checkUserName() {
        if (!(this.UserName.trim() && this.arr.every(item => item != this.UserName))) {
          this.error = true;
          this.showError(this.$refs.UserName);
        } else {
          this.showSuccess(this.$refs.UserName, '用户名符合规范');
        }
      },

      checkPassword() {
        if (this.password.length < 6) {
          this.error = true;
          this.showError(this.$refs.password)
        } else {
          this.showSuccess(this.$refs.password, '密码符合规范');
        }
      },

      checkPassword2() {
        if (this.password != this.password2) {
          this.error = true;
          this.showError(this.$refs.password2)
        } else {
          this.showSuccess(this.$refs.password2, '两次密码一致')
        }
      },

      checkAll () {
        if (!confirm("确定注册吗？")) {
          return;
        }
        if (this.error) {
          alert('信息存在错误');
        } else {
          this.arr.push(this.UserName);
          localStorage.setItem('UsersName', JSON.stringify(this.arr));
          this.personMessage.password = this.password;
          this.personMessage.essayNum = 0;
          console.log(this.personMessage);
          localStorage.setItem(this.UserName, JSON.stringify(this.personMessage));
          alert('注册成功');
        }
      }
     }
 }
</script>

<style>
    :root {
      --success-color: #2ecc71;
      --error-color: #e74c3c;
      overflow-y: auto;
      overflow-x: hidden;
    }
    

    * {
      box-sizing: border-box;
    }

    #register-login{
        float: right;
        margin: 2%;
    }
    
    h2 {
      text-align: center;
      margin: 0 0 20px;
    }

    .form {
      padding: 30px 40px;
    }

    .form-control {
      margin-bottom: 10px;
      padding-bottom: 20px;
      position: relative;
    }

    .form-control label {
      color: #777;
      display: block;
      margin-bottom: 5px;
    }

    .form-control input {
      border: 2px solid #f0f0f0;
      border-radius: 4px;
      display: block;
      width: 100%;
      padding: 10px;
      font-size: 14px;
    }

    .form-control input:focus {
      outline: 0;
      border-color: #777;
    }

    .form-control.success input {
      border-color: #2ecc71
    }

    .form-control.error input {
      border-color: #e74c3c;
    }

    .form-control small {
      color: #e74c3c;
      position: absolute;
      bottom: 0;
      left: 0;
      visibility: hidden;
    }

    .form-control.error small {
      visibility: visible;
    }

    .form-control.success small {
        color: #2ecc71;
        position: absolute;
        bottom: 0;
        left: 0;
        visibility: visible;
    }
    .form #submit {
        cursor: pointer;
        background-color: #3498db;
        border: 2px solid #3498db;
        border-radius: 4px;
        color: #fff;
        display: block;
        font-size: 16px;
        padding: 10px;
        margin-top: 20px;
        width: 100%;
    }
</style>