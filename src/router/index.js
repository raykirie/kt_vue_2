import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import UsersPage from '../pages/UsersPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.ROOT_URL),
    routes: [
        {
            path: '/',
            component: HomePage
        },

        {
            path: '/users',
            component: UsersPage 
        }, 

        {
            path: '/login',
            component: LoginPage
        }, 

        {
            path: '/profile',
            component: ProfilePage
        },
    ]
})


function getAuth(){
    const token = localStorage.getItem('token')
  if(token !== null){
    return true
  } else {
    return false
  }
}

router.beforeEach((to, from, next) => {
    let isAuth = getAuth()
  if (to.path === '/profile' && !isAuth){
    next('/login')
  } else {
    next()
  }
})

export default router