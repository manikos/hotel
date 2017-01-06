<template>
    <div>
        <form v-on:submit.prevent='register'>
            <!--Email input-->
            <div class="columns">
                <div class="column is-full">
                    <div class="control has-icon has-icon-right">
                        <input id="email"
                               type="text"
                               class="input is-medium"
                               placeholder="Enter Email"
                               v-model="user.email"
                        >
                        <span class="icon">
                            <i class="fa fa-at"></i>
                        </span>
                    </div>
                </div>
            </div>
            <!--Username input-->
            <div class="columns">
                <div class="column is-full">
                    <div class="control has-icon has-icon-right">
                        <input id="username"
                               type="text"
                               class="input is-medium"
                               placeholder="Enter Username"
                               v-model="user.username"
                        >
                        <span class="icon">
                            <i class="fa fa-user"></i>
                        </span>
                    </div>
                </div>
            </div>
            <!--Password input-->
            <div class="columns">
                <div class="column is-full">
                    <div class="control has-icon has-icon-right">
                        <input id="password"
                               type="password"
                               class="input is-medium"
                               placeholder="Enter Password"
                               v-model="user.password"
                        >
                        <span class="icon">
                            <i class="fa fa-key"></i>
                        </span>
                    </div>
                </div>
            </div>
            <!--Submit button-->
            <div class="columns">
                <div class="column is-full">
                    <button type="submit" class="button is-primary is-fullwidth is-large">
                        <span class="icon"><i class="fa fa-toggle-up"></i></span>
                        <span>Register</span>
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <p class="text-center">
            Already have a account? Just login
            <router-link to="login">here</router-link>
        </p>
    </div>
</template>

<script>
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

<style lang="scss" rel="stylesheet/scss">

</style>