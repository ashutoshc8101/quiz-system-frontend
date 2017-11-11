<template lang="html">

  <div>
      <nav class="navbar navbar-expand-lg ">

        <router-link :to="{name : 'Home'}" class="navbar-brand"><img src="./../assets/lion.svg" /> Quiz-App</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <template v-if="!getAuthState">
            <router-link :to="{ name : 'Login'}" tag="li" class="nav-item" active-class="active login-active"><a class="nav-link login">Log In</a></router-link>
            <router-link :to="{ name : 'SignUp'}" tag="li" class="nav-item" active-class="active register-active"><a class="nav-link register">Register</a></router-link>
          </template>
          <template v-if="getAuthState">
            <li class="nav-item"><a href="javascript.void(0)" class="nav-link" @click.prevent="logout">Logout</a></li>
          </template>

        </ul>

      </div>
    </nav>

  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {

  computed : {
    ...mapGetters([
      'getAuthState'
    ])
  },

  methods : {
    logout(){
      this.$store.commit('logout');
    }
  }

}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
  .navbar.navbar-expand-lg{
    background-color: $white;
    height: 70px;
    box-shadow: 0 1px 0px 0px rgba(0,0,0,0.1);
    font-family: 'Montserrat';
    font-weight: 600;
    letter-spacing: 0.08em;


    .navbar-brand img{
      height: 40px;
      width: 40px;
      margin-right: 10px;
    }

    .nav-link {
      color: $navColor;
      transition: all 0.2s;
      &:hover{
        color: #222 !important;
      }
    }

    .navbar-brand{
      color: $navColor;
      transition: color 0.2s;
      &:hover{
        color: #222;
      }
    }

    .active.login-active a{
      color: crimson !important;

      }
    .active.register-active a{
      color: $primaryColor !important;
    }

  }






</style>
