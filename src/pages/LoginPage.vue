<template>
  <div class="main">
    <div class="page_login">
      <div class="text_login">
        <h2>Авторизация</h2>
        <p style="color: red" v-if="res.message">{{ res.message }}</p>
      </div>
      <form @submit.prevent="submit" class="form">
        <div class="login">
          <p>Login</p>
          <input v-model="loginValue" />
        </div>
        <div class="password">
          <p>Password</p>
          <input type="password" v-model="passwordValue" />
        </div>
        <div class="login_btn">
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loginValue: '',
      passwordValue: '',
      res: {},
    };
  },
  methods: {
    async submit() {
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: this.loginValue,
          password: this.passwordValue,
        });

        this.res = response.data;

        if (this.res.token) {
          localStorage.setItem('token', this.res.token);
          this.$router.replace('/profile');
        } else {
          localStorage.removeItem('token');
        }
      } catch (error) {
        this.res.message = error.response.data.message;
      }
    },
  },
};
</script>
<style scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
}
 .page_login{
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 4px 4px 4px #00000099;
    width: 335px;
    height: 335px;
 }
 .text_login{
    display: flex;
 }
 .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
 .login{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
 }
 .login > p {
    color: #00000099;
    font-size: 20px;
    margin-bottom: 6px;
 }
 .login > input {
    width: 152px;
    height: 29px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px grey;
    border: none;
 }
 .password{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
 }
 .password > p {
    color: #00000099;
    font-size: 20px;
    margin-bottom: 6px;
 }
 
 .password > input {
    width: 152px;
    height: 29px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px grey;
    border: none;
 }
 .login_btn{
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .login_btn > button { 
    background-color: white;
    border: none;
    color: #00000099;
    font-size: 20px;
 }
</style>