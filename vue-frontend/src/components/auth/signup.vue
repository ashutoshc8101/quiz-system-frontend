<template lang="html">
  <div class="">
    <div class="card">
      <div class="card-header text-white bg-primary">
        Create a new Account
      </div>
      <div class="card-body">

        <form>
          <div class="form-group row">
            <label for="name" class="control-label col-md-4">Name:</label>
            <div class="col-md-8">
              <input type="text" name="name" placeholder="someone" class="form-control" v-model="name" />
            </div>
          </div>

          <div class="form-group row">
            <label for="email" class="control-label col-md-4">Email:</label>
            <div class="col-md-8">
              <input type="text" name="email" placeholder="someone@somewhere.com" class="form-control" v-model="email" />
            </div>
          </div>

          <div class="form-group row">
            <label for="password" class="control-label col-md-4">Password:</label>
            <div class="col-md-8">
              <input type="password" name="password" placeholder="top-secret" class="form-control" v-model="password" />
            </div>
          </div>

          <div class="form-group row">
            <label for="cp" class="control-label col-md-4">Confirm Password:</label>
            <div class="col-md-8">
              <input type="password" name="cp" placeholder="top-secret" class="form-control" v-model="cnfrnpassword" />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <input type="submit" value="Sign Up" class="btn btn-primary" style="display: inline-block; width: 200px;" />
            </div>
          </div>


        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      name: '',
      email: '',
      password: '',
      cnfrnpassword: ''
    };
  }

}
</script>

<style lang="css">
</style>
