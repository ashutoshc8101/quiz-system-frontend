<template lang="html">
  <div class="">
    <div class="card card-custom">
      <div class="card-header text-white">
        Create a new Account
      </div>
      <div class="card-body">

        <div class="card bg-danger text-white" v-if="message !== ''">
          <div class="card-body">
            {{ message }}
          </div>
        </div>

        <form @submit.prevent="submit()">


          <div class="form-group row" :class="{'has-error': errors.has('name') }">
            <label for="name" class="control-label col-md-4">Name:</label>
            <div class="col-md-8">
              <input type="text" name="name" v-validate="'required|required'"
               placeholder="someone" class="form-control form-control-custom"
                v-model="name" :data-toggle=" errors.has('name') ? 'tooltip': ''" data-placement="top" :title="errors.first('name')" />
            </div>
          </div>

          <div class="form-group row" :class="{'has-error': errors.has('email') }">
            <label for="email" class="control-label col-md-4">Email:</label>
            <div class="col-md-8">
              <input type="text" name="email" v-validate="'required|email'"
               placeholder="someone@somewhere.com" class="form-control form-control-custom"
                v-model="email"
                :data-toggle=" errors.has('email') ? 'tooltip': ''" data-placement="top" :title="errors.first('email')"  />

            </div>
          </div>

          <div class="form-group row" :class="{'has-error': errors.has('password') }">
            <label for="password" class="control-label col-md-4">Password:</label>
            <div class="col-md-8">
              <input type="password" v-validate="'required|min:6'"
              name="password" placeholder="top-secret"
               class="form-control form-control-custom" v-model="password"
               :data-toggle=" errors.has('password') ? 'tooltip': ''" data-placement="top" :title="errors.first('password')"  />

            </div>
          </div>

          <div class="form-group row" :class="{'has-error': errors.has('cnfrnpassword') }">
            <label for="cp" class="control-label col-md-4">Confirm Password:</label>
            <div class="col-md-8">
              <input type="password" name="cnfrnpassword" placeholder="top-secret" v-validate="'required|confirmed:password'"
               class="form-control form-control-custom" v-model="cnfrnpassword"
               :data-toggle=" errors.has('cnfrnpassword') ? 'tooltip': ''"
                data-placement="top" :title="errors.has('cnfrnpassword') ? errors.first('cnfrnpassword') : '' "
                 />

            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <input type="submit" value="Sign Up"
               class="btn btn-custom" style="display: inline-block; width: 200px;"
               :disabled="errors.any()" />

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
      cnfrnpassword: '',
      message : '',
    };
  },

  methods:{
    submit(){
        this.$validator.validateAll();
        if(!this.errors.any()){
          this.$http.post('auth/register', {
          	email: this.email,
          	name: this.name,
          	password: this.password
          }).then(response=>{
            return response.json();
          }, error => error.json()).then(data => {
            if(data.auth){
              this.name = '';
              this.email = '';
              this.password = '';
              this.cnfrnpassword = '';


              this.$store.dispatch('setToken', data.token);

              this.$http.get('auth/me').then(response => response.json(), error => error.json())
                .then(data => {
                  if(data.status) {
                    this.$store.dispatch('setUser', data.user);
                  }else {
                    this.message = data.message;
                  }
                });

            }else {
              this.message = data.msg;
            }
          }).then(()=> this.$validator.reset()).then(()=> this.errors.clear());
        }

    }
  }

}
</script>

<style lang="scss">
</style>
