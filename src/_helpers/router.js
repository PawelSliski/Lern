import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../loggedin/HomePage'
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'
import LandingPage from '../index'
import Users from '../home/users'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [

    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/home', component: LandingPage },
    { path: '*', redirect: '/home' },
    { path: '/congratulations', component: HomePage },
    { path: '/users', component: Users}

  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  next();
})



