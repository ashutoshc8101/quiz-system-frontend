<template lang="html">
  <div class="">
    <div class="card">
      <div class="card-header text-white bg-primary">
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
              <input type="text" name="name" v-validate="'required|alpha_num'" placeholder="someone" class="form-control" v-model="name" />
              <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>
          </div>

          <div class="form-group row" :class="{'has-error': errors.has('email') }">
            <label for="email" class="control-label col-md-4">Email:</label>
            <div class="col-md-8">
              <input type="text" name="email" v-validate="'required|email'" placeholder="someone@somewhere.com" class="form-control" v-model="email" />
              <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>

            </div>
          </div>

          <div class="form-group row" :class="{'has-error': errors.has('password') }">
            <label for="password" class="control-label col-md-4">Password:</label>
            <div class="col-md-8">
              <input type="password" v-validate="'required|min:6'" name="password" placeholder="top-secret" class="form-control" v-model="password" />
              <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>

            </div>
          </div>

          <div class="form-group row" :class="{'has-error': cnfrn }">
            <label for="cp" class="control-label col-md-4">Confirm Password:</label>
            <div class="col-md-8">
              <input type="password" name="cp" placeholder="top-secret" class="form-control" v-model="cnfrnpassword" />
              <p class="text-danger" v-if="cnfrn">Passwords must match</p>

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
      cnfrnpassword: '',
      message : ''
    };
  },

  computed:{
    cnfrn(){
      return this.password != this.cnfrnpassword;
    }
  },
  methods:{
    submit(){
      if(this.name !== '' && this.email !== '' && this.password !== '' && this.cnfrnpassword !== '' && this.cnfrnpassword === this.password){
        if(!this.errors.items[0]){
          this.$http.post('https://quiz-system-api.herokuapp.com/api/auth/register', {
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
              this.errors.clear();

              this.$store.dispatch('setToken', data.token);

              this.$http.get('https://quiz-system-api.herokuapp.com/api/auth/me').then(response => response.json(), error => error.json())
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
          });
        }
      }
    }
  }

}
</script>

<style lang="css">
</style>
