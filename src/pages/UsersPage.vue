<template>
    <div class="user">
        <div 
        v-for="user in users" 
        :key="user.id"
        class="card_user"
        >
        <router-link :to="'/profile/' + user.id">
            <p>{{ user.firstName }}</p>
            <p>{{ user.lastName }}</p>
            <p>{{ user.maidenName }}</p>
            <div class="email">
                <h3>{{ user.email }}</h3>
            </div>
        </router-link>
        </div>
    </div>
    <router-view></router-view>
  </template>
  
  <script>
  import axios from 'axios';
  import {RouterView, RouterLink} from 'vue-router'
  
  export default {
    data() {
      return {
        users: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('https://dummyjson.com/users');
          this.users = response.data.users;
        } catch (error) {
          console.error('Ошибка при выполнении запроса:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  .user{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
    .card_user{
        display: flex;
        flex-direction: row;
        border: 1px solid black;
        width: 530px;
        border-radius: 20px;
        box-shadow: 4px 4px 4px #00000099;
        border: none;
        margin-bottom: 20px;
    }
    .card_user > p {
        display: flex;
        justify-content: left;
        text-align: left;
        font-size: 20px;
        color: black;
    }
    .email > h3 {
        display: flex;
        justify-content: right;
        text-align: right;
        color: #00000099;
    }
  </style>
  