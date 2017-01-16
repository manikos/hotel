<template>
    <div>
        <div class="columns">
            <div class="column is-full">
                <form v-on:submit.prevent='login'>
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
                                <span class="icon"><i class="fa fa-user"></i></span>
                                <span class="help is-danger">This email is invalid</span>
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
                                <span class="icon"><i class="fa fa-key"></i></span>
                                <span class="help is-danger">This email is invalid</span>
                            </div>
                        </div>
                    </div>
                    <!--Submit button-->
                    <div class="columns">
                        <div class="column is-full">
                            <button type="submit" class="button is-primary is-fullwidth is-large">
                                <span class="icon"><i class="fa fa-sign-in"></i></span>
                                <span>Login</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <hr>
        <div class="columns">
            <div class="column is-full">
                <p class="text-center">
                    You don't have an account? Please register
                    <router-link to="register">here</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    //
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    username: '',
                    password: '', // TODO: should this be encrypted? Are we OK using https:// ?
                }
            }
        },
        methods: {
            // TODO consider moving method to `Auth` plugin
            login() {
                console.log('υπάρχω');
                this.$http.post('/auth/', this.user)
                    .then(response => {
                        // Store the received JWT + expiration date
                        this.$auth.setToken(response.data.token, Date.now() + 14400000);
                        // Redirect user
                        // TODO: Is server sending redirect urls? what we do?
                        // TODO: redirect according to the role?
                        this.$router.push({name: 'dash'})

                    })
                    .catch(response => {
                        if (response.status === 0)
                            alert('Python server is not running bro!')
                    });
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>