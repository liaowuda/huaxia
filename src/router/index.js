import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Survey from '@/components/Survey'
import Recruit from '@/components/Recruit'
import Student from '@/components/Student'
import Schoollink from '@/components/Schoollink'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/survey',
      name:'Survey',
      component:Survey
    },
    {
      path:'/recruit',
      name:'Recruit',
      component:Recruit
    },
    {
      path:'/student',
      name:'Student',
      component:Student
    },
    {
      path:'/Schoollink',
      name:'Schoollink',
      component:Schoollink
    }

  ]
})
