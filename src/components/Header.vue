<template lang="html">

  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link :to="{name : 'Home'}" class="navbar-brand">Quiz-App</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <router-link :to="{ name : 'SignUp'}" tag="li" class="nav-item" active-class="active"><a class="nav-link">Sign Up</a></router-link>
        </ul>

      </div>
    </nav>

  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
