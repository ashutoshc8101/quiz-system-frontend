import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SignUp from '@/components/auth/signup';
import Login from '@/components/auth/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path : '/signup',
      name : 'SignUp',
      component : SignUp
    },
    {
      path : '/login',
      name : 'Login',
      component : Login
    }
  ]
});
