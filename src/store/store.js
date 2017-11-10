import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({

  state:{
    user: {
      id: '',
      name: '',
      email: ''
    },
    auth: {
      token: '',
      isAuthenticated: false
    }
  },

  getters: {
    getToken(state){
      return state.auth.token;
    },
    getAuthState(state) {
      return state.auth.isAuthenticated;
    }
  },

  mutations: {
    'SET_USER'(state, user){
      state.user.id = user._id;
      state.user.name = user.name;
      state.user.email = user.email;
    },

    'SET_TOKEN'(state, token){
      Vue.http.interceptors.push(function(request, next) {

        request.headers.set('x-access-token', token);

        next();

      });
      state.auth.token = token;
      state.auth.isAuthenticated = true;
    },

    logout(state) {
      state.user = {
        id: '',
        name: '',
        email: ''
      };

      state.auth.isAuthenticated = false;
      state.auth.token = '';
    }
  },

  actions: {
    setUser(context, user){
      context.commit('SET_USER', user);
    },
    setToken({ commit }, token){
      commit('SET_TOKEN', token);
    }

  }

});
