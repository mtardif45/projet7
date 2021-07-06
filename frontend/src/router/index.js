import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import AllUsers from '../views/AllUsers.vue'
import Profile from '../views/Profile.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Header from '../components/Header.vue'
import OnePost from '../components/OnePost.vue'
import Posts from '../components/Posts.vue'
import OneUser from '../components/OneUser.vue'
import Users from '../components/Users.vue'
import CreatePost from '../components/CreatePost.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Header',
    name: 'Header',
    component: Header
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'OnePost',
    component: OnePost
  },
  {
    path: '/Feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/accounts',
    name: 'AllUsers',
    component: AllUsers
  },
  {
    path: '/accounts/:id',
    name: 'OneUser',
    component: OneUser
  },
  {
    path: '/accounts',
    name: 'Users',
    component: Users
  },
  {
    path: '/add',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
