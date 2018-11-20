<template>
    <div class="login-box">
        <div class="logo">
            <a href="javascript:void(0);">Admin<b>BSB</b></a>
            <small>Admin BootStrap Based - Material Design</small>
        </div>
        <div class="card">
            <div class="body">
                <div class="msg">Sign in to start your session</div>
                <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                    <div class="form-line error">
                        <input type="text" class="form-control" v-model="username" placeholder="Username"
                               required="" autofocus="" aria-required="true" aria-invalid="true">
                    </div>
                </div>
                <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">lock</i>
                        </span>
                    <div class="form-line error">
                        <input type="password" class="form-control" v-model="password" placeholder="Password"
                               required="" aria-required="true">
                    </div>
                </div>
                <div class="row">

                    <div class="col-xs-12">
                        <button @click="login()" class="btn btn-block bg-pink waves-effect" type="submit">登录</button>
                    </div>
                </div>
                <div class="row m-t-15 m-b--20">
                    <div class="col-xs-6">
                        <a href="#">Register Now!</a>
                    </div>
                    <div class="col-xs-6 align-right">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import JwtToken from '../utils/jwt';

    export default {
        name: 'login',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        mounted() {
            $('body').addClass('login-page');
        },
        methods: {
            login() {

                let formData = {
                    'email': this.username,
                    'password': this.password
                };

                this.$store.dispatch('loginRequest',formData).then(response=>{
                    //TODO
                    this.$router.push({name:'profile'});
                });
            }
        }
    }
</script>
