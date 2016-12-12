<template>
    <div>
        <h3>Enter your details to register</h3>
        <form v-on:submit.prevent='register'>
            <!--Email-->
            <div class="form-group">
                <label for='email'>Email</label>
                <input id="email"
                       type="text"
                       class="form-control"
                       placeholder="Enter Email"
                       v-model="user.email"
                >
            </div>
            <!--Username-->
            <div class="form-group">
                <label for='username'>Username</label>
                <input id="username"
                       type="text"
                       class="form-control"
                       placeholder="Enter Username"
                       v-model="user.username"
                >
            </div>
            <!--Password-->
            <div class="form-group">
                <label for='password'>Password</label>
                <input id="password"
                       type="text"
                       class="form-control"
                       placeholder="Enter Password"
                       v-model="user.password"
                >
            </div>
            <!--Submit button-->
            <button type="submit"
                    class="btn btn-success col-sm-12"
            >
                Register
            </button>
        </form>
        <hr>
        <p class="text-center">
            Already have a account? Just login
            <router-link to="login">here</router-link>
        </p>
    </div>
</template>

<script>

    //
    export default {
        name: 'register',
        data() {
            return {
                user: {
                    email: '',
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            // TODO consider moving method to `Auth` plugin
            register() {
                console.log(this.user);
                this.$http.post('/users', this.user)
                    .then(response => {
                        // TODO: Is server sending redirect urls? what we do?
                        //
                    })
                    .catch(response => {
                        //
                    });
            }
        }
    };
</script>

<style lang="sass" rel="stylesheet/scss">

</style>