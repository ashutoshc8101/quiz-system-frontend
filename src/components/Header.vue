<template lang="html">

  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link :to="{name : 'Home'}" class="navbar-brand">Quiz-App</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <template v-if="!getAuthState">
            <router-link :to="{ name : 'Login'}" tag="li" class="nav-item" active-class="active"><a class="nav-link">Login</a></router-link>
            <router-link :to="{ name : 'SignUp'}" tag="li" class="nav-item" active-class="active"><a class="nav-link">Register</a></router-link>
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

<style lang="css">
</style>
